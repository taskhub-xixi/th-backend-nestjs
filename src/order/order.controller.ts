import { Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { OrderService } from "./order.service";

@Controller("/api/orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createOrder() {
    return null;
  }
}
