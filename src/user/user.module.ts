import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { IUserRepository } from "./interfaces/user.interface";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { IUserService } from "./interfaces/user.service.interface";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: "saken",
      signOptions: { expiresIn: "1h" },
    }),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
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
