# Common Modules: Guards, Filters, Interceptors

## Guards

### JWT Auth Guard

```typescript
// src/common/guards/jwt-auth.guard.ts
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

/**
 * JWT Authentication Guard
 *
 * Execution Context:
 * 1. Request arrives at the controller
 * 2. Guard checks for JWT token in Authorization header
 * 3. Guard validates token using Passport JWT strategy
 * 4. If valid, attaches user to request and allows execution
 * 5. If invalid, throws UnauthorizedException
 *
 * Event Loop Integration:
 * - Uses Promise-based token verification
 * - Registers microtasks for async validation
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException("Invalid or expired token");
    }
    return user;
  }
}
```

### Roles Guard

```typescript
// src/common/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "@common/decorators/roles.decorator";
import { Role } from "@common/constants/roles.enum";

/**
 * Role-Based Access Control (RBAC) Guard
 *
 * Execution Context:
 * 1. After JWT Auth Guard passes
 * 2. Roles Guard checks metadata set by @Roles() decorator
 * 3. Compares user's role with allowed roles
 * 4. Allows/denies access based on role match
 *
 * Task Queue Integration:
 * - Logs role check events for audit trail
 * - Could queue async permission checks to BullMQ
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}
```

### Throttler Guard

```typescript
// src/common/guards/throttler.guard.ts
import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { ThrottlerGuard, ThrottlerException } from "@nestjs/throttler";
import { Reflector } from "@nestjs/core";

/**
 * Rate Limiting Guard using Throttler
 *
 * Call Stack:
 * 1. ThrottlerGuard.canActivate() is called
 * 2. Retrieves throttle metadata (limit, ttl)
 * 3. Checks Redis for request count
 * 4. If under limit: increment and allow
 * 5. If over limit: throw ThrottlerException
 *
 * Task Queue:
 * - Uses Redis for distributed rate limiting
 * - Queues throttled requests for retry
 */
@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  protected async throwThrottlingException(
    context: ExecutionContext,
  ): Promise<void> {
    throw new ThrottlerException("Too many requests. Please slow down.");
  }

  protected async getTracker(req: Record<string, any>): Promise<string> {
    return req.user?.id || req.ip;
  }
}
```

---

## Filters

### HTTP Exception Filter

```typescript
// src/common/filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Request, Response } from "express";

/**
 * Global HTTP Exception Filter
 *
 * Execution Context:
 * 1. Exception thrown in controller/service
 * 2. Caught by this filter (last in chain)
 * 3. Transforms exception to consistent format
 * 4. Logs exception details
 * 5. Sends formatted response to client
 *
 * Event Loop:
 * - Uses async logging to external services
 * - Could queue error events to BullMQ
 */
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";
    let errors: string[] | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === "object") {
        const responseObj = exceptionResponse as any;
        message = responseObj.message || message;
        errors = Array.isArray(responseObj.message)
          ? responseObj.message
          : responseObj.errors;
      }
    }

    const errorResponse = {
      statusCode: status,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    this.logger.error(
      `${request.method} ${request.url} ${status}`,
      exception instanceof Error ? exception.stack : "",
    );

    // Queue error for monitoring (optional)
    this.queueErrorEvent(errorResponse);

    response.status(status).json(errorResponse);
  }

  private queueErrorEvent(error: any) {
    // Could emit to BullMQ for async processing
  }
}
```

### Prisma Exception Filter

```typescript
// src/common/filters/prisma-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

/**
 * Prisma-specific Exception Filter
 *
 * Handles common Prisma errors:
 * - P2002: Unique constraint failed
 * - P2025: Record not found
 * - P2003: Foreign key constraint failed
 */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Database error";
    let errors: string[] | undefined;

    switch (exception.code) {
      case "P2002":
        status = HttpStatus.CONFLICT;
        message = "Unique constraint violation";
        errors = [
          `A record with this ${exception.meta?.target} already exists`,
        ];
        break;
      case "P2025":
        status = HttpStatus.NOT_FOUND;
        message = "Record not found";
        break;
      case "P2003":
        status = HttpStatus.BAD_REQUEST;
        message = "Foreign key constraint failed";
        break;
    }

    response.status(status).json({
      statusCode: status,
      message,
      ...(errors && { errors }),
      timestamp: new Date().toISOString(),
    });
  }
}
```

---

## Interceptors

