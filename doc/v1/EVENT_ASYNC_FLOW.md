# Event-Driven Architecture & Async Flow

## Event Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT REQUEST                                      │
│                              ↓                                               │
│                    ┌───────────────────┐                                    │
│                    │   HTTP Request    │                                    │
│                    │  POST /orders     │                                    │
│                    └─────────┬─────────┘                                    │
│                              ↓                                               │
│                    ┌───────────────────┐                                    │
│                    │   OrderService    │                                    │
│                    │  .createOrder()   │                                    │
│                    └─────────┬─────────┘                                    │
│                              │                                               │
│         ┌───────────────────┼───────────────────┐                          │
│         ↓                   ↓                   ↓                          │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                     │
│  │   Prisma    │    │ EventEmitter│    │   BullMQ    │                     │
│  │ Transaction │    │  (sync)     │    │   (async)   │                     │
│  └─────────────┘    └──────┬──────┘    └──────┬──────┘                     │
│                            ↓                   ↓                            │
│              ┌───────────────────┐    ┌───────────────────┐                 │
│              │  OrderCreated     │    │  Notification    │                 │
│              │     Event         │    │     Queue        │                 │
│              └─────────┬─────────┘    └─────────┬─────────┘                 │
│                        │                   ↓                                │
│              ┌───────────────────┐    ┌───────────────────┐                 │
│              │  Event Processor  │    │  Email Processor │                 │
│              │  (sync handler)   │    │  (async worker)  │                 │
│              └───────────────────┘    └───────────────────┘                 │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Event Loop & Microtask Queue

