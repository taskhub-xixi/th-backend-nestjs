import { Injectable } from "@nestjs/common";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.HOST,
      user: process.env.USERNAME, // your database username
      database: process.env.DATABASE, // optional, your database name
    });
    super({ adapter });
  }
}
