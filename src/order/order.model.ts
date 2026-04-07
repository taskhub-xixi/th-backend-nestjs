import { Decimal } from "@prisma/client/runtime/client";

export class CreateOrderRequest {
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
  billingAddress?: string;
  trackingNumber?: string;
  notes?: string;
  couponId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class OrderResponse {
  data!: {
    id: string;
    orderNumber: string;
    userId: string;
    status: string;
    subtotal: Decimal;
    shippingCost: Decimal;
    discount: Decimal;
    tax: Decimal;
    total: Decimal;
    shippingMethod: string;
    shippingAddress: string;
    billingAddress: string;
    trackingNumber: string;
    notes: string;
    couponId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  } | null;
}
