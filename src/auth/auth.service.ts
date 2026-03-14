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
  async create(
    request: RegisterDTO,
    response: Response,
  ): Promise<UserResponse> {
    try {
      if (
        await this.authRepository.findOne({ where: { email: request.email } })
      ) {
        throw new BadRequestException("email already used");
      }

      const hashPassword = await this.hash(request.password);

      await this.authRepository.query(
        "INSERT INTO users (username, email, password) VALUES(?, ?, ?)",
        [request.username, request.email, hashPassword],
      );

      const userRegistered = await this.authRepository.findOne({
        where: { email: request.email },
      });

      if (!userRegistered) {
        throw new HttpException("Unexpected error", 401);
      }

      const payload = { id: userRegistered.id, email: userRegistered.email };
      const token = await this.UpdateToken(payload, response);

      // WINSTON LOGGER
      this.logger.debug(
        `AUTH_SERVICE: CREATE_: ID ${JSON.stringify(userRegistered.id)}`,
      );

      return {
        username: request.username,
        access_token: token.access_token,
        refresh_token: token.refresh_token,
      };
    } catch (err: unknown) {
      throw new HttpException((err as Error).message, 401);
    }
  }

  // login SQL
  async login(request: LoginDTO, response: Response): Promise<UserResponse> {
    this.logger.debug(`AUTH_SERVICE: LOGIN_: ${JSON.stringify(request)}`);
    const data = await this.authRepository.findOne({
      where: { email: request.email },
    });
    if (!data) {
      throw new HttpException("Something went wrong", 401);
    }

    const match = await bcrypt.compare(request.password, data.password);
    if (!match) {
      throw new UnauthorizedException("Something went wrong");
    }

    const payload = { id: data.id, email: data.email };
    const token = await this.UpdateToken(payload, response);
    if (!data.hashedAccessToken) {
      throw new HttpException("Something went wrong", 401);
    }

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
    // make payload variable global
    let payload: JwtPayload;
    try {
      payload = await this.jwtService.verifyAsync<JwtPayload>(oldRefreshToken);
    } catch {
      throw new UnauthorizedException();
    }

    // find id
    const user = await this.authRepository.findOne({
      where: { id: payload.id },
    });

    // validate
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!user.hashedAccessToken) {
      throw new UnauthorizedException();
    }
    if (await bcrypt.compare(oldRefreshToken, user?.hashedAccessToken)) {
      throw new HttpException("Token Invalid", 401);
    }

    // create token
    const token = await this.UpdateToken(payload, response);

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
      throw new BadRequestException("account is missing");
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
      "UPDATE users SET hashedAccessToken = ? WHERE email = ?",
      [token, email],
    );
  }

  // =============== HELPER FUNCTION =====================

  // DO NOT CALL THIS FUNCTION INDEPENDENT , THIS FUNCTION ALREADY CALLED BY `UpdateToken` Function
  // update RtHash -> login function helpers
  async updateRtHash(id: number, rt: string, exp: Date): Promise<void> {
    this.logger.debug(`AUTH_SERVICE: UpdateRtHash_ID: ${id} token: ${rt}`);
    const hash = await this.hash(rt);
    await this.authRepository.query(
      "UPDATE users SET hashedAccessToken = ?, refeshTokenExpAt = ? WHERE id = ?",
      [hash, exp, id],
    );
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
    // DEFINE JWT PAYLOAD
    const jwtPayload: JwtPayload = {
      sub: payload.id,
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
    if (!payload.id) {
      throw new HttpException("Something Wrong", 401);
    }
    // UPDATE DATABASE
    await this.updateRtHash(payload.id, rt, expiresAt);
    // RETURN VALUE
    return {
      access_token: at,
      refresh_token: rt,
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
