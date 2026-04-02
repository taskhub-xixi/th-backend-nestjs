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
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
      }),
    }),

    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
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
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
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
