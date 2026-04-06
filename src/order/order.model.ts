export class CreateOrderRequest {
  id!: string;
  order_number!: string;
  user_id!: string;
}

export class OrderResponse {
  order_number!: string;
}
