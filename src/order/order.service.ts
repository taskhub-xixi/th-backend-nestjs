import { randomInt } from "node:crypto";
import { HttpException, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { JwtPayload } from "../auth/dto/payload-interface";
import { PrismaService } from "../common/prisma.service";
import { $OrderPayload } from "../generated/prisma/models";
import {
  CreateOrderRequest,
  GetOrderRequest,
  GetOrderResponse,
  OrderQueryResponse,
  OrderResponse,
  PaymentsResponseFromGetOrderResponse,
} from "./order.model";

@Injectable()
export class OrderService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  async createOrder(
    req: CreateOrderRequest,
    payload: JwtPayload,
  ): Promise<OrderResponse> {
    this.logger.info(`ORDER_SERVICE.createOrder: ...`);
    const user = await this.prismaService.users.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      throw new HttpException("User not found", 404);
    }
    if (!payload.sub) {
      throw new HttpException("Payload sub undefind", 403);
    }

    const odn = payload.sub + randomInt(99999999);

    const result = await this.prismaService.order.create({
      data: {
        orderNumber: "ORD-" + odn,
        userId: user.id,
        subtotal: req.subtotal,
        shippingCost: req.shippingCost,
        discount: req.discount,
        tax: req.tax,
        total: req.total,
        shippingAddress: req.shippingAddress,
      },
    });

    const resultFinal = await this.prismaService.order.findUnique({
      where: { id: result.id },
    });

    if (!resultFinal) {
      throw new HttpException("User not found", 404);
    }

    if (!result) {
      throw new HttpException("User not found", 404);
    }

    return {
      data: {
        id: resultFinal.id,
        userId: resultFinal.userId,
        orderNumber: resultFinal.orderNumber,
      },
    };
  }

  async getOrderById(req: GetOrderRequest): Promise<GetOrderResponse> {
    if (!req) {
      throw new HttpException("User Id not found", 403);
    }

    const u = await this.prismaService.$queryRaw<
      OrderQueryResponse[]
    >`SELECT * FROM orders WHERE id = ${req.id}`;

    if (!u) {
      throw new HttpException("Order not found", 403);
    }

    const user = u[0];

    const productOrderJoin = await this.prismaService.orderItem.findFirst({
      where: { orderId: user.id },
    });

    const paymentOrderJoin = await this.prismaService
      .$queryRaw<PaymentsResponseFromGetOrderResponse>`SELECT p.method, p.status, p.amount, p.deadline from orders as o left join payments as p on p.order_id = o.id where o.id = ${user.id}`;

    if (!productOrderJoin) {
      throw new HttpException("product not found", 403);
    }

    return {
      id: user.id,
      orderNumber: user.order_number,
      status: user.status,
      items: [
        {
          productId: productOrderJoin.productId,
          variantId: productOrderJoin.variantId || "null",
          quantity: productOrderJoin.quantity,
          price: productOrderJoin.price,
        },
      ],
      subtotal: user.subtotal,
      shippingCost: user.shipping_cost,
      discount: user.discount,
      tax: user.tax,
      total: user.total,
      shippingMethod: user.shipping_method || "null",
      shippingAddress: user.shipping_address,
      payment: {
        method: paymentOrderJoin.method,
        status: paymentOrderJoin.status,
        amount: paymentOrderJoin.amount,
        deadline: paymentOrderJoin.deadline,
      },
      createdAt: user.created_at,
    };
  }
}
