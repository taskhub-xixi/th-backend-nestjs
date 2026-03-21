# Business Logic & Requirements Overview

## Core Flow (High Level)

```
┌─────────────┐
│   Customer  │
└──────┬──────┘
       │
       │ 1. Browse Products
       ▼
┌─────────────┐     2. Search/Filter      ┌─────────────┐
│   Product   │ ◀────────────────────── │  Database   │
│   Module    │ ───────────────────────►│  (Products) │
└──────┬──────┘     Returns products    └─────────────┘
       │
       │ 3. Add to cart / Create Order
       ▼
┌─────────────┐     4. Validate Stock     ┌─────────────┐
│   Order     │ ───────────────────────►│  Inventory  │
│   Module    │ ◀────────────────────── │   Module    │
└──────┬─────┘     Stock available?     └─────────────┘
       │
       │ 5. Payment
       ▼
┌─────────────┐     6. Create Session    ┌─────────────┐
│   Payment   │ ───────────────────────►│   Stripe/   │
│   Module    │ ◀────────────────────── │   Midtrans  │
└──────┬──────┘     Payment URL          └─────────────┘
       │
       │ 7. Webhook (payment success)
       ▼
┌─────────────┐     8. Update status     ┌─────────────┐
│   Webhook   │ ───────────────────────►│  Database   │
│   Handler   │                         └──────┬──────┘
       │                                    │
       │ 9. Event: PaymentSuccess           │
       ▼                                    │
┌─────────────┐     10. Reduce stock       ▼
│  Inventory  │ ◀────────────────────── ┌─────────────┐
│  Processor  │                         │  Notification│
└─────────────┘                         │  (Email)    │
                                         └─────────────┘
```

---

## Skenario Bisnis Lengkap

### Skenario 1: User Registration & Login

```
USER STORY:Sebagai customer baru, saya ingin membuat akun agar bisa下单

FLOW:
1. User submits: { email, password, name }
2. System validates:
   - Email format valid?
   - Email belum terdaftar?
   - Password min 8 chars, ada uppercase, lowercase, number?
   - Name min 2 chars?
3. System hash password dengan bcrypt (12 rounds)
4. Create user di database
5. Return success (tanpa password)

LOGIN:
1. User submits: { email, password }
2. Find user by email
3. Compare password dengan bcrypt
4. Generate JWT tokens:
   - Access token (15 min) - untuk API auth
   - Refresh token (7 days) - untuk renew access token
5. Store refresh token di Redis (key: refresh_token:{userId})
6. Return tokens ke client
```

### Skenario 2: Product Browsing

```
USER STORY:Sebagai customer, saya ingin melihat dan mencari produk

FLOW:
1. GET /products?page=1&limit=10&search=laptop&category=electronics&minPrice=1000&maxPrice=5000
2. System query database:
   - WHERE name ILIKE %search% OR description ILIKE %search%
   - AND category = 'electronics'
   - AND price BETWEEN 1000 AND 5000
   - AND deletedAt IS NULL (soft delete)
   - AND isActive = true
3. ORDER BY createdAt DESC
4. PAGINATE: OFFSET (page-1) * limit, TAKE limit
5. Return:
   {
     data: [products],
     meta: { page, limit, total, totalPages }
   }
```

### Skenario 3: Order Creation (Critical Logic)

