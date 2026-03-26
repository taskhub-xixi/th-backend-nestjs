import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt-strategy") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies?.access_token,
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
      passReqToCallback: false,
    });
  }
  validate(payload: JwtPayload) {
    return payload;
  }
}
