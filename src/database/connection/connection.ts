import { Injectable } from '@nestjs/common';

export class Connection {
  getName(): string {
    return `default Connection`;
  }
}

@Injectable()
export class MysqlConnection {
  getName(): string {
    return `MYSQL`;
  }
}

@Injectable()
export class MongoDBConnection {
  getName(): string {
    return `MONGODB Connection`;
  }
}