```
USER STORY:Sebagai customer, saya ingin下单agar produk dikirim ke alamat saya

FLOW LENGKAP:

┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: Validate Request                                        │
├─────────────────────────────────────────────────────────────────┤
│ Input:                                                         │
│ {                                                             │
│   items: [                                                     │
│     { productId: "uuid1", quantity: 2 },                       │
│     { productId: "uuid2", quantity: 1 }                       │
│   ],                                                           │
│   shippingAddress: {                                          │
│     street: "123 Main St",                                     │
│     city: "Jakarta",                                           │
│     postalCode: "12345"                                       │
│   }                                                            │
│ }                                                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: Validate Products                                       │
├─────────────────────────────────────────────────────────────────┤
│ Query: "SELECT * FROM products WHERE id IN (uuid1, uuid2)"     │
│ Validasi:                                                       │
│ - Semua produk ada?                                             │
│ - Semua produk active?                                          │
│ - Semua produk deletedAt IS NULL?                               │
│                                                                 │
│ JIKA ADA YANG INVALID:                                          │
│ → Throw BadRequestException("Product not found or inactive")   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: Calculate Prices (Snapshot)                             │
├─────────────────────────────────────────────────────────────────┤
│ Untuk setiap item:                                              │
│ item.price = product.price (HARUS snapshot, tidak bisa berubah) │
│ item.total = price * quantity                                   │
│                                                                 │
│ subtotal = Σ item.total                                         │
│ shippingFee = 15000 (flat rate)                                 │
│ total = subtotal + shippingFee                                  │
│                                                                 │
│ ⚠️ HARUS SNAPSHOT karena harga bisa berubah nanti              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 4: Create Order (Transaction)                               │
├─────────────────────────────────────────────────────────────────┤
│ TRANSACTION START                                                │
│   1. Create Order dengan status = PENDING                       │
│   2. Create OrderItems (qty × price snapshot)                  │
│   3. Optionally: Reserve stock (decrement stock)                │
│ TRANSACTION COMMIT                                              │
│                                                                 │
│ ⚠️ JIKA GAGAL: Semua di-rollback                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 5: Emit Event (Async)                                       │
├─────────────────────────────────────────────────────────────────┤
│ eventEmitter.emit('order.created', {                            │
│   orderId,                                                      │
│   userId,                                                       │
│   total                                                        │
│ })                                                             │
│                                                                 │
│ Event Listener akan:                                            │
│ - Kirim email konfirmasi (via BullMQ)                           │
│ - Kirim WebSocket notification                                   │
│ - Update analytics                                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 6: Return Response                                         │
├─────────────────────────────────────────────────────────────────┤
│ Return:                                                         │
│ {                                                             │
│   id: "order-uuid",                                             │
│   status: "PENDING",                                           │
│   subtotal: 250000,                                           │
│   total: 265000,                                               │
│   items: [...],                                                │
│   createdAt: "2024-01-01T00:00:00Z"                           │
│ }                                                             │
│                                                                 │
│ CLIENT HARUS:                                                   │
│ 1. Simpan orderId                                              │
│ 2. Redirect ke payment page                                     │
│ 3. Call /payment/checkout dengan orderId                      │
└─────────────────────────────────────────────────────────────────┘
```

### Skenario 4: Payment Flow

```
USER STORY:Sebagai customer, saya ingin membayar pesanan dengan kartu kredit

FLOW:

CLIENT                          SERVER                         Payment Gateway
   │                               │                                   │
   │ 1. POST /payment/checkout     │                                   │
   │    { orderId, gateway: stripe }│                                   │
   │──────────────────────────────►│                                   │
   │                               │                                   │
   │                               │ 2. Validate order                │
   │                               │    - Order exists?                │
   │                               │    - Status = PENDING?            │
   │                               │    - Not already paid?            │
   │                               │                                   │
   │                               │ 3. Create Stripe session           │
   │                               │─────────────────────────────────►│
   │                               │                                   │
   │                               │ 4. Return checkout URL             │
   │                               │◄─────────────────────────────────│
   │                               │                                   │
   │ 5. Return { sessionId, url }   │                                   │
   │◄──────────────────────────────│                                   │
   │                               │                                   │
   │ 6. Redirect to Stripe Checkout │                                   │
   │═══════════════════════════════════════════════════════════════►│
   │                               │                                   │
   │ 7. User enters card details   │                                   │
   │    User completes payment      │                                   │
   │                               │                                   │
   │ 8. Redirect to success URL    │                                   │
   │◄═══════════════════════════════════════════════════════════════│
   │                               │                                   │
   │                               │ 9. Webhook: payment completed     │
   │                               │◄─────────────────────────────────│
   │                               │                                   │
   │                               │ 10. Process webhook (async)       │
   │                               │    - Verify signature             │
   │                               │    - Update payment status         │
   │                               │    - Update order status           │
   │                               │    - Emit PaymentSuccess event    │
   │                               │    - Reduce inventory              │
   │                               │    - Queue email confirmation      │
   │                               │                                   │
```

### Skenario 5: Payment Webhook Processing (Critical)

