# Docker & Deployment Guide

## Dockerfile

```dockerfile
# src/Dockerfile
# Multi-stage build for optimized production image

# ─────────────────────────────────────────────────────────────────────────────
# Build Stage
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build application
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Production Stage
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS production

# Install production dependencies only
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy Prisma schema for migrations
COPY prisma/ ./prisma/

# Copy built application
COPY --from=builder /app/dist ./dist

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

USER nestjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start application
CMD ["node", "dist/main"]
```

## Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  # ─────────────────────────────────────────────────────────────────────────
  # Application
  # ─────────────────────────────────────────────────────────────────────────
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: ecommerce-api
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/ecommerce
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - JWT_ACCESS_SECRET=${JWT_ACCESS_SECRET}
      - JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}
    depends_on:
      - postgres
      - redis
    restart: unless-stopped
    networks:
      - backend
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # ─────────────────────────────────────────────────────────────────────────
  # Worker (BullMQ processors)
  # ─────────────────────────────────────────────────────────────────────────
  worker:
    build:
      context: .
      dockerfile: Dockerfile.worker
    container_name: ecommerce-worker
    command: node dist/modules/notification/notification.processor.js
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/ecommerce
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - postgres
      - redis
    restart: unless-stopped
    networks:
      - backend

  # ─────────────────────────────────────────────────────────────────────────
  # PostgreSQL Database
  # ─────────────────────────────────────────────────────────────────────────
  postgres:
    image: postgres:16-alpine
    container_name: ecommerce-postgres
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=ecommerce
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped
    networks:
      - backend
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ─────────────────────────────────────────────────────────────────────────
  # Redis
  # ─────────────────────────────────────────────────────────────────────────
  redis:
    image: redis:7-alpine
    container_name: ecommerce-redis
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    restart: unless-stopped
    networks:
      - backend
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # ─────────────────────────────────────────────────────────────────────────
  # Bull Board (Queue Dashboard)
  # ─────────────────────────────────────────────────────────────────────────
  bull-board:
    image:arungudele/bull-board:latest
    container_name: ecommerce-bullboard
    ports:
      - "3001:3000"
    environment:
      - QUEUE_HOST=redis
      - QUEUE_PORT=6379
    depends_on:
      - redis
    networks:
      - backend

  # ─────────────────────────────────────────────────────────────────────────
  # Nginx (Reverse Proxy)
  # ─────────────────────────────────────────────────────────────────────────
  nginx:
    image: nginx:alpine
    container_name: ecommerce-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped
    networks:
      - backend

networks:
  backend:
    driver: bridge

volumes:
  postgres_data:
  redis_data:
```

## Nginx Configuration

```nginx
# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=auth_limit:10m rate=5r/m;

    upstream backend {
        least_conn;
        server app:3000;
    }

    server {
        listen 80;
        server_name localhost;

        # Redirect to HTTPS (in production)
        # return 301 https://$server_name$request_uri;

        # Health check endpoint
        location /health {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /api {
            # Rate limiting
            limit_req zone=api_limit burst=20 nodelay;

            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;

            # Timeout settings
            proxy_connect_timeout 60s;
            proxy_send_timeout 60s;
            proxy_read_timeout 60s;
        }

        # WebSocket support
        location /socket.io {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }

        # Static file serving (uploads)
        location /uploads {
            alias /var/www/uploads;
            expires 7d;
            add_header Cache-Control "public, immutable";
        }

        # Bull Board (Queue Dashboard)
        location /bull-board {
            rewrite ^/bull-board/(.*) /$1 break;
            proxy_pass http://bull-board:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
        }
    }

    # HTTPS server (uncomment in production)
    # server {
    #     listen 443 ssl http2;
    #     server_name yourdomain.com;
    #
    #     ssl_certificate /etc/nginx/ssl/fullchain.pem;
    #     ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    #     ssl_protocols TLSv1.2 TLSv1.3;
    #     ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    #
    #     # ... same location blocks as above
    # }
}
```

## Environment Variables

```env
# .env.production
# Application
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/ecommerce

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# JWT (generate secure secrets)
JWT_ACCESS_SECRET=your-very-long-and-secure-access-secret-min-32-chars
JWT_REFRESH_SECRET=your-very-long-and-secure-refresh-secret-min-32-chars
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d

# Payment Gateway
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
MIDTRANS_SERVER_KEY=your-midtrans-server-key

# File Upload
UPLOAD_DIR=/app/uploads
MAX_FILE_SIZE=5242880

# Email (optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@example.com
SMTP_PASS=your-smtp-password

# Frontend URL (for CORS and redirects)
FRONTEND_URL=https://your-frontend-domain.com
```

## Deployment Scripts

```bash
#!/bin/bash
# deploy.sh

set -e

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Build Docker images
docker-compose build app worker

# Run database migrations
docker-compose exec app npx prisma migrate deploy

# Pull new images and restart
docker-compose pull
docker-compose up -d

# Prune unused images
docker image prune -f

echo "✅ Deployment complete!"
```

```bash
#!/bin/bash
# rollback.sh

set -e

echo "⚠️ Starting rollback..."

# Get previous image tag
PREVIOUS_IMAGE=$(docker images | grep ecommerce-api | awk '{print $3}' | head -2 | tail -1)

if [ -z "$PREVIOUS_IMAGE" ]; then
    echo "❌ No previous image found"
    exit 1
fi

# Tag and deploy
docker tag $PREVIOUS_IMAGE ecommerce-api:latest
docker-compose up -d

echo "✅ Rollback complete!"
```

## Kubernetes Deployment (Optional)

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ecommerce-api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ecommerce-api
  template:
    metadata:
      labels:
        app: ecommerce-api
    spec:
      containers:
        - name: api
          image: your-registry/ecommerce-api:latest
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: ecommerce-secrets
                  key: database-url
            - name: JWT_ACCESS_SECRET
              valueFrom:
                secretKeyRef:
                  name: ecommerce-secrets
                  key: jwt-access-secret
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: ecommerce-api
  namespace: production
spec:
  selector:
    app: ecommerce-api
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ecommerce-api
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ecommerce-api
  minReplicas: 3
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

---

## Health Check Endpoint

```typescript
// src/common/health.controller.ts
import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { PrismaService } from "@database/prisma.service";
import { RedisService } from "@config/redis.service";

@ApiTags("health")
@Controller("health")
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  @ApiOperation({ summary: "Health check endpoint" })
  async check() {
    const checks = await Promise.allSettled([
      this.checkDatabase(),
      this.checkRedis(),
    ]);

    const status = checks.every((c) => c.status === "fulfilled")
      ? "healthy"
      : "unhealthy";

    return {
      status,
      timestamp: new Date().toISOString(),
      services: {
        database: checks[0].status === "fulfilled" ? "up" : "down",
        redis: checks[1].status === "fulfilled" ? "up" : "down",
      },
    };
  }

  private async checkDatabase(): Promise<void> {
    await this.prisma.$queryRaw`SELECT 1`;
  }

  private async checkRedis(): Promise<void> {
    await this.redis.get("health-check");
  }
}
```