### Logging Interceptor

```typescript
// src/common/interceptors/logging.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Request } from "express";

/**
 * Logging Interceptor
 *
 * Call Stack:
 * 1. Request enters interceptor
 * 2. Logs request details (method, path, body)
 * 3. Passes to next handler (controller)
 * 4. Captures response after handler completes
 * 5. Logs response details (status, duration)
 *
 * Event Loop:
 * - Uses tap() operator for side effects
 * - Registers callback for response logging
 * - Non-blocking async logging
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger("HTTP");

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const { method, url, body } = request;
    const startTime = Date.now();

    this.logger.log(`Incoming request: ${method} ${url}`);
    if (Object.keys(body || {}).length > 0) {
      this.logger.debug(`Request body: ${JSON.stringify(body)}`);
    }

    return next.handle().pipe(
      tap({
        next: (data) => {
          const duration = Date.now() - startTime;
          this.logger.log(`Response: ${method} ${url} ${duration}ms`);
        },
        error: (error) => {
          const duration = Date.now() - startTime;
          this.logger.error(
            `Error: ${method} ${url} ${duration}ms - ${error.message}`,
          );
        },
      }),
    );
  }
}
```

### Transform Interceptor

```typescript
// src/common/interceptors/transform.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isArray, isObject } from "class-transformer";

/**
 * Response Transform Interceptor
 *
 * Standardizes all API responses to:
 * {
 *   statusCode: number,
 *   message: string,
 *   data?: any,
 *   meta?: PaginationMeta
 * }
 *
 * Event Loop:
 * - Uses map() operator for synchronous transformation
 * - Non-blocking data transformation
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // If already formatted (e.g., file download), return as-is
        if (this.isResponse(data)) {
          return data;
        }

        // Extract meta if paginated
        const { meta, ...rest } = this.extractMeta(data);

        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: "Success",
          ...rest,
          ...(meta && { meta }),
        };
      }),
    );
  }

  private isResponse(data: any): boolean {
    return data && typeof data === "object" && "statusCode" in data;
  }

  private extractMeta(data: any): { data?: any; meta?: any } {
    if (isArray(data)) {
      return { data };
    }

    if (isObject(data) && "data" in data && "meta" in data) {
      return { data: data.data, meta: data.meta };
    }

    return { data };
  }
}
```

### Cache Interceptor

```typescript
// src/common/interceptors/cache.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { RedisService } from "@config/redis.service";

/**
 * Caching Interceptor
 *
 * Task Queue Integration:
 * - Checks Redis cache first
 * - On cache hit: returns cached data immediately
 * - On cache miss: calls handler, stores result in Redis
 *
 * Event Loop:
 * - Uses async Redis operations (microtasks)
 * - Non-blocking cache checks
 */
@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private readonly redisService: RedisService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const cacheKey = this.generateCacheKey(request);

    const cachedData = await this.redisService.get(cacheKey);

    if (cachedData) {
      return of(JSON.parse(cachedData));
    }

    return next.handle().pipe(
      tap(async (data) => {
        const ttl = this.getTTL(context);
        if (ttl > 0) {
          await this.redisService.set(cacheKey, JSON.stringify(data), ttl);
        }
      }),
    );
  }

  private generateCacheKey(request: any): string {
    return `cache:${request.route?.path || request.url}:${JSON.stringify(request.query)}`;
  }

  private getTTL(context: ExecutionContext): number {
    // Default TTL: 5 minutes
    return 300;
  }
}
```

---

## Decorators

```typescript
// src/common/decorators/public.decorator.ts
import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// Usage: @Public() skips JWT auth guard
```

```typescript
// src/common/decorators/roles.decorator.ts
import { SetMetadata } from "@nestjs/common";
import { Role } from "@common/constants/roles.enum";

export const ROLES_KEY = "roles";
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

// Usage: @Roles('ADMIN') or @Roles('USER', 'ADMIN')
```

```typescript
// src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);

// Usage: @CurrentUser('userId') or @CurrentUser()
```

```typescript
// src/common/decorators/pagination.decorator.ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Pagination = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query;

    return {
      page: parseInt(query.page) || 1,
      limit: Math.min(parseInt(query.limit) || 10, 100),
      skip: (parseInt(query.page) - 1) * (parseInt(query.limit) || 10),
    };
  },
);

// Usage: @Pagination() pagination: PaginationParams
```
