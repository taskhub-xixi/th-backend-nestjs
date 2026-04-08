import { Decimal } from "@prisma/client/runtime/client";
import {
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateOrderRequest {
  @IsNotEmpty()
  subtotal!: Decimal;

  @IsNotEmpty()
  shippingCost!: Decimal;

  @IsNotEmpty()
  discount!: Decimal;

  @IsNotEmpty()
  tax!: Decimal;

  @IsNotEmpty()
  total!: Decimal;

  @IsString()
  @IsOptional()
  shippingMethod?: string | null;

  @IsString()
  @IsOptional()
  shippingAddress!: string;

  @IsString()
  @IsOptional()
  billingAddress?: string;

  @IsString()
  @IsOptional()
  trackingNumber?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsOptional()
  couponId?: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @IsOptional()
  @IsDate()
  deletedAt?: Date;
}

export class GetOrderRequest {
  @IsNotEmpty()
  @IsString()
  orderNumber!: string;
}

export class GetOrderResponse {
  id!: string;
  orderNumber!: string;
  userId!: string;
  status!: string;
  subtotal!: Decimal;
  shippingCost!: Decimal;
  discount!: Decimal;
  tax!: Decimal;
  total!: Decimal;
  shippingMethod?: string | null;
  shippingAddress!: string;
  billingAddress?: string | null;
  trackingNumber?: string | null;
  notes?: string | null;
  couponId?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class OrderResponse {
  data!: {
    id: string;
    orderNumber: string;
    userId: string;
  };
}