```typescript
/**
 * Understanding Event Loop, Microtask Queue, and Task Queue
 * in NestJS + BullMQ Context
 */

// ─────────────────────────────────────────────────────────────────────────────
// CALL STACK
// ─────────────────────────────────────────────────────────────────────────────
// The call stack executes synchronous code in LIFO order.
// When an HTTP request arrives:

async function handleOrderCreation(req) {
  // 1. This runs on the call stack
  const order = await this.orderService.create(dto);
  //    ↓ Call stack executes:
  //    1. this.orderService.create(dto)
  //    2. Inside create: this.prisma.order.create(...)
  //    3. Inside create: this.eventEmitter.emit(...)
}

// ─────────────────────────────────────────────────────────────────────────────
// MICROTASK QUEUE (Promise.then, queueMicrotask)
// ─────────────────────────────────────────────────────────────────────────────
// Microtasks are processed after the current synchronous code completes,
// but BEFORE the event loop continues to the next macrotask.

// Example: JWT verification microtasks
async function verifyToken(token: string) {
  return jwt.verify(token); // Returns a Promise
}

// When called:
verifyToken(token).then(decoded => {
  // This callback goes to the MICROTASK QUEUE
  // It executes after current call stack is empty
});

// Execution order:
// 1. Call stack: verifyToken() starts
// 2. jwt.verify() returns Promise
// 3. .then() callback queued to MICROTASK QUEUE
// 4. Call stack continues (if any)
// 5. Event loop checks MICROTASK QUEUE
// 6. Microtask executes: console.log(decoded)

// ─────────────────────────────────────────────────────────────────────────────
// TASK QUEUE (setTimeout, setInterval, I/O, BullMQ Workers)
// ─────────────────────────────────────────────────────────────────────────────
// Tasks from the TASK QUEUE are processed after ALL microtasks are done.

// setTimeout(() => {
//   // This goes to TASK QUEUE
//   console.log('Timeout callback');
// }, 0);

// queueMicrotask(() => {
//   // This goes to MICROTASK QUEUE (executes FIRST)
//   console.log('Microtask');
// });

// Output:
// Microtask       ← First (microtask queue)
// Timeout callback ← Second (task queue)

// ─────────────────────────────────────────────────────────────────────────────
// BULLMQ INTEGRATION
// ─────────────────────────────────────────────────────────────────────────────
// BullMQ workers process jobs from the TASK QUEUE (via Redis)

// Main thread (HTTP handler):
async createOrder(dto) {
  const order = await this.prisma.order.create({ data });

  // Add job to BullMQ queue
  // This is ASYNC and doesn't block the response
  await this.notificationQueue.add('send-email', {
    userId: order.userId,
    subject: 'Order Created',
    template: 'order-confirmation'
  });

  return order; // Response sent immediately
}

// Worker thread (separate process):
// BullMQ pulls jobs from Redis and executes them
// Each job runs in its own execution context

@Processor(NOTIFICATION_QUEUE)
export class NotificationProcessor {
  async process(job: Job) {
    // This runs in a WORKER PROCESS (separate event loop)
    // Heavy operations don't block the main thread

    const { userId, subject, template } = job.data;

    // Process email (can take time)
    await this.emailService.send({
      to: userId,
      subject,
      template
    });

    return { sent: true };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICAL EXAMPLE: Order → Payment → Inventory Flow
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 1. CLIENT: POST /orders
 *
 * 2. CALL STACK (Main Thread):
 *    - Controller receives request
 *    - Service validates DTO
 *    - Service creates order in transaction
 *    - Service emits OrderCreated event
 *    - Response returned to client
 *
 * 3. MICROTASK QUEUE (after step 2):
 *    - Event listeners execute synchronously
 *    - Webhook handlers registered
 *
 * 4. BULLMQ (async, separate worker):
 *    - Notification job queued
 *    - Email processor executes when worker is available
 *    - Heavy email sending doesn't block HTTP threads
 */

// src/modules/order/order.service.ts
@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly orderQueue: InjectQueue('orders'),
  ) {}

  async create(userId: string, dto: CreateOrderDto) {
    const order = await this.prisma.$transaction(async (tx) => {
      // Calculate totals
      const items = await this.calculateItems(tx, dto.items);
      const subtotal = items.reduce((sum, i) => sum + i.total, 0);

      // Create order
      return tx.order.create({
        data: {
          userId,
          items: { create: items },
          subtotal,
          total: subtotal + SHIPPING_FEE,
          status: OrderStatus.PENDING,
        },
        include: { items: true },
      });
    });

    // ─────────────────────────────────────────────────
    // Call Stack: Emit event (synchronous)
    // ─────────────────────────────────────────────────
    this.eventEmitter.emit('order.created', {
      orderId: order.id,
      userId,
      total: order.total,
    });

    // ─────────────────────────────────────────────────
    // Task Queue: Add to BullMQ (async, non-blocking)
    // ─────────────────────────────────────────────────
    // Use add() for fire-and-forget, addRepeatable() for scheduled jobs
    await this.orderQueue.add(
      'process-new-order',
      { orderId: order.id },
      {
        attempts: 3,           // Retry on failure
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
        removeOnComplete: 100, // Keep last 100 completed jobs
        removeOnFail: 1000,    // Keep last 1000 failed jobs
      }
    );

    return order;
  }
}

// src/modules/order/order.processor.ts
/**
 * BullMQ Job Processor
 *
 * This runs in a SEPARATE WORKER PROCESS with its own event loop.
 * Heavy processing here doesn't affect HTTP response times.
 */
@Processor('orders')
export class OrderProcessor {
  @Process('process-new-order')
  async handleNewOrder(job: Job<{ orderId: string }>) {
    const { orderId } = job.data;

    // ─────────────────────────────────────────────────
    // Retry mechanism (handled by BullMQ)
    // If this fails, BullMQ retries with exponential backoff
    // Jobs: failed → active → waiting → active → completed
    // ─────────────────────────────────────────────────

    // Send confirmation email (can be slow)
    await this.emailService.sendOrderConfirmation(orderId);

    // Update analytics (non-critical)
    await this.analyticsService.trackOrderCreated(orderId);

    // Send push notification
    await this.pushService.notify(orderId);

    return { success: true, orderId };
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    // Microtask: Log completion
    console.log(`Job ${job.id} completed`);
  }

  @OnWorkerEvent('failed')
  async onFailed(job: Job, error: Error) {
    // Handle failed jobs (e.g., move to dead letter queue)
    console.error(`Job ${job.id} failed: ${error.message}`);

    if (job.attemptsMade >= job.opts.attempts) {
      // Final failure - alert team
      await this.alertService.notifyFailure(job.data);
    }
  }
}
```

## Event Definitions

