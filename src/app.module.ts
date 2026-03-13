import {
  MiddlewareConsumer,
  Module,
  NestModule,
  Next,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "./common/common.module";
import { LogMiddleware } from "./log/log.middleware";
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      database: "auth",
      entities: [UserEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
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
