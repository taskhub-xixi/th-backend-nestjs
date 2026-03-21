# Testing Guide

## Unit Tests

```typescript
// test/auth/auth.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "@modules/auth/auth.service";
import { PrismaService } from "@database/prisma.service";
import { RedisService } from "@config/redis.service";
import { ConflictException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

describe("AuthService", () => {
  let service: AuthService;
  let prismaService: jest.Mocked<PrismaService>;
  let jwtService: jest.Mocked<JwtService>;
  let redisService: jest.Mocked<RedisService>;

  const mockUser = {
    id: "user-uuid",
    email: "test@example.com",
    password: "$2b$12$hashedpassword",
    name: "Test User",
    role: "USER",
  };

  const mockTokens = {
    accessToken: "access-token",
    refreshToken: "refresh-token",
    expiresIn: 900,
  };

  beforeEach(async () => {
    const mockPrisma = {
      user: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    };

    const mockJwt = {
      signAsync: jest.fn().mockResolvedValue("token"),
      verify: jest.fn(),
    };

    const mockRedis = {
      get: jest.fn(),
      set: jest.fn(),
      del: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: JwtService, useValue: mockJwt },
        { provide: RedisService, useValue: mockRedis },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get(PrismaService);
    jwtService = module.get(JwtService);
    redisService = module.get(RedisService);
  });

  describe("register", () => {
    it("should register a new user successfully", async () => {
      prismaService.user.findUnique.mockResolvedValue(null);
      prismaService.user.create.mockResolvedValue(mockUser);

      const result = await service.register({
        email: "test@example.com",
        password: "password123",
        name: "Test User",
      });

      expect(result).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: "test@example.com" },
      });
      expect(prismaService.user.create).toHaveBeenCalled();
    });

    it("should throw ConflictException if email already exists", async () => {
      prismaService.user.findUnique.mockResolvedValue(mockUser);

      await expect(
        service.register({
          email: "test@example.com",
          password: "password123",
          name: "Test User",
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe("login", () => {
    it("should return tokens on successful login", async () => {
      const hashedPassword = await bcrypt.hash("password123", 12);
      const userWithHash = { ...mockUser, password: hashedPassword };

      prismaService.user.findUnique.mockResolvedValue(userWithHash);
      jwtService.signAsync.mockResolvedValue("token");
      redisService.set.mockResolvedValue("OK");

      const result = await service.login({
        email: "test@example.com",
        password: "password123",
      });

      expect(result).toHaveProperty("accessToken");
      expect(result).toHaveProperty("refreshToken");
      expect(result).toHaveProperty("expiresIn");
    });

    it("should throw UnauthorizedException for invalid email", async () => {
      prismaService.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({
          email: "wrong@example.com",
          password: "password123",
        }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException for invalid password", async () => {
      const hashedPassword = await bcrypt.hash("correctpassword", 12);
      const userWithHash = { ...mockUser, password: hashedPassword };

      prismaService.user.findUnique.mockResolvedValue(userWithHash);

      await expect(
        service.login({
          email: "test@example.com",
          password: "wrongpassword",
        }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe("refreshTokens", () => {
    it("should return new tokens for valid refresh token", async () => {
      jwtService.verify.mockReturnValue({
        userId: mockUser.id,
        email: mockUser.email,
        role: mockUser.role,
      });
      redisService.get.mockResolvedValue("valid-refresh-token");
      jwtService.signAsync.mockResolvedValue("new-token");
      redisService.set.mockResolvedValue("OK");

      const result = await service.refreshTokens("valid-refresh-token");

      expect(result).toHaveProperty("accessToken");
      expect(result).toHaveProperty("refreshToken");
    });

    it("should throw UnauthorizedException for invalid refresh token", async () => {
      jwtService.verify.mockImplementation(() => {
        throw new Error("Invalid token");
      });

      await expect(service.refreshTokens("invalid-token")).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
});
```