```typescript
// src/common/events/index.ts

/**
 * Order Created Event
 *
 * Emitted when: POST /orders succeeds
 * Handled by:
 *   - NotificationService: Sends order confirmation
 *   - AnalyticsService: Tracks order metrics
 *   - InventoryService: Reserved stock (optional)
 */
export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly total: number,
  ) {}
}

/**
 * Payment Success Event
 *
 * Emitted when: Payment webhook confirms payment
 * Handled by:
 *   - InventoryService: Reduce stock
 *   - NotificationService: Send payment confirmation
 *   - AnalyticsService: Track revenue
 */
export class PaymentSuccessEvent {
  constructor(
    public readonly orderId: string,
    public readonly paymentId: string,
    public readonly amount: number,
  ) {}
}

/**
 * Inventory Low Stock Event
 *
 * Emitted when: Stock falls below threshold
 * Handled by:
 *   - NotificationService: Alert admin
 *   - SupplierService: Auto reorder (optional)
 */
export class LowStockEvent {
  constructor(
    public readonly productId: string,
    public readonly currentStock: number,
    public readonly threshold: number,
  ) {}
}
```

## Event Listeners

```typescript
// src/modules/notification/notification.listener.ts
import { EventsHandler, EventCreatedEvent } from "@nestjs/event-emitter";
import { NotificationService } from "../notification.service";

/**
 * Event Listener for Order Created
 *
 * Executes SYNCHRONOUSLY after event is emitted.
 * Use for: Quick operations, real-time updates
 * For heavy operations, emit to BullMQ instead.
 */
@EventsHandler(OrderCreatedEvent)
export class OrderCreatedListener {
  constructor(private readonly notificationService: NotificationService) {}

  handle(event: OrderCreatedEvent) {
    // This runs synchronously on the call stack
    // Keep it fast - don't do heavy I/O here

    this.notificationService.sendWebSocketNotification(event.userId, {
      type: "order_created",
      title: "Order Placed",
      message: `Your order #${event.orderId.slice(0, 8)} has been placed`,
      data: { orderId: event.orderId },
    });
  }
}

// src/modules/payment/payment.listener.ts
@EventsHandler(PaymentSuccessEvent)
export class PaymentSuccessListener {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly notificationService: NotificationService,
  ) {}

  async handle(event: PaymentSuccessEvent) {
    // For async operations, emit to BullMQ

    // Reduce inventory
    await this.inventoryService.reduceStock(event.orderId);

    // Queue email notification (async)
    await this.notificationService.queueEmail(
      event.orderId,
      "Payment Confirmation",
      "Your payment has been confirmed",
    );
  }
}
```

## Queue Configuration

```typescript
// src/config/queue.config.ts
import { BullModule } from "@nestjs/bullmq";

export const BullQueueConfig = BullModule.forRoot("bullmq", {
  connection: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT) || 6379,
  },
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: false,
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 1000,
    },
  },
});

// Export individual queue modules
export const NotificationQueueModule = BullModule.registerQueue({
  name: "notifications",
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: "exponential", delay: 2000 },
  },
});

export const EmailQueueModule = BullModule.registerQueue({
  name: "emails",
  defaultJobOptions: {
    attempts: 3,
    removeOnComplete: 50,
  },
});
```

## Redis Keys Structure

```
# User Sessions
session:{userId}              # Hash: { accessToken, lastActivity }
refresh_token:{userId}        # String: refresh token value (TTL: 7 days)

# Cache
cache:products                 # JSON: cached product list (TTL: 5 min)
cache:product:{id}            # JSON: single product (TTL: 10 min)
cache:categories              # JSON: category list (TTL: 1 hour)

# Rate Limiting
throttle:{userId}:{minute}    # Counter (TTL: 60 sec)

# BullMQ
bullmq:notifications:{id}     # Job data
bullmq:notifications:wait     # Waiting jobs
bullmq:notifications:active   # Currently processing
bullmq:notifications:failed   # Failed jobs
bullmq:notifications:completed # Completed jobs

# Locks
lock:order:{orderId}          # Prevent double processing (TTL: 30 sec)
lock:inventory:{productId}    # Stock update lock (TTL: 10 sec)

# Analytics
analytics:daily_sales:{date}  # Sorted set: sales by hour
analytics:revenue:{month}     # Monthly revenue counter
```
