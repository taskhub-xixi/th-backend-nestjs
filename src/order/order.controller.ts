import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { WebResponse } from "../model/web.mode";
import { CreateOrderRequest, OrderResponse } from "./order.model";
import { OrderService } from "./order.service";

@Controller("/api/orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createOrder(
    @Body() req: CreateOrderRequest,
  ): Promise<WebResponse<OrderResponse>> {
    const result = await this.orderService.createOrder(req);
    return {
      data: result,
      statusCode: HttpStatus.OK,
    };
  }
}
