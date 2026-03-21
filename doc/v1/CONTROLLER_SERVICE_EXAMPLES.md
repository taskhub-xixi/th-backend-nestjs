# Controller & Service Examples

## Auth Controller & Service

```typescript
// src/modules/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@common/guards/jwt-auth.guard";
import { Public } from "@common/decorators/public.decorator";
import { CurrentUser } from "@common/decorators/current-user.decorator";
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from "@nestjs/swagger";
import { RegisterDto, LoginDto, RefreshTokenDto } from "./dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register new user" })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  async register(@Body() dto: RegisterDto) {
    const result = await this.authService.register(dto);
    return {
      statusCode: HttpStatus.CREATED,
      message: "User registered successfully",
      data: { email: result.email, id: result.id },
    };
  }

  @Public()
  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Login user" })
  async login(@Body() dto: LoginDto) {
    const tokens = await this.authService.login(dto);
    return {
      statusCode: HttpStatus.OK,
      message: "Login successful",
      data: tokens,
    };
  }

  @Public()
  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Refresh access token" })
  async refresh(@Body() dto: RefreshTokenDto) {
    const tokens = await this.authService.refreshTokens(dto.refreshToken);
    return {
      statusCode: HttpStatus.OK,
      message: "Token refreshed",
      data: tokens,
    };
  }

  @UseGuards(AuthGuard)
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Logout user" })
  async logout(@CurrentUser("userId") userId: string) {
    await this.authService.logout(userId);
    return {
      statusCode: HttpStatus.OK,
      message: "Logged out successfully",
    };
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current user profile" })
  async getProfile(@CurrentUser("userId") userId: string) {
    const user = await this.authService.getProfile(userId);
    return {
      statusCode: HttpStatus.OK,
      message: "Success",
      data: user,
    };
  }
}
```

```typescript
// src/modules/auth/auth.service.ts
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "@database/prisma.service";
import { RedisService } from "@config/redis.service";
import { RegisterDto, LoginDto } from "./dto";
import { TokenPayload } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
      },
    });

    return user;
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const tokens = await this.generateTokens(user.id, user.email, user.role);

    await this.saveRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const storedToken = await this.redisService.get(
        `refresh_token:${payload.userId}`,
      );

      if (storedToken !== refreshToken) {
        throw new UnauthorizedException("Invalid refresh token");
      }

      const user = await this.prisma.user.findUnique({
        where: { id: payload.userId },
      });

      if (!user) {
        throw new UnauthorizedException("User not found");
      }

      return this.generateTokens(user.id, user.email, user.role);
    } catch {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  async logout(userId: string) {
    await this.redisService.del(`refresh_token:${userId}`);
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        createdAt: true,
      },
    });
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload: TokenPayload = { userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_EXPIRES || "15m",
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES || "7d",
      }),
    ]);

    return { accessToken, refreshToken, expiresIn: 900 };
  }

  private async saveRefreshToken(userId: string, token: string) {
    await this.redisService.set(
      `refresh_token:${userId}`,
      token,
      7 * 24 * 60 * 60,
    );
  }
}
```

---

## Order Controller & Service

```typescript
// src/modules/order/order.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { AuthGuard } from "@common/guards/jwt-auth.guard";
import { RolesGuard } from "@common/guards/roles.guard";
import { Roles } from "@common/decorators/roles.decorator";
import { CurrentUser } from "@common/decorators/current-user.decorator";
import { CreateOrderDto, OrderQueryDto } from "./dto";

@Controller("orders")
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateOrderDto,
    @CurrentUser("userId") userId: string,
  ) {
    const order = await this.orderService.create(userId, dto);
    return {
      statusCode: HttpStatus.CREATED,
      message: "Order created successfully",
      data: order,
    };
  }

  @Get()
  async findAll(
    @Query() query: OrderQueryDto,
    @CurrentUser("userId") userId: string,
    @CurrentUser("role") role: string,
  ) {
    const result = await this.orderService.findAll(userId, role, query);
    return {
      statusCode: HttpStatus.OK,
      message: "Success",
      ...result,
    };
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @CurrentUser("userId") userId: string,
  ) {
    const order = await this.orderService.findOne(id, userId);
    return {
      statusCode: HttpStatus.OK,
      message: "Success",
      data: order,
    };
  }

  @Patch(":id/cancel")
  @HttpCode(HttpStatus.OK)
  async cancel(@Param("id") id: string, @CurrentUser("userId") userId: string) {
    const order = await this.orderService.cancel(id, userId);
    return {
      statusCode: HttpStatus.OK,
      message: "Order cancelled",
      data: order,
    };
  }
}
```

