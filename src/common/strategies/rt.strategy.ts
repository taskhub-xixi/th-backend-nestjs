import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
      passReqToCallback: true,
    });
  }

  // GET RFERSH TOKEN
  validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.get("authorization")?.replace("Bearer", "").trim();

    if (!refreshToken) {
      throw new UnauthorizedException("Refresh Token malformed");
    }

    return {
      ...payload,
      refreshToken,
    };
  }
}
