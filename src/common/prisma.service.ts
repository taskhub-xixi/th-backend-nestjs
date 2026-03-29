import { Injectable } from "@nestjs/common";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER, // your database username
      database: process.env.DATABASE_NAME, // optional, your database name
      connectionLimit: 5,
    });
    super({ adapter });
  }
}
