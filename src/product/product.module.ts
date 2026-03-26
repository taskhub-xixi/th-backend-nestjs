import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { AuthService } from "../auth/auth.service";
import { AuthModule } from "../auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy, UserStrategy } from "../common/strategies";

@Module({
  imports: [AuthModule, PassportModule],
  controllers: [ProductController],
  providers: [ProductService, AuthService, JwtStrategy, UserStrategy],
})
export class ProductModule {}
