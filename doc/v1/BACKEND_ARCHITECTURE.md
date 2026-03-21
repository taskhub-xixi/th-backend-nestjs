# E-Commerce + SaaS Backend API Documentation

## Overview

Production-ready NestJS backend with modular architecture for scalable e-commerce and SaaS applications.

---

## Tech Stack

- **Runtime**: Node.js / Bun
- **Framework**: NestJS 11 (TypeScript)
- **Database**: PostgreSQL via Prisma ORM
- **Cache/Queue**: Redis + BullMQ
- **Auth**: JWT (access + refresh token)
- **File Upload**: Multer
- **Real-time**: WebSocket (Socket.io)
- **Security**: Helmet, CORS, Throttler
- **Logging**: Winston/Pino
- **Testing**: Jest + Supertest

---

## Project Structure

```
src/
├── main.ts                          # Application bootstrap
├── app.module.ts                    # Root module
│
├── config/
│   ├── database.config.ts           # Prisma/TypeORM config
│   ├── redis.config.ts              # Redis connection
│   ├── queue.config.ts              # BullMQ config
│   └── env.validation.ts            # Environment validation
│
├── common/
│   ├── decorators/
│   │   ├── public.decorator.ts      # Bypass auth guard
│   │   ├── roles.decorator.ts       # @Roles('admin', 'user')
│   │   ├── current-user.decorator.ts
│   │   └── pagination.decorator.ts  # @Pagination()
│   │
│   ├── guards/
│   │   ├── jwt-auth.guard.ts        # JWT validation
│   │   ├── roles.guard.ts           # RBAC enforcement
│   │   └── throttler.guard.ts       # Rate limiting
│   │
│   ├── interceptors/
│   │   ├── logging.interceptor.ts   # Request/response logging
│   │   ├── transform.interceptor.ts # Standardized response
│   │   └── cache.interceptor.ts     # Redis caching
│   │
│   ├── filters/
│   │   ├── http-exception.filter.ts # Consistent error format
│   │   └── prisma-exception.filter.ts
│   │
│   ├── pipes/
│   │   └── validation.pipe.ts      # Global DTO validation
│   │
│   ├── interfaces/
│   │   ├── pagination.interface.ts  # { page, limit, total, totalPages }
│   │   └── response.interface.ts    # Standard response shape
│   │
│   └── constants/
│       ├── roles.enum.ts            # User roles
│       └── jwt.constants.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts       # POST /auth/register, /auth/login, /auth/refresh
│   │   ├── auth.service.ts          # Business logic
│   │   ├── auth.strategy.ts         # Passport JWT strategy
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   ├── login.dto.ts
│   │   │   └── refresh-token.dto.ts
│   │   └── interfaces/
│   │       └── auth.interface.ts    # Token payloads
│   │
│   ├── user/
│   │   ├── user.module.ts
│   │   ├── user.controller.ts       # CRUD endpoints
│   │   ├── user.service.ts
│   │   ├── user.repository.ts       # Data access
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   ├── update-user.dto.ts
│   │   │   └── update-profile.dto.ts
│   │   └── entities/
│   │       └── user.entity.ts       # Prisma model
│   │
│   ├── product/
│   │   ├── product.module.ts
│   │   ├── product.controller.ts     # CRUD + search + filter
│   │   ├── product.service.ts
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-product.dto.ts
│   │   │   ├── product-query.dto.ts # Pagination + filter
│   │   │   └── upload-product-image.dto.ts
│   │   └── entities/
│   │       └── product.entity.ts
│   │
│   ├── order/
│   │   ├── order.module.ts
│   │   ├── order.controller.ts
│   │   ├── order.service.ts
│   │   ├── dto/
│   │   │   ├── create-order.dto.ts
│   │   │   └── order-query.dto.ts
│   │   └── entities/
│   │       ├── order.entity.ts
│   │       └── order-item.entity.ts
│   │
│   ├── payment/
│   │   ├── payment.module.ts
│   │   ├── payment.controller.ts    # POST /payment/checkout, /payment/webhook
│   │   ├── payment.service.ts
│   │   ├── payment-gateway.service.ts # Stripe/Midtrans mock
│   │   ├── dto/
│   │   │   ├── checkout.dto.ts
│   │   │   └── webhook.dto.ts
│   │   └── entities/
│   │       └── payment.entity.ts
│   │
│   ├── inventory/
│   │   ├── inventory.module.ts
│   │   ├── inventory.controller.ts
│   │   ├── inventory.service.ts
│   │   ├── dto/
│   │   │   └── update-stock.dto.ts
│   │   └── entities/
│   │       └── inventory.entity.ts
│   │
│   ├── notification/
│   │   ├── notification.module.ts
│   │   ├── notification.gateway.ts   # WebSocket gateway
│   │   ├── notification.service.ts
│   │   ├── notification.processor.ts # BullMQ processor
│   │   └── dto/
│   │       └── send-notification.dto.ts
│   │
│   ├── file-upload/
│   │   ├── file-upload.module.ts
│   │   ├── file-upload.controller.ts
│   │   ├── file-upload.service.ts
│   │   ├── file-upload.constants.ts  # MIME types, limits
│   │   └── dto/
│   │       └── file-upload.dto.ts
│   │
│   └── analytics/
│       ├── analytics.module.ts
│       ├── analytics.controller.ts
│       ├── analytics.service.ts
│       └── dto/
│           └── sales-query.dto.ts
│
└── database/
    ├── prisma.service.ts            # Prisma client singleton
    └── database.module.ts
```

