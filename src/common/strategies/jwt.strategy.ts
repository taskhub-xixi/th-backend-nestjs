import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../../auth/constants";
import { JwtPayload } from "../../auth/dto/payload-interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "JWT_STRATEGY") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
      passReqToCallback: true,
    });
  }
  validate(payload: JwtPayload) {
    console.log(`JWTS_GUARD: ${JSON.stringify(payload)}`);
    return { sub: payload.sub, email: payload.email };
  }
}
