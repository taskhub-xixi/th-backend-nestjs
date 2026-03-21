import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { AuthService } from "../auth/auth.service";
import { UserEntity } from "../user/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [ProductController],
  providers: [ProductService, AuthService],
})
export class ProductModule {}