```typescript
// src/modules/order/order.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "@database/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateOrderDto } from "./dto";
import { OrderStatus } from "@common/constants/order-status.enum";
import { InventoryService } from "@modules/inventory/inventory.service";
import { NotificationService } from "@modules/notification/notification.service";

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly inventoryService: InventoryService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(userId: string, dto: CreateOrderDto) {
    // Start transaction
    return this.prisma.$transaction(async (tx) => {
      // Validate products and calculate prices
      const productIds = dto.items.map((item) => item.productId);
      const products = await tx.product.findMany({
        where: { id: { in: productIds }, isActive: true },
      });

      if (products.length !== productIds.length) {
        throw new BadRequestException("Some products not found or inactive");
      }

      // Create order items with prices
      const orderItems = dto.items.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
        };
      });

      // Calculate totals
      const subtotal = orderItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0,
      );
      const shippingFee = 15000;
      const total = subtotal + shippingFee;

      // Create order
      const order = await tx.order.create({
        data: {
          userId,
          shippingAddress: dto.shippingAddress,
          subtotal,
          total,
          items: {
            create: orderItems,
          },
        },
        include: {
          items: {
            include: { product: true },
          },
        },
      });

      // Emit event for async processing
      this.eventEmitter.emit("order.created", {
        orderId: order.id,
        userId,
        total,
      });

      return order;
    });
  }

  async findAll(userId: string, role: string, query: any) {
    const { page = 1, limit = 10, status } = query;
    const skip = (page - 1) * limit;

    const where =
      role === "ADMIN"
        ? status
          ? { status }
          : {}
        : { userId, ...(status ? { status } : {}) };

    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        include: { items: { include: { product: true } } },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.order.count({ where }),
    ]);

    return {
      data: orders,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: { include: { product: true } },
        payment: true,
      },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    return order;
  }

  async cancel(id: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id, userId },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    if (order.status !== OrderStatus.PENDING) {
      throw new BadRequestException("Cannot cancel order with current status");
    }

    return this.prisma.order.update({
      where: { id },
      data: { status: OrderStatus.CANCELLED },
    });
  }
}
```

---

## Payment Controller & Service

```typescript
// src/modules/payment/payment.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Headers,
  UseGuards,
  HttpCode,
  HttpStatus,
  RawBodyRequest,
  Req,
} from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentGatewayService } from "./payment-gateway.service";
import { AuthGuard } from "@common/guards/jwt-auth.guard";
import { CurrentUser } from "@common/decorators/current-user.decorator";
import { CheckoutDto } from "./dto";

@Controller("payment")
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly paymentGatewayService: PaymentGatewayService,
  ) {}

  @Post("checkout")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async checkout(
    @Body() dto: CheckoutDto,
    @CurrentUser("userId") userId: string,
  ) {
    const session = await this.paymentService.createCheckoutSession(
      userId,
      dto,
    );
    return {
      statusCode: HttpStatus.OK,
      message: "Checkout session created",
      data: session,
    };
  }

  @Post("webhook")
  @HttpCode(HttpStatus.OK)
  async webhook(
    @Body() payload: any,
    @Headers("stripe-signature") signature: string,
  ) {
    await this.paymentService.handleWebhook(payload, signature);
    return { received: true };
  }

  @Get(":orderId")
  @UseGuards(AuthGuard)
  async getPaymentStatus(
    @Param("orderId") orderId: string,
    @CurrentUser("userId") userId: string,
  ) {
    const payment = await this.paymentService.getPaymentByOrderId(
      orderId,
      userId,
    );
    return {
      statusCode: HttpStatus.OK,
      message: "Success",
      data: payment,
    };
  }
}
```

