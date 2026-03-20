import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../../auth/auth.service";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy, "CheckUser") {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
      passReqToCallback: true,
    });
  }

  async validate(_req: Request, payload: JwtPayload) {
    if (!payload.email) {
      throw new HttpException("Unauthorized", 401);
    }

    const user = await this.authService.getUserByEmail(payload.email);
    console.log(user);
    if (!user) {
      throw new HttpException("Unauthorized", 401);
    }

    return {
      user,
      ...payload,
    };
  }
}
