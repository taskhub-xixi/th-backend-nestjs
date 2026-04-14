import { Decimal } from "@prisma/client/runtime/client";
import {
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";

enum ShippingMethodEnum {
  standard = "standard",
  express = "express",
  sameday = "same-day",
}

// enum paymentMethod {
//   midtrans = "midtrans",
//   xendit = "xendit",
//   banktransfer = "bank-transfer",
// }

// unf
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
  shippingMethod?: ShippingMethodEnum | null;

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
  id!: string;
}

export class GetOrderRequestService {
  @IsNotEmpty()
  params!: {
    id: string;
  };
}

export class OrderQueryResponse {
  id!: string;
  order_number!: string;
  user_id!: string;
  status!: string;
  subtotal!: Decimal;
  shipping_cost!: Decimal;
  discount!: Decimal;
  tax!: Decimal;
  total!: Decimal;
  shipping_method?: string | null;
  shipping_address!: string;
  billing_address!: string | null;
  tracking_number!: string | null;
  notes!: string | null;
  coupon_id!: string | null;
  created_at!: Date | null;
  updated_at!: Date | null;
  deleted_at!: Date | null;
}

// unf
export class GetAllOrderResponse {
  orders!: {
    id: string;
    orderNumber: string;
    userId: string;
    status: string;
    subtotal: Decimal;
    shippingCost: Decimal;
    discount: Decimal;
    tax: Decimal;
    total: Decimal;
    shippingMethod?: string | null;
    shippingAddress: string;
    billingAddress: string | null;
    trackingNumber: string | null;
    notes: string | null;
    couponId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  }[];
}

export class GetOrderResponse {
  id!: string;
  orderNumber!: string;
  status!: string;
  items?: [
    {
      productId: string;
      variantId: string;
      quantity: number;
      price: Decimal;
    },
  ];
  subtotal!: Decimal;
  shippingCost!: Decimal;
  discount!: Decimal;
  tax!: Decimal;
  total!: Decimal;
  shippingMethod?: string | null;
  shippingAddress!: string;
  payment!: {
    method: string;
    status: string;
    amount: Decimal;
    deadline: Date;
  };
  createdAt?: Date | null;
}

export class PaymentsResponseFromGetOrderResponse {
  method!: string;
  status!: string;
  amount!: Decimal;
  deadline!: Date;
}

export class OrderResponse {
  data!: {
    id: string;
    orderNumber: string;
    status: string;
    items: {
      id: string;
      quantity: number;
      price: Decimal;
      subtotal: Decimal;
    };
    subtotal: Decimal;
    shippingCost: Decimal;
    discount: Decimal;
    tax: Decimal;
    total: Decimal;
    payment: {
      method: string;
      status: string;
      amount: Decimal;
      deadline: Date;
    };
    createdAt: Date;
  };
}

export class OrderResponseQuery {
  id!: string;
  order_number!: string;
  status!: string;
  order_item_id!: string;
  order_item_quantity!: number;
  order_item_price!: Decimal;
  order_item_subtotal!: Decimal;
  subtotal!: Decimal;
  shippingCost!: Decimal;
  discount!: Decimal;
  tax!: Decimal;
  total!: Decimal;
  payment_method!: string;
  payment_status!: string;
  payment_amount!: Decimal;
  payment_deadline!: Date;
  createdAt!: Date;
}