---

## API Endpoints

### Auth Module

| Method | Endpoint         | Description              | Auth   |
| ------ | ---------------- | ------------------------ | ------ |
| POST   | `/auth/register` | User registration        | Public |
| POST   | `/auth/login`    | User login               | Public |
| POST   | `/auth/refresh`  | Refresh access token     | Public |
| POST   | `/auth/logout`   | Invalidate refresh token | JWT    |
| GET    | `/auth/profile`  | Get current user         | JWT    |

**Register Request:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Login Response:**

```json
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "eyJhbGci...",
  "expiresIn": 900
}
```

---

### User Module

| Method | Endpoint         | Description        | Auth  |
| ------ | ---------------- | ------------------ | ----- |
| GET    | `/users`         | List all users     | Admin |
| GET    | `/users/:id`     | Get user by ID     | JWT   |
| PATCH  | `/users/:id`     | Update user        | JWT   |
| DELETE | `/users/:id`     | Soft delete user   | Admin |
| PATCH  | `/users/profile` | Update own profile | JWT   |
| POST   | `/users/avatar`  | Upload avatar      | JWT   |

---

### Product Module

| Method | Endpoint               | Description               | Auth   |
| ------ | ---------------------- | ------------------------- | ------ |
| GET    | `/products`            | List products (paginated) | Public |
| GET    | `/products/:id`        | Get product by ID         | Public |
| POST   | `/products`            | Create product            | Admin  |
| PATCH  | `/products/:id`        | Update product            | Admin  |
| DELETE | `/products/:id`        | Soft delete product       | Admin  |
| POST   | `/products/:id/images` | Upload product images     | Admin  |

**Query Parameters:**

```
?page=1
&limit=10
&search=laptop
&category=electronics
&minPrice=100
&maxPrice=1000
&sort=price
&order=asc
```

**Paginated Response:**