```
WEBHOOK: POST /payment/webhook

⚠️ SECURITY: Webhook signature verification WAJIB

1. Extract signature from header: Stripe-Signature
2. Verify dengan webhook secret:
   stripe.webhooks.constructEvent(payload, signature, secret)
3. JIKA INVALID → Return 400, don't process

4. Parse event type:
   - checkout.session.completed → Payment SUCCESS
   - payment_intent.payment_failed → Payment FAILED

PAYMENT SUCCESS FLOW:

TRANSACTION START
  │
  ├─► Update Payment: status = SUCCESS, gatewayRef = event.id
  │
  ├─► Update Order: status = PAID
  │
  └─► Get Order Items (for inventory)

  Emit 'payment.success' event
TRANSACTION COMMIT

ASYNC (via BullMQ):
  │
  ├─► NotificationProcessor:
  │     - Send email "Payment confirmed"
  │     - Send WebSocket notification
  │
  └─► InventoryProcessor:
        - For each order item:
          - product.stock -= item.quantity
        - If stock < threshold:
          - Emit 'low.stock' event
          - Notify admin
```

### Skenario 6: Inventory Management

```
STOCK REDUCTION (After Payment):

1. Event: PaymentSuccess({ orderId, items })
2. For each item in order:
   - Current stock = product.stock
   - New stock = current - item.quantity

   VALIDASI:
   - Jika new_stock < 0 → Ini tidak boleh terjadi karena:
     a. Sudah divalidasi saat order dibuat
     b. Tapi race condition bisa terjadi jika 2 user order bersamaan

   SOLUSI: Gunakan database transaction dengan row-level lock:

   BEGIN
     SELECT stock FROM products WHERE id = ? FOR UPDATE
     (Lock row, prevent concurrent update)

     UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?
   COMMIT

3. Check low stock threshold:
   - If new_stock < 10 (configurable):
     - Queue alert to admin (email/notification)
     - Optionally: Auto-reorder dari supplier
```

---

## Business Rules Summary

| Rule                   | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| **User Registration**  | Email unique, password min 8 chars (uppercase + lowercase + number) |
| **Login**              | Max 5 attempts per minute (rate limit), JWT expires 15 min          |
| **Product**            | Soft delete (deletedAt), active/inactive status                     |
| **Order**              | Status flow: PENDING → PAID → PROCESSING → SHIPPED → DELIVERED      |
| **Order Cancellation** | Only PENDING orders can be cancelled                                |
| **Payment**            | One payment per order, webhook verification required                |
| **Stock**              | Cannot go negative, check before order creation                     |
| **Pricing**            | Snapshot price at order time, not current price                     |
| **Shipping Fee**       | Flat rate 15000 IDR per order                                       |

---

## Status State Machine

### Order Status Flow

```
┌──────────┐
│ PENDING  │ ◄── Initial state after order creation
└────┬─────┘
     │ payment success
     ▼
┌──────────┐
│   PAID   │ ◄── After payment webhook
└────┬─────┘
     │ admin action
     ▼
┌─────────────┐
│ PROCESSING  │ ◄── Order being prepared
└──────┬──────┘
       │ admin action
       ▼
┌──────────┐
│ SHIPPED  │ ◄── Order shipped
└────┬─────┘
     │ delivery confirmed
     ▼
┌───────────┐
│ DELIVERED │ ◄── Completed
└───────────┘

CANCELLATION (from any status except DELIVERED):
┌──────────┐     ┌──────────┐
│   PAID   │ ──► │ CANCELLED │
└──────────┘     └──────────┘
```

### Payment Status Flow

```
┌──────────┐
│ PENDING  │ ◄── After checkout
└────┬─────┘
     │ success webhook
     ▼
┌──────────┐
│ SUCCESS  │
└──────────┘

CANCELLED:
  - Before payment: order cancelled
  - After payment: REFUNDED (manual process)
```

---

## Validation Rules

### Registration DTO

```typescript
{
  email:    required, valid email format, unique
  password: required, min 8 chars, must contain:
            - min 1 uppercase
            - min 1 lowercase
            - min 1 number
  name:     required, min 2 chars, max 100 chars
}
```

### Create Order DTO

```typescript
{
  items: required, array, min 1 item
    [].productId: required, valid UUID, exists in products
    [].quantity:  required, min 1, max stock available

  shippingAddress: required
    .street:     required, string
    .city:       required, string
    .postalCode: required, string
}
```

