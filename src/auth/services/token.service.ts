import {
  JWTResponse,
  RefreshTokenResponse,
  UserResponse,
} from "../../model/auth.model";
import { JwtPayload } from "../dto/payload-interface";
import { Response } from "express";
import {
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "../constants";
import { UserEntity } from "../../user/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TokenService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
  ) {}

  async UpdateToken(payload: JwtPayload, res: Response): Promise<JWTResponse> {
    this.logger.info(
      `AUTH_SERVICE.UpdateToken.START: ${JSON.stringify(payload)}`,
    );
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
    res.cookie("access_token", at, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    res.cookie("refresh_token", rt, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    // GET EXPIRES DATE AND SET DATE
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    this.logger.info(`AUTH_SERVICE.UpdateToken.END: `);

    // RETURN VALUE
    return {
      access_token: at,
      refresh_token: rt,
      exp: expiresAt,
    };
  }

  deleteCookieToken(response: Response): void {
    response.clearCookie("refresh_token");
    response.clearCookie("access_token");
  }

  async refresh(
    oldRefreshToken: string,
    res: Response,
  ): Promise<RefreshTokenResponse> {
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
    const token = await this.UpdateToken(payload, res);
    if (!token.refresh_token) {
      throw new HttpException("Token not generated", 400);
    }
    await this.updateRtHashDatabase(user.id, token.refresh_token);

    return {
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    };
  }

  async updateRtHashDatabase(
    id: number,
    rt: string,
    exp?: Date,
  ): Promise<{ hash: string; id: number; exp?: Date }> {
    // GET EXPIRES DATE AND SET DATE
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    if (!id) {
      throw new HttpException("Something Wrong", 401);
    }
    const hash = await this.hash(rt);

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
  async hash(pass: string): Promise<string> {
    pass = await bcrypt.hash(pass, 12);
    return pass;
  }
}
