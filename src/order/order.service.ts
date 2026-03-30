import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";

@Injectable()
export class OrderService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}
  //
  // async createOrder() {
  //   this.logger.info(`ORDER_SERVICE.createOrder: ...`);
  //   // await this.prismaService.order.create({
  //   //   data: {
  //   //     orderNumber,
  //   //   },
  //   // });
  // }

  // generateNumber() {
  //   const date = Date;
  // }
}
