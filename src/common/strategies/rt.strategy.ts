import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies?.access_token,
      ]),
      // REFRESH TOKEN , AWLAYAS EXPIRED TOKEN
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secrets,
      passReqToCallback: false,
    });
  }

  // GET RFERSH TOKEN
  validate(payload: JwtPayload) {
    return {
      ...payload,
    };
  }
}
