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
      passReqToCallback: true,
    });
  }
  validate(req, payload: JwtPayload) {
    console.log(req.query);
    return { sub: payload.sub, email: payload.email };
  }
  // return to REQ controller
}
