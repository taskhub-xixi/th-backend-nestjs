import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { UserStrategy } from "../common/strategies/admin.strategy";
import { JwtStrategy } from "../common/strategies/jwt.strategy";
import { RtStrategy } from "../common/strategies/rt.strategy";
import { AtStrategy } from "../common/strategies/at.strategy";
import { AuthRepositorySQL } from "./repository_query/auth.repository";
import { TokenService } from "./services/token.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secrets,
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
  ],
  exports: [
    AuthService,
    UserStrategy,
    PassportModule,
    JwtStrategy,
    TokenService,
  ],
})
export class AuthModule {}
