import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../../auth/dto/payload-interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt-strategy") {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies?.access_token,
      ]),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>("JWT_SECRET"),
      passReqToCallback: false,
    });
  }
  validate(payload: JwtPayload) {
    return payload;
  }
}