```typescript
// src/modules/payment/payment.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "@database/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { PaymentGatewayService } from "./payment-gateway.service";
import { CheckoutDto, PaymentGateway } from "./dto";
import { OrderStatus, PaymentStatus } from "@common/constants";

@Injectable()
export class PaymentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly paymentGatewayService: PaymentGatewayService,
  ) {}

  async createCheckoutSession(userId: string, dto: CheckoutDto) {
    const order = await this.prisma.order.findFirst({
      where: { id: dto.orderId, userId },
      include: { items: { include: { product: true } } },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    if (order.status !== OrderStatus.PENDING) {
      throw new BadRequestException("Order is not pending");
    }

    const existingPayment = await this.prisma.payment.findUnique({
      where: { orderId: dto.orderId },
    });

    if (existingPayment?.status === PaymentStatus.SUCCESS) {
      throw new BadRequestException("Order already paid");
    }

    let session: any;

    if (dto.gateway === PaymentGateway.STRIPE) {
      session = await this.paymentGatewayService.createStripeSession({
        orderId: order.id,
        amount: Number(order.total),
        items: order.items.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          price: Number(item.price),
        })),
      });
    } else {
      session = await this.paymentGatewayService.createMidtransSession({
        orderId: order.id,
        amount: Number(order.total),
      });
    }

    await this.prisma.payment.upsert({
      where: { orderId: order.id },
      create: {
        orderId: order.id,
        amount: order.total,
        gateway: dto.gateway,
        gatewayRef: session.id,
        status: PaymentStatus.PENDING,
      },
      update: {
        gatewayRef: session.id,
        status: PaymentStatus.PENDING,
      },
    });

    return { sessionId: session.id, redirectUrl: session.url };
  }

  async handleWebhook(payload: any, signature: string) {
    // Verify webhook signature
    const event = this.paymentGatewayService.verifyWebhook(payload, signature);

    if (event.type === "checkout.session.completed") {
      const { orderId } = event.data.object.metadata;
      await this.processPaymentSuccess(orderId, event.data.object.id);
    }

    if (event.type === "payment_intent.payment_failed") {
      const { orderId } = event.data.object.metadata;
      await this.processPaymentFailure(orderId);
    }
  }

  async processPaymentSuccess(orderId: string, gatewayRef: string) {
    await this.prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: { orderId },
        data: { status: PaymentStatus.SUCCESS, gatewayRef },
      });

      await tx.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.PAID },
      });

      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { items: true },
      });

      // Emit event for inventory reduction
      this.eventEmitter.emit("payment.success", {
        orderId,
        items: order.items,
      });
    });
  }

  async processPaymentFailure(orderId: string) {
    await this.prisma.payment.update({
      where: { orderId },
      data: { status: PaymentStatus.FAILED },
    });
  }

  async getPaymentByOrderId(orderId: string, userId: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { orderId },
      include: { order: { where: { userId } } },
    });

    if (!payment) {
      throw new NotFoundException("Payment not found");
    }

    return payment;
  }
}
```