```typescript
// test/order/order.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { OrderService } from "@modules/order/order.service";
import { PrismaService } from "@database/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { OrderStatus } from "@common/constants";

describe("OrderService", () => {
  let service: OrderService;
  let prismaService: jest.Mocked<PrismaService>;
  let eventEmitter: jest.Mocked<EventEmitter2>;

  const mockProduct = {
    id: "product-uuid",
    name: "Test Product",
    price: 100000,
    stock: 10,
    isActive: true,
  };

  const mockOrder = {
    id: "order-uuid",
    userId: "user-uuid",
    status: OrderStatus.PENDING,
    subtotal: 100000,
    total: 115000,
    shippingAddress: {
      street: "123 Main",
      city: "Jakarta",
      postalCode: "12345",
    },
    items: [
      {
        id: "item-uuid",
        productId: "product-uuid",
        quantity: 1,
        price: 100000,
      },
    ],
  };

  beforeEach(async () => {
    const mockPrisma = {
      $transaction: jest.fn(),
      order: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        count: jest.fn(),
      },
      product: {
        findMany: jest.fn(),
      },
    };

    const mockEventEmitter = {
      emit: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: EventEmitter2, useValue: mockEventEmitter },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    prismaService = module.get(PrismaService);
    eventEmitter = module.get(EventEmitter2);
  });

  describe("create", () => {
    it("should create an order successfully", async () => {
      const dto = {
        items: [{ productId: "product-uuid", quantity: 1 }],
        shippingAddress: {
          street: "123 Main",
          city: "Jakarta",
          postalCode: "12345",
        },
      };

      prismaService.$transaction.mockImplementation(async (callback) => {
        const tx = {
          product: { findMany: jest.fn().mockResolvedValue([mockProduct]) },
          order: {
            create: jest.fn().mockResolvedValue(mockOrder),
          },
        };
        return callback(tx);
      });

      const result = await service.create("user-uuid", dto);

      expect(result).toEqual(mockOrder);
      expect(eventEmitter.emit).toHaveBeenCalledWith(
        "order.created",
        expect.any(Object),
      );
    });

    it("should throw BadRequestException for invalid products", async () => {
      const dto = {
        items: [{ productId: "invalid-uuid", quantity: 1 }],
        shippingAddress: {
          street: "123 Main",
          city: "Jakarta",
          postalCode: "12345",
        },
      };

      prismaService.$transaction.mockImplementation(async (callback) => {
        const tx = {
          product: { findMany: jest.fn().mockResolvedValue([]) },
          order: { create: jest.fn() },
        };
        return callback(tx);
      });

      await expect(service.create("user-uuid", dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe("findOne", () => {
    it("should return order details", async () => {
      prismaService.order.findUnique.mockResolvedValue(mockOrder);

      const result = await service.findOne("order-uuid", "user-uuid");

      expect(result).toEqual(mockOrder);
    });

    it("should throw NotFoundException for non-existent order", async () => {
      prismaService.order.findUnique.mockResolvedValue(null);

      await expect(
        service.findOne("invalid-uuid", "user-uuid"),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe("cancel", () => {
    it("should cancel a pending order", async () => {
      const cancelledOrder = { ...mockOrder, status: OrderStatus.CANCELLED };
      prismaService.order.findUnique.mockResolvedValue(mockOrder);
      prismaService.order.update.mockResolvedValue(cancelledOrder);

      const result = await service.cancel("order-uuid", "user-uuid");

      expect(result.status).toBe(OrderStatus.CANCELLED);
    });

    it("should throw BadRequestException for non-pending orders", async () => {
      const paidOrder = { ...mockOrder, status: OrderStatus.PAID };
      prismaService.order.findUnique.mockResolvedValue(paidOrder);

      await expect(service.cancel("order-uuid", "user-uuid")).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
```

---

## E2E Tests

