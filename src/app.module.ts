import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "./common/common.module";
import { LogMiddleware } from "./log/log.middleware";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";
import * as dotenv from "dotenv";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
// dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: "mysql",
    //   host: "localhost",
    //   port: 3306,
    //   username: "root",
    //   database: "auth",
    //   entities: [UserEntity],
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    CommonModule,
    ProductModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
// register middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes({
      path: "/api/*path",
      method: RequestMethod.ALL,
    });
  }
}