```typescript
// src/modules/payment/payment-gateway.service.ts
import { Injectable } from "@nestjs/common";
import Stripe from "stripe";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PaymentGatewayService {
  private stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(
      this.configService.get<string>("STRIPE_SECRET_KEY"),
      { apiVersion: "2024-12-18.acacia" },
    );
  }

  async createStripeSession(params: {
    orderId: string;
    amount: number;
    items: { name: string; quantity: number; price: number }[];
  }) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: params.items.map((item) => ({
        price_data: {
          currency: "idr",
          product_data: { name: item.name },
          unit_amount: params.amount,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/orders/${params.orderId}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout?cancelled=true`,
      metadata: { orderId: params.orderId },
    });

    return { id: session.id, url: session.url };
  }

  async createMidtransSession(params: { orderId: string; amount: number }) {
    // Mock implementation for Midtrans
    return {
      id: `midtrans_${params.orderId}`,
      url: `https://app.midtrans.com/gopay/${params.orderId}`,
    };
  }

  verifyWebhook(payload: any, signature: string) {
    return this.stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  }
}
```

---

## Notification Processor (BullMQ)

```typescript
// src/modules/notification/notification.processor.ts
import { Processor, WorkerHost, OnWorkerEvent } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { Injectable, Logger } from "@nestjs/common";
import { NotificationService } from "./notification.service";

export const NOTIFICATION_QUEUE = "notifications";
export const EMAIL_QUEUE = "emails";

export interface NotificationJob {
  userId: string;
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
  channel?: string;
}

@Injectable()
@Processor(NOTIFICATION_QUEUE)
export class NotificationProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationProcessor.name);

  constructor(private readonly notificationService: NotificationService) {
    super();
  }

  async process(job: Job<NotificationJob>): Promise<any> {
    this.logger.log(`Processing notification job ${job.id}`);

    const { userId, type, title, message, data, channel } = job.data;

    // Send WebSocket notification
    if (channel === "WEBSOCKET" || !channel) {
      await this.notificationService.sendToUser(userId, {
        type,
        title,
        message,
        data,
      });
    }

    // Queue email job
    if (job.data.channel === "EMAIL" || !channel) {
      await this.notificationService.queueEmail(userId, title, message);
    }

    return { success: true };
  }

  @OnWorkerEvent("completed")
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} completed`);
  }

  @OnWorkerEvent("failed")
  onFailed(job: Job, error: Error) {
    this.logger.error(`Job ${job.id} failed: ${error.message}`);
  }
}
```

---

## WebSocket Gateway

```typescript
// src/modules/notification/notification.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Logger, UseGuards } from "@nestjs/common";
import { WsJwtGuard } from "@common/guards/ws-jwt.guard";

@WebSocketGateway({
  cors: { origin: "*" },
  namespace: "/notifications",
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(NotificationGateway.name);
  private userSockets: Map<string, Set<string>> = new Map();

  async handleConnection(client: Socket) {
    try {
      const userId = await this.authenticateSocket(client);
      if (!userId) {
        client.disconnect();
        return;
      }

      client.data.userId = userId;

      if (!this.userSockets.has(userId)) {
        this.userSockets.set(userId, new Set());
      }
      this.userSockets.get(userId).add(client.id);

      this.logger.log(`Client connected: ${client.id} (User: ${userId})`);
    } catch (error) {
      this.logger.error(`Connection error: ${error.message}`);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId;
    if (userId && this.userSockets.has(userId)) {
      this.userSockets.get(userId).delete(client.id);
      if (this.userSockets.get(userId).size === 0) {
        this.userSockets.delete(userId);
      }
    }
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("notification:read")
  async handleMarkAsRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { notificationId: string },
  ) {
    await this.notificationService.markAsRead(data.notificationId);
    return { success: true };
  }

  async sendToUser(userId: string, payload: any) {
    const sockets = this.userSockets.get(userId);
    if (sockets) {
      sockets.forEach((socketId) => {
        this.server.to(socketId).emit("notification:new", payload);
      });
    }
  }

  async broadcastToAdmins(event: string, payload: any) {
    this.server.to("admin").emit(event, payload);
  }

  private async authenticateSocket(client: Socket): Promise<string | null> {
    const token =
      client.handshake.auth.token ||
      client.handshake.headers.authorization?.split(" ")[1];

    if (!token) return null;

    try {
      return this.verifyToken(token);
    } catch {
      return null;
    }
  }

  private verifyToken(token: string): string {
    return "userId"; // Implement JWT verification
  }
}
```
