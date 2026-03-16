import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import { myFormat } from "./format.logger";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  imports: [
    WinstonModule.forRoot({
      level: "debug",
      format: winston.format.combine(
        winston.format.label({ label: "LOGGER" }),
        winston.format.timestamp({}),
        winston.format.prettyPrint({ colorize: true }),
        winston.format.colorize({ all: true }),
        myFormat,
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.label({ label: "LOGGER" }),
            winston.format.timestamp(),
            winston.format.prettyPrint({ colorize: true }),
            winston.format.colorize({ all: true }),
            myFormat,
          ),
        }),
      ],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
