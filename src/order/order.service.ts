import { HttpException, Inject, Injectable } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { JwtPayload } from "../auth/dto/payload-interface";
import { PrismaService } from "../common/prisma.service";
import {
  CreateOrderRequest,
  GetOrderRequest,
  OrderResponse,
  GetOrderResponse,
} from "./order.model";
import { randomInt, randomUUID } from "node:crypto";
import { Order } from "../generated/prisma/client";

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
    const result = await this.prismaService
      .$queryRaw<Order>`SELECT * FROM orders WHERE order_number = ${req.orderNumber}`;

    const validateOrder = await this.prismaService.order.findUnique({
      where: { orderNumber: req.orderNumber },
    });

    if (!validateOrder?.shippingMethod) {
      throw new HttpException("Order not found", 403);
    }

    return {
      id: result.id,
      orderNumber: result.orderNumber,
      userId: result.userId,
      status: result.status,
      subtotal: result.subtotal,
      shippingCost: result.shippingCost,
      discount: result.discount,
      tax: result.tax,
      total: result.total,
      shippingMethod: result.shippingMethod,
      shippingAddress: result.shippingAddress,
      billingAddress: result.billingAddress,
      trackingNumber: result.trackingNumber,
      notes: result.notes,
      couponId: result.couponId,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      deletedAt: result.deletedAt,
    };
  }
}