### Checkout DTO

```typescript
{
  orderId:   required, valid UUID, order belongs to user, status = PENDING
  gateway:   required, enum ['stripe', 'midtrans']
  paymentMethod: optional, string
}
```

---

## Error Handling Strategy

| Error Type        | HTTP Status | Action                       |
| ----------------- | ----------- | ---------------------------- |
| Validation failed | 400         | Return field errors          |
| Unauthorized      | 401         | Return "Invalid credentials" |
| Forbidden         | 403         | Return "Access denied"       |
| Not found         | 404         | Return "Resource not found"  |
| Conflict          | 409         | Return "Already exists"      |
| Rate limited      | 429         | Return "Too many requests"   |
| Server error      | 500         | Log, return generic message  |

### Consistent Error Response Format

```typescript
// Success
{
  statusCode: 200,
  message: "Success",
  data: { ... }
}

// Validation Error
{
  statusCode: 400,
  message: "Validation failed",
  errors: [
    "email must be an email",
    "password must be longer than 8 characters"
  ]
}

// Not Found
{
  statusCode: 404,
  message: "Order not found"
}
```

---

## Async Processing Rules

### When to Use Async (BullMQ)

| Task                    | Sync/Async | Reason            |
| ----------------------- | ---------- | ----------------- |
| Send email confirmation | ASYNC      | SMTP can be slow  |
| Generate PDF invoice    | ASYNC      | CPU intensive     |
| Update analytics        | ASYNC      | Not critical      |
| Reduce inventory        | SYNC       | Must be immediate |
| Send push notification  | ASYNC      | Third party API   |

### Queue Job Structure

```typescript
interface NotificationJob {
  userId: string;
  type: "order_created" | "payment_success" | "etc";
  title: string;
  message: string;
  data?: Record<string, any>;
  channel: "email" | "sms" | "push" | "websocket";
  attempts?: number;
  backoff?: {
    type: "exponential" | "fixed";
    delay: number;
  };
}
```

### Retry Strategy

```
Attempt 1 ──► Failed ──► Wait 1s
                           │
                    Attempt 2 ──► Failed ──► Wait 2s
                                          │
                                   Attempt 3 ──► Failed ──► Move to DLQ
                                   (Dead Letter Queue)
                                   Alert admin
```

---

## Data Consistency Rules

### Transaction Boundaries

```
ORDER CREATION:
  BEGIN
    1. Validate products exist
    2. Create order
    3. Create order items
    4. (Optional) Reserve stock
  COMMIT/ROLLBACK

PAYMENT SUCCESS:
  BEGIN
    1. Update payment status
    2. Update order status
    3. Read order items
  COMMIT

  THEN (async)
    - Reduce inventory
    - Send notifications
```

### Race Condition Handling

```
PROBLEM:
  User A and User B order the same product with stock = 1
  Both read stock = 1
  Both proceed to create order
  Result: stock = -1 (NEGATIVE!)

SOLUTION: Pessimistic Locking

BEGIN;
  SELECT stock FROM products WHERE id = ? FOR UPDATE;
  -- Returns stock = 1, LOCKS this row

  IF stock >= 1 THEN
    UPDATE products SET stock = stock - 1 WHERE id = ?;
    COMMIT;
  ELSE
    ROLLBACK;
    Throw "Insufficient stock";
END;
```

---

## Caching Strategy

| Data           | Cache Duration | Invalidation                    |
| -------------- | -------------- | ------------------------------- |
| Product list   | 5 minutes      | On product create/update/delete |
| Single product | 10 minutes     | On product update/delete        |
| Categories     | 1 hour         | On category change              |
| User session   | Until expiry   | On logout                       |
| Rate limit     | 1 minute       | Auto-expire                     |

```
CACHE FLOW:

GET /products/123
  │
  ├─► Check Redis: cache:product:123
  │     │
  │     ├─► HIT: Return cached data
  │     │
  │     └─► MISS: Query database
  │           │
  │           ├─► Store in Redis (TTL: 10 min)
  │           │
  │           └─► Return data

UPDATE /products/123
  │
  ├─► Update database
  │
  └─► Delete from Redis: cache:product:123
      (Next GET will repopulate cache)
```
