import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "../common/strategies/local.strategy";
import { JwtStrategy } from "../common/strategies/jwt.strategy";
import { RtStrategy } from "../common/strategies/rt.strategy";
import { AtStrategy } from "../common/strategies/at.strategy";
import { AuthRepositorySQL } from "./repository_query/auth.repository";

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
    LocalStrategy,
    JwtStrategy,
    RtStrategy,
    AtStrategy,
    AuthRepositorySQL,
  ],
  exports: [AuthService, LocalStrategy, PassportModule, JwtStrategy],
})
export class AuthModule {}
