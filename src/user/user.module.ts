import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { IUserRepository } from "./interfaces/user.interface";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { IUserService } from "./interfaces/user.service.interface";
import { JwtStrategy } from "../common/strategies";
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "../auth/constants";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
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