```json
{
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

---

### Order Module

| Method | Endpoint             | Description       | Auth |
| ------ | -------------------- | ----------------- | ---- |
| GET    | `/orders`            | List user orders  | JWT  |
| GET    | `/orders/:id`        | Get order details | JWT  |
| POST   | `/orders`            | Create order      | JWT  |
| PATCH  | `/orders/:id/cancel` | Cancel order      | JWT  |

**Create Order Request:**

```json
{
  "items": [
    { "productId": "uuid", "quantity": 2 },
    { "productId": "uuid", "quantity": 1 }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Jakarta",
    "postalCode": "12345"
  }
}
```

**Order Response:**

```json
{
  "id": "uuid",
  "status": "pending",
  "items": [...],
  "subtotal": 150000,
  "total": 165000,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

---

### Payment Module

| Method | Endpoint            | Description              | Auth     |
| ------ | ------------------- | ------------------------ | -------- |
| POST   | `/payment/checkout` | Create payment session   | JWT      |
| POST   | `/payment/webhook`  | Payment gateway callback | Public\* |
| GET    | `/payment/:orderId` | Get payment status       | JWT      |

**Checkout Request:**

```json
{
  "orderId": "uuid",
  "paymentMethod": "credit_card",
  "gateway": "stripe"
}
```

**Webhook Payload (Stripe):**

```json
{
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_xxx",
      "metadata": { "orderId": "uuid" },
      "payment_status": "paid"
    }
  }
}
```

---

### Inventory Module

| Method | Endpoint                | Description       | Auth   |
| ------ | ----------------------- | ----------------- | ------ |
| GET    | `/inventory/:productId` | Get stock         | Public |
| PATCH  | `/inventory/:productId` | Update stock      | Admin  |
| POST   | `/inventory/adjust`     | Bulk adjust stock | Admin  |

---

### Notification Module

**WebSocket Events:**
| Event | Direction | Description |
|-------|-----------|-------------|
| `order:created` | Server → Client | Order created notification |
| `payment:success` | Server → Client | Payment success notification |
| `notification:new` | Server → Client | General notification |

---

### File Upload Module

| Method | Endpoint         | Description            | Auth |
| ------ | ---------------- | ---------------------- | ---- |
| POST   | `/upload/image`  | Upload single image    | JWT  |
| POST   | `/upload/images` | Upload multiple images | JWT  |

**Validation:**

- Max size: 5MB
- Allowed types: `image/jpeg`, `image/png`, `image/webp`

---

### Analytics Module

| Method | Endpoint                  | Description          | Auth  |
| ------ | ------------------------- | -------------------- | ----- |
| GET    | `/analytics/sales`        | Sales summary        | Admin |
| GET    | `/analytics/revenue`      | Revenue report       | Admin |
| GET    | `/analytics/products/top` | Top selling products | Admin |

---

## Database Schema (Prisma)

```prisma
enum Role {
  USER
  ADMIN
}

enum OrderStatus {
  PENDING
  PAID
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  SUCCESS
  FAILED
  REFUNDED
}

model User {
  id            String    @id @default(uuid())
  email         String    @unique
  password      String
  name          String
  role          Role      @default(USER)
  avatar        String?
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?

  orders        Order[]
  refreshTokens RefreshToken[]

  @@map("users")
}

model RefreshToken {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  expiresAt DateTime
  createdAt DateTime @default(now())

  @@map("refresh_tokens")
}

model Product {
  id          String    @id @default(uuid())
  name        String
  description String?
  price       Decimal
  category    String
  images      String[]  // Array of image URLs
  stock       Int       @default(0)
  isActive    Boolean   @default(true)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deletedAt   DateTime?

  orderItems  OrderItem[]

  @@map("products")
}

model Order {
  id              String      @id @default(uuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id])
  status          OrderStatus @default(PENDING)
  shippingAddress Json
  subtotal        Decimal
  total           Decimal
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  items           OrderItem[]
  payment         Payment?

  @@map("orders")
}

model OrderItem {
  id        String  @id @default(uuid())
  orderId   String
  order     Order   @relation(fields: [orderId], references: [id])
  productId String
  product   Product @relation(fields: [productId], references: [id])
  quantity  Int
  price     Decimal // Price at time of purchase

  @@map("order_items")
}

model Payment {
  id              String        @id @default(uuid())
  orderId         String        @unique
  order           Order         @relation(fields: [orderId], references: [id])
  amount          Decimal
  status          PaymentStatus @default(PENDING)
  gateway         String        // stripe, midtrans
  gatewayRef      String?       // External reference
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  @@map("payments")
}
```

---

## Event Flow (Async Processing)

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Client    │────▶│  Controller  │────▶│   Service   │
└─────────────┘     └──────────────┘     └──────┬──────┘
                                                 │
                          ┌──────────────────────┼──────────────────────┐
                          │                      │                      │
                          ▼                      ▼                      ▼
                   ┌────────────┐        ┌────────────┐        ┌────────────┐
                   │   Order    │        │  Inventory │        │Notification│
                   │  Created   │        │  Service   │        │  Processor │
                   │   Event    │        │            │        │            │
                   └─────┬──────┘        └────────────┘        └─────┬──────┘
                         │                                         │
                         ▼                                         ▼
                   ┌────────────┐                          ┌────────────┐
                   │  BullMQ    │                          │ BullMQ     │
                   │  Queue     │                          │ Email Queue│
                   └────────────┘                          └────────────┘
```

**OrderCreated Event Flow:**

1. User creates order → `POST /orders`
2. `OrderService.createOrder()` saves order with status `PENDING`
3. Emit `OrderCreated` event
4. BullMQ processor picks up job
5. Send notification to user (WebSocket + Email queue)
6. Return response to client

**PaymentSuccess Event Flow:**

1. Payment gateway calls `POST /payment/webhook`
2. `PaymentService.processWebhook()` validates signature
3. Update payment status → `SUCCESS`
4. Update order status → `PAID`
5. Emit `PaymentSuccess` event
6. BullMQ processor reduces inventory stock
7. Send confirmation notification

---

## Rate Limiting

```typescript
// Global: 100 requests per minute
// Auth endpoints: 5 requests per minute
// File upload: 10 requests per minute
```

---

## Response Format

**Success:**

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": { ... }
}
```

**Error:**

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": ["email must be an email"]
}
```

---

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/ecommerce"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_ACCESS_SECRET=your-access-secret
JWT_REFRESH_SECRET=your-refresh-secret
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d

# Payment Gateway
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# App
PORT=3000
NODE_ENV=development
```

---

## Testing

```bash
# Unit tests
bun run test

# E2E tests
bun run test:e2e

# Coverage
bun run test:cov
```

---

## Docker

```dockerfile
# Development
docker-compose.yml includes:
- app (NestJS)
- postgres
- redis
- bull-board (job queue dashboard)
```

---

## Security Checklist

- [x] JWT authentication
- [x] Role-based access control
- [x] Rate limiting (Throttler)
- [x] CORS configuration
- [x] Helmet security headers
- [x] Password hashing (bcrypt)
- [x] Input validation (class-validator)
- [x] SQL injection prevention (Prisma)
- [x] File upload validation

---

## Scalability Notes

1. **Microservices Ready**: Each module can be extracted as separate microservice
2. **Event-Driven**: Use BullMQ for async processing
3. **Database**: Connection pooling via Prisma
4. **Caching**: Redis for frequently accessed data
5. **Queue**: BullMQ with retry and dead letter queue
6. **Real-time**: Socket.io for WebSocket scaling (use Redis adapter)

---

## Performance Tips

1. Use database indexes on frequently queried fields
2. Implement caching for product listings
3. Use database transactions for order creation
4. Optimize images before upload (compress, resize)
5. Use lazy loading for relations
6. Implement pagination on all list endpoints