```typescript
// test/order.e2e-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/database/prisma.service";

describe("OrderController (e2e)", () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let userToken: string;
  let adminToken: string;
  let productId: string;
  let orderId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();

    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    // Create test user and get token
    const userResponse = await request(app.getHttpServer())
      .post("/auth/register")
      .send({
        email: "user@test.com",
        password: "password123",
        name: "Test User",
      });

    const loginResponse = await request(app.getHttpServer())
      .post("/auth/login")
      .send({
        email: "user@test.com",
        password: "password123",
      });

    userToken = loginResponse.body.data.accessToken;

    // Create test product
    const productResponse = await request(app.getHttpServer())
      .post("/products")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        name: "Test Product",
        price: 100000,
        category: "electronics",
        stock: 10,
      });

    productId = productResponse.body.data.id;
  });

  afterAll(async () => {
    // Cleanup test data
    await prismaService.order.deleteMany({
      where: { user: { email: "user@test.com" } },
    });
    await prismaService.product.deleteMany({
      where: { name: "Test Product" },
    });
    await prismaService.user.deleteMany({
      where: { email: "user@test.com" },
    });

    await app.close();
  });

  describe("/orders (POST)", () => {
    it("should create an order", async () => {
      const response = await request(app.getHttpServer())
        .post("/orders")
        .set("Authorization", `Bearer ${userToken}`)
        .send({
          items: [{ productId, quantity: 1 }],
          shippingAddress: {
            street: "123 Test St",
            city: "Jakarta",
            postalCode: "12345",
          },
        });

      expect(response.status).toBe(201);
      expect(response.body.data).toHaveProperty("id");
      expect(response.body.data.status).toBe("PENDING");

      orderId = response.body.data.id;
    });

    it("should return 401 without auth token", async () => {
      const response = await request(app.getHttpServer())
        .post("/orders")
        .send({
          items: [{ productId, quantity: 1 }],
          shippingAddress: {
            street: "123 Test St",
            city: "Jakarta",
            postalCode: "12345",
          },
        });

      expect(response.status).toBe(401);
    });

    it("should return 400 for invalid DTO", async () => {
      const response = await request(app.getHttpServer())
        .post("/orders")
        .set("Authorization", `Bearer ${userToken}`)
        .send({
          items: [{ quantity: -1 }], // Invalid: negative quantity
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe("/orders (GET)", () => {
    it("should return user orders", async () => {
      const response = await request(app.getHttpServer())
        .get("/orders")
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.meta).toHaveProperty("total");
    });

    it("should support pagination", async () => {
      const response = await request(app.getHttpServer())
        .get("/orders?page=1&limit=5")
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body.meta.page).toBe(1);
      expect(response.body.meta.limit).toBe(5);
    });
  });

  describe("/orders/:id (GET)", () => {
    it("should return order details", async () => {
      const response = await request(app.getHttpServer())
        .get(`/orders/${orderId}`)
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data.id).toBe(orderId);
    });

    it("should return 404 for non-existent order", async () => {
      const response = await request(app.getHttpServer())
        .get("/orders/non-existent-uuid")
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe("/orders/:id/cancel (PATCH)", () => {
    it("should cancel a pending order", async () => {
      // Create new order for cancellation test
      const createResponse = await request(app.getHttpServer())
        .post("/orders")
        .set("Authorization", `Bearer ${userToken}`)
        .send({
          items: [{ productId, quantity: 1 }],
          shippingAddress: {
            street: "123 Test St",
            city: "Jakarta",
            postalCode: "12345",
          },
        });

      const newOrderId = createResponse.body.data.id;

      const response = await request(app.getHttpServer())
        .patch(`/orders/${newOrderId}/cancel`)
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data.status).toBe("CANCELLED");
    });
  });
});
```

