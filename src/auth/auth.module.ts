import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserStrategy } from "../common/strategies/admin.strategy";
import { AtStrategy } from "../common/strategies/at.strategy";
import { JwtStrategy } from "../common/strategies/jwt.strategy";
import { RtStrategy } from "../common/strategies/rt.strategy";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepositorySQL } from "./repository_query/auth.repository";
import { TokenService } from "./services/token.service";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserStrategy,
    JwtStrategy,
    RtStrategy,
    AtStrategy,
    AuthRepositorySQL,
    TokenService,
    JwtService,
  ],
  exports: [
    AuthService,
    UserStrategy,
    JwtStrategy,
    RtStrategy,
    AtStrategy,
    AuthRepositorySQL,
    TokenService,
    JwtService,
  ],
})
export class AuthModule {}
