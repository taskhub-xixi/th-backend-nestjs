import { HttpException, Inject, Injectable } from "@nestjs/common";
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

  async createOrder(req: CreateOrderRequest): Promise<OrderResponse> {
    this.logger.info(`ORDER_SERVICE.createOrder: ...`);
    await this.prismaService.order.create({ data: req });
    const result = await this.prismaService.order.findFirst({
      where: { userId: req.userId },
    });

    if (!result) {
      throw new HttpException("user not found", 403);
    }

    return {
      data: {
        id: result.id,
        userId: result.userId,
        orderNumber: result.orderNumber,
      },
    };
  }

  // generateNumber() {
  //   const date = Date;
  // }
}
