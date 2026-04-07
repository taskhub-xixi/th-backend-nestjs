import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { CreateOrderRequest, OrderResponse } from "./order.model";

@Injectable()
export class OrderService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  // unfinished -->
  async createOrder(req: CreateOrderRequest): Promise<OrderResponse> {
    this.logger.info(`ORDER_SERVICE.createOrder: ...`);
    await this.prismaService.order.create({ data: req });
    const result = await this.prismaService.order.findFirst({
      where: { userId: req.userId },
    });
    return {
      data: result,
    };
  }

  // generateNumber() {
  //   const date = Date;
  // }
}
