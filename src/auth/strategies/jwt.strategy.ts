import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constants";
import { JwtPayload } from "../dto/payload-interface";

// IMPORTANT: NEED HEADER AUTHORIZATION
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "JWT_STRATEGY") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
    });
  }
  validate(payload: JwtPayload) {
    console.log(`JWTS_GUARD: ${JSON.stringify(payload)}`);
    return { sub: payload.sub, email: payload.email };
  }
}
