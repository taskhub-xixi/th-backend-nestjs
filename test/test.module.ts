import { Module } from "@nestjs/common";
import { TestService } from "./test.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../src/user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [TestService],
})
export class TestModule {}
