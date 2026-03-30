import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthModule } from "../auth/auth.module";
import { jwtConstants } from "../auth/constants";
import { JwtStrategy } from "../common/strategies";
import { IUserRepository } from "./interfaces/user.interface";
import { IUserService } from "./interfaces/user.service.interface";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secrets,
    }),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    JwtStrategy,
    {
      provide: IUserRepository,
      useClass: UserController,
    },
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
