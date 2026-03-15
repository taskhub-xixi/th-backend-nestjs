import {
  BadRequestException,
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { LoginDTO, RegisterDTO, UserResponse } from "src/model/auth.model";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { Logger } from "winston";
import { jwtConstants } from "./constants";
import { JwtPayload } from "./dto/payload-interface";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
    private readonly jwtService: JwtService,
  ) {}

  // SQL QUERY
  async create(request: RegisterDTO): Promise<UserResponse> {
    this.logger.info(`AUTH_SERVICE.create: ${JSON.stringify(request)}`);

    const userRegistered = await this.authRepository.findOne({
      where: { email: request.email },
    });

    if (userRegistered) {
      throw new HttpException("email or password is invalid", 400);
    }

    const hashPassword = await this.hash(request.password);
    await this.authRepository.query(
      "INSERT INTO users (username, email, password) VALUES(?, ?, ?)",
      [request.username, request.email, hashPassword],
    );

    return {
      username: request.username,
      email: request.email,
    };
  }

  // login SQL
  async login(request: LoginDTO, response: Response): Promise<UserResponse> {
    this.logger.info(`AUTH_SERVICE.login: ${JSON.stringify(request)}`);
    const data = await this.authRepository.findOne({
      where: { email: request.email },
    });
    if (!data) {
      throw new HttpException("email or password is invalid", 400);
    }

    const match = await bcrypt.compare(request.password, data.password);
    if (!match) {
      throw new UnauthorizedException("wrong password");
    }

    const payload = { sub: data.id, email: data.email };
    const token = await this.UpdateToken(payload, response);
    await this.updateRtHashDatabase(
      payload.sub,
      token.refresh_token,
      token.update_exp,
    );

    return {
      refresh_token: token.refresh_token,
      access_token: token.access_token,
    };
  }

  async verify(cookie: string): Promise<{ id: number }> {
    try {
      const data = await this.jwtService.verifyAsync<{ id: number }>(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
      return data;
    } catch (err: unknown) {
      throw new UnauthorizedException(
        (err as Error).message || "unknown message",
      );
    }
  }

  async refresh(
    oldRefreshToken: string,
    response: Response,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    this.logger.info(`AUTH_SERVICE.refresh: ${oldRefreshToken}`);
    // make payload variable global

    const payload =
      await this.jwtService.verifyAsync<JwtPayload>(oldRefreshToken);

    this.logger.debug(`payload: ${JSON.stringify(payload)}`);
    // find id
    const user = await this.authRepository.findOne({
      where: { id: payload.sub },
    });
    this.logger.debug(JSON.stringify(`user: ${user?.hashedRefreshToken}`));

    // validate
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!user.hashedRefreshToken) {
      throw new UnauthorizedException();
    }
    if (!user.refreshTokenExpAt) {
      throw new UnauthorizedException("Missing refresh token");
    }

    if (new Date() > user.refreshTokenExpAt) {
      throw new UnauthorizedException("Refresh token expired");
    }
    const isMatch = await bcrypt.compare(
      oldRefreshToken,
      user?.hashedRefreshToken,
    );
    if (!isMatch) {
      throw new HttpException("Token Invalid", 401);
    }

    // create token
    const token = await this.UpdateToken(payload, response);
    await this.updateRtHashDatabase(user.id, token.refresh_token);

    return {
      accessToken: token.access_token,
      refreshToken: token.refresh_token,
    };
  }

  // delete with SQL
  async deleteSQL(email: string, response: Response): Promise<void> {
    const data = await this.authRepository.findOne({ where: { email } });
    if (!data) {
      throw new BadRequestException("account is missing");
    }
    await this.authRepository.query("DELETE from users WHERE email = ? ", [
      email,
    ]);
    this.deleteTokens(response);
  }

  // reset password SQL
  async resetPassword(email: string, password: string): Promise<void> {
    const data = await this.authRepository.findOne({ where: { email } });
    if (!data) {
      throw new HttpException("account is missing", 400);
    }
    const hashPassword = await this.hash(password);
    await this.authRepository.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashPassword, email],
    );
  }

  // logout
  async logout(email: string, response: Response): Promise<void> {
    const data = await this.authRepository.findOne({ where: { email } });
    if (!data) {
      throw new BadRequestException("account is missing");
    }
    const token = "";
    await this.authRepository.query(
      "UPDATE users SET hashedRefreshToken = ? WHERE email = ?",
      [token, email],
    );
    response.clearCookie("refresh_token");
    response.clearCookie("access_token");
  }

  // =============== HELPER FUNCTION =====================

  // DO NOT CALL THIS FUNCTION INDEPENDENT , THIS FUNCTION ALREADY CALLED BY `UpdateToken` Function
  // update RtHash -> login function helpers
  async updateRtHashDatabase(id: number, rt: string, exp?: Date) {
    // GET EXPIRES DATE AND SET DATE
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    if (!id) {
      throw new HttpException("Something Wrong", 401);
    }
    const hash = await this.hash(rt);
    this.logger.debug(
      `AUTH_SERVICE.UpdateRtHash ID: ${id} token: ${rt} hash: ${hash}`,
    );
    if (!exp) {
      this.logger.debug(`AUTH_SERVICE.updateRtHash.access_token: ${rt}`);
      return await this.authRepository.query(
        "UPDATE users SET hashedRefreshToken = ? WHERE id = ?",
        [hash, id],
      );
    } else {
      this.logger.debug(`AUTH_SERVICE.updateRtHash.refresh_token: ${rt}`);
      return await this.authRepository.query(
        "UPDATE users SET hashedRefreshToken = ?, refreshTokenExpAt = ? WHERE id = ?",
        [hash, exp, id],
      );
    }
  }

  // hash -> logic function helpers
  async hash(pass: string) {
    return await bcrypt.hash(pass, 12);
  }

  // delete token -> logic function helpers
  deleteTokens(response: Response) {
    response.clearCookie("refresh_token");
    response.clearCookie("access_token");
  }

  // UPDATE TOKEN TO DB AND GET TOKEN -> logic function helpers
  async UpdateToken(payload: JwtPayload, response: Response) {
    this.logger.info(`AUTH_SERVICE.UpdateToken: ${JSON.stringify(payload)}`);
    // DEFINE JWT PAYLOAD
    const jwtPayload: JwtPayload = {
      sub: payload.sub,
      email: payload.email,
    };

    // GENERATE TOKEN
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: jwtConstants.secrets,
        expiresIn: "15m",
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: jwtConstants.secrets,
        expiresIn: "7d",
      }),
    ]);
    response.cookie("access_token", at, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    response.cookie("refresh_token", rt, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    // GET EXPIRES DATE AND SET DATE
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // RETURN VALUE
    return {
      access_token: at,
      refresh_token: rt,
      update_exp: expiresAt,
    };
  }

  // =============== HELPER FUNCTION =====================

  // =============== VALIDATE FUNCTION =====================
  // validate Guard --> logic function
  async validateUser(email: string, pass: string) {
    const user = await this.authRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException("AUTH_SERVICE: Unauthorized Exception", 401);
  }
  // =============== VALIDATE FUNCTION =====================
}