```typescript
// test/auth.e2e-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/database/prisma.service";

describe("AuthController (e2e)", () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();

    prismaService = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    // Cleanup
    await prismaService.user.deleteMany({
      where: { email: "test@example.com" },
    });
    await app.close();
  });

  describe("/auth/register (POST)", () => {
    it("should register a new user", async () => {
      const response = await request(app.getHttpServer())
        .post("/auth/register")
        .send({
          email: "test@example.com",
          password: "Password123",
          name: "Test User",
        });

      expect(response.status).toBe(201);
      expect(response.body.data.email).toBe("test@example.com");
    });

    it("should return 409 for duplicate email", async () => {
      await request(app.getHttpServer()).post("/auth/register").send({
        email: "test@example.com",
        password: "Password123",
        name: "Test User",
      });

      const response = await request(app.getHttpServer())
        .post("/auth/register")
        .send({
          email: "test@example.com",
          password: "Password123",
          name: "Test User",
        });

      expect(response.status).toBe(409);
    });

    it("should return 400 for invalid email", async () => {
      const response = await request(app.getHttpServer())
        .post("/auth/register")
        .send({
          email: "invalid-email",
          password: "Password123",
          name: "Test User",
        });

      expect(response.status).toBe(400);
      expect(response.body.errors).toContain("email must be an email");
    });

    it("should return 400 for weak password", async () => {
      const response = await request(app.getHttpServer())
        .post("/auth/register")
        .send({
          email: "weak@example.com",
          password: "123",
          name: "Test User",
        });

      expect(response.status).toBe(400);
    });
  });

  describe("/auth/login (POST)", () => {
    beforeAll(async () => {
      await request(app.getHttpServer()).post("/auth/register").send({
        email: "login@example.com",
        password: "Password123",
        name: "Login User",
      });
    });

    afterAll(async () => {
      await prismaService.user.deleteMany({
        where: { email: "login@example.com" },
      });
    });

    it("should login successfully", async () => {
      const response = await request(app.getHttpServer())
        .post("/auth/login")
        .send({
          email: "login@example.com",
          password: "Password123",
        });

      expect(response.status).toBe(200);
      expect(response.body.data.accessToken).toBeDefined();
      expect(response.body.data.refreshToken).toBeDefined();
    });

    it("should return 401 for invalid credentials", async () => {
      const response = await request(app.getHttpServer())
        .post("/auth/login")
        .send({
          email: "login@example.com",
          password: "WrongPassword",
        });

      expect(response.status).toBe(401);
    });
  });

  describe("/auth/profile (GET)", () => {
    let accessToken: string;

    beforeAll(async () => {
      const loginResponse = await request(app.getHttpServer())
        .post("/auth/login")
        .send({
          email: "login@example.com",
          password: "Password123",
        });

      accessToken = loginResponse.body.data.accessToken;
    });

    it("should return user profile", async () => {
      const response = await request(app.getHttpServer())
        .get("/auth/profile")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data.email).toBe("login@example.com");
    });

    it("should return 401 without token", async () => {
      const response = await request(app.getHttpServer()).get("/auth/profile");

      expect(response.status).toBe(401);
    });
  });
});
```

---

## Test Coverage Report

```bash
# Run with coverage
bun run test:cov

# Expected output structure
coverage/
├── clover.xml
├── cobertura-coverage.xml
├── coverage-final.json
├── lcov.info
└── lcov-report/
    ├── index.html
    ├── modules/
    │   ├── auth/
    │   ├── order/
    │   └── ...
    └── ...
```

---

## Mock Strategies

```typescript
// test/mocks/prisma.mock.ts
export const prismaMockFactory = () => ({
  user: {
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
  order: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
  product: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  payment: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  $transaction: jest.fn((callback) => callback(prismaMockFactory())),
});

// test/mocks/redis.mock.ts
export const redisMockFactory = () => ({
  get: jest.fn().mockResolvedValue(null),
  set: jest.fn().mockResolvedValue("OK"),
  del: jest.fn().mockResolvedValue(1),
  exists: jest.fn().mockResolvedValue(0),
  incr: jest.fn().mockResolvedValue(1),
  expire: jest.fn().mockResolvedValue(1),
});
```
