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
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { LoginDTO, RegisterDTO, UserResponse } from "src/model/auth.model";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { Logger } from "winston";
import { jwtConstants } from "./constants";
import { JwtPayload } from "./dto/payload-interface";
import { Response } from "express";

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

      const hashPassword = await bcrypt.hash(request.password, 12);

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

      const token = await this.getTokens(
        userRegistered?.id,
        userRegistered?.email,
      );
      await this.updateRtHash(userRegistered.id, token.refresh_token);
      // WINSTON LOGGER
      this.logger.debug(
        `AUTH_SERVICE: ID: ${JSON.stringify(userRegistered.id)}`,
      );
      response.cookie("refresh_token", token.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });
      response.cookie("access_token", token.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });
      return {
        username: request.username,
        access_token: token.access_token,
        refresh_token: token.refresh_token,
      };
    } catch (err: unknown) {
      throw new BadRequestException((err as Error).message || "unknown error");
    }
  }

  // login SQL
  async login(request: LoginDTO): Promise<UserResponse> {
    this.logger.debug(`LOGIN: ${request}`);
    const data = await this.authRepository.findOne({
      where: { email: request.email },
    });
    if (!data) {
      throw new HttpException("Something went wrong", 401);
    }

    const match = await bcrypt.compare(request.password, data.password);
    if (!match) {
      throw new UnauthorizedException();
    }

    const token = await this.getTokens(data.id, data.email);
    if (!data.hashedAccessToken) {
      throw new HttpException("Something went wrong", 401);
    }
    await this.updateRtHash(data.id, data.hashedAccessToken);

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
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    // make payload variable global
    let payload: JwtPayload;
    try {
      payload = await this.jwtService.verifyAsync<JwtPayload>(refreshToken);
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

    // check
    const valid = await bcrypt.compare(refreshToken, user.hashedAccessToken);
    if (!valid) {
      throw new UnauthorizedException();
    }

    // create token
    const accessToken = await this.jwtService.signAsync(
      { id: user.id },
      { expiresIn: "15m" },
    );
    const newRefresh = await this.jwtService.signAsync(
      { id: user.id },
      { expiresIn: "7d" },
    );
    const hash = await bcrypt.hash(newRefresh, 12);
    await this.authRepository.update(
      { id: user.id },
      { hashedAccessToken: hash },
    );

    return {
      accessToken,
      refreshToken: newRefresh,
    };
  }

  // delete with SQL
  async deleteSQL(email: string): Promise<void> {
    const data = await this.authRepository.findOne({ where: { email } });
    if (!data) {
      throw new BadRequestException("account is missing");
    }
    await this.authRepository.query("DELETE from users WHERE email = ? ", [
      email,
    ]);
  }

  // reset password SQL
  async resetPassword(email: string, password: string): Promise<void> {
    const data = await this.authRepository.findOne({ where: { email } });
    if (!data) {
      throw new BadRequestException("account is missing");
    }
    const hashPassword = await bcrypt.hash(password, 12);
    await this.authRepository.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashPassword, email],
    );
  }

  // logout
  async logout(email: string): Promise<void> {
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

  // update RtHash
  async updateRtHash(userId: number, rt: string): Promise<void> {
    this.logger.debug(`AUTH_SERVICE: Update RtHash ID: ${userId} token: ${rt}`);
    const hash = await bcrypt.hash(rt, 12);
    await this.authRepository.query(
      "UPDATE users SET hashedAccessToken = ? WHERE id = ?",
      [hash, userId],
    );
  }

  // get token
  async getTokens(userId: number, email: string) {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: jwtConstants.secrets,
        expiresIn: "60s",
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: jwtConstants.secrets,
        expiresIn: "7d",
      }),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  // =============== HELPER FUNCTION =====================

  // validate
  async validateUser(email: string, pass: string) {
    const user = await this.authRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException("AuthService: Unauthorized Exception", 401);
  }
}
