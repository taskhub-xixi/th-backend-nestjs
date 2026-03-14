import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constants";
import { JwtPayload } from "../dto/payload-interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwts") {
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
