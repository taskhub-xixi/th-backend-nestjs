import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "../common/guards";
import { WebResponse } from "../model/web.mode";
import {
  CreateOrderRequest,
  GetOrderRequest,
  GetOrderResponse,
  OrderResponse,
} from "./order.model";
import { OrderService } from "./order.service";

@Controller("/api/orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createOrder(
    @Body() req: CreateOrderRequest,
    @Req() payload: Request,
  ): Promise<WebResponse<OrderResponse>> {
    if (!payload.user) {
      throw new HttpException("User not found", 403);
    }
    const result = await this.orderService.createOrder(req, payload.user);
    return {
      data: result,
      statusCode: HttpStatus.CREATED,
    };
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  async getOrderByOrderNumber(
    @Body() req: GetOrderRequest,
  ): Promise<WebResponse<GetOrderResponse>> {
    const result = await this.orderService.getOrderById(req);
    return {
      data: result,
      statusCode: HttpStatus.OK,
    };
  }
}
