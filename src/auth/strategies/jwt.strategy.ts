import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constants";

export class JwtStrategy extends PassportStrategy(Strategy, "jwts") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secrets,
    });
  }
  validate(payload) {
    console.log(`JWTS: ${payload}`);
    return { userId: payload.sub, username: payload.username };
  }
}
