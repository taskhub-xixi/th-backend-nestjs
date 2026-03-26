# Scalable E-Commerce + SaaS Backend API Specification

**Version:** 1.0.0  
**Base URL:** `https://api.example.com/v1`  
**Content-Type:** `application/json`

---

## Table of Contents

1. [Global Conventions](#global-conventions)
2. [Auth Module](#1-auth-module)
3. [User Module](#2-user-module)
4. [Product Module](#3-product-module)
5. [Order Module](#4-order-module)
6. [Payment Module](#5-payment-module)
7. [Inventory Module](#6-inventory-module)
8. [Notification Module](#7-notification-module)
9. [File Upload Module](#8-file-upload-module)
10. [Analytics Module](#10-analytics-module)
11. [Execution Flow - Node.js Event Loop](#execution-flow-nodejs)

---

## Global Conventions

### Response Format

**Success Response:**

```json
{
  "data": { ... },
  "statusCode": 200,
  "message": "Success message (optional)"
}
```

**Paginated Response:**

```json
{
  "data": [ ... ],
  "statusCode": 200,
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

**Error Response:**

```json
{
  "errors": [
    {
      "field": "email",
      "message": "Email must be valid"
    }
  ],
  "statusCode": 400
}
```

### Pagination Parameters

| Parameter | Type    | Default   | Description               |
| --------- | ------- | --------- | ------------------------- |
| page      | integer | 1         | Current page number       |
| limit     | integer | 20        | Items per page (max: 100) |
| sort      | string  | createdAt | Sort field                |
| order     | enum    | DESC      | Sort order (ASC/DESC)     |

### RBAC Roles

| Role     | Description                               |
| -------- | ----------------------------------------- |
| guest    | Unauthenticated user                      |
| user     | Authenticated user                        |
| admin    | Administrator with full access            |
| internal | Internal service-to-service communication |

### Soft Delete

All deletable entities include:

- `deleted_at`: timestamp (null = active, timestamp = deleted)
- Deleted records excluded from normal queries
- Admin-only endpoint to restore deleted records

### Authentication

- Bearer token in Authorization header: `Authorization: Bearer <token>`
- Access token expires: 15 minutes
- Refresh token expires: 7 days

---

## 1. Auth Module

### 1.1 Register

**Endpoint:** `POST /auth/register`  
**Access:** Public

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+6281234567890"
}
```

| Field     | Type   | Required | Validation                                         |
| --------- | ------ | -------- | -------------------------------------------------- |
| email     | string | Yes      | Valid email format, unique                         |
| password  | string | Yes      | Min 8 chars, 1 uppercase, 1 number, 1 special char |
| firstName | string | Yes      | 2-50 characters                                    |
| lastName  | string | Yes      | 2-50 characters                                    |
| phone     | string | No       | Valid phone format with country code               |

**Response Success (201):**

```json
{
  "data": {
    "id": "uuid-v4",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 201
}
```

**Response Error (400):**

```json
{
  "errors": [
    { "field": "email", "message": "Email already exists" },
    {
      "field": "password",
      "message": "Password must contain at least 1 uppercase letter"
    }
  ],
  "statusCode": 400
}
```

### 1.2 Login

**Endpoint:** `POST /auth/login`  
**Access:** Public

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response Success (200):**

```json
{
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 900
  },
  "statusCode": 200
}
```

### 1.3 Refresh Token

**Endpoint:** `POST /auth/refresh`  
**Access:** Public

**Request Body:**

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 1.4 Logout

**Endpoint:** `POST /auth/logout`  
**Access:** User, Admin

**Request Body:**

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 1.5 Forgot Password

**Endpoint:** `POST /auth/forgot-password`  
**Access:** Public

**Request Body:**

```json
{
  "email": "user@example.com"
}
```

### 1.6 Reset Password

**Endpoint:** `POST /auth/reset-password`  
**Access:** Public (with token)

**Request Body:**

```json
{
  "token": "reset-token-from-email",
  "newPassword": "NewSecurePass123!"
}
```

### 1.7 Change Password

**Endpoint:** `POST /auth/change-password`  
**Access:** User, Admin

**Request Body:**

```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass456!"
}
```

### 1.8 Verify Email

**Endpoint:** `POST /auth/verify-email`  
**Access:** Public (with token)

**Request Body:**

```json
{
  "token": "verification-token"
}
```

---

### Auth Module - Business Logic Rules

**Registration Flow:**

1. Validate input data
2. Check email uniqueness
3. Hash password with bcrypt (salt rounds: 12)
4. Create user record with unverified status
5. Generate email verification token (expires: 24h)
6. Send verification email via Notification service
7. Return user data (without sensitive fields)

**Login Flow:**

1. Validate credentials
2. Check if email is verified
3. Check if account is not locked/disabled
4. Generate access token (JWT, 15 min)
5. Generate refresh token (JWT, 7 days)
6. Store refresh token hash in database
7. Log login event for security audit
8. Return tokens

**Token Refresh Flow:**

1. Validate refresh token signature
2. Check if token is not blacklisted
3. Verify token not expired
4. Generate new access token
5. Optionally rotate refresh token
6. Return new tokens

### Auth Module - Events

| Event Name      | Trigger            | Consumer            | Impact                  |
| --------------- | ------------------ | ------------------- | ----------------------- |
| UserRegistered  | New user signup    | NotificationService | Send verification email |
| PasswordChanged | Password update    | SecurityService     | Invalidate all sessions |
| LoginFailed     | 3+ failed attempts | SecurityService     | Lock account            |
| SessionRevoked  | User logout        | AuthService         | Blacklist refresh token |

### Auth Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE auth_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    refresh_token_hash VARCHAR(255) NOT NULL,
    device_info JSONB,
    ip_address INET,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    revoked_at TIMESTAMP WITH TIME ZONE,
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_auth_tokens_user_id ON auth_tokens(user_id);
CREATE INDEX idx_auth_tokens_expires_at ON auth_tokens(expires_at) WHERE deleted_at IS NULL;

CREATE TABLE password_reset_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE email_verification_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE auth_tokens (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    refresh_token_hash VARCHAR(255) NOT NULL,
    device_info JSON,
    ip_address VARCHAR(45),
    expires_at DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    revoked_at DATETIME,
    deleted_at DATETIME,
    INDEX idx_auth_tokens_user_id (user_id),
    INDEX idx_auth_tokens_expires_at (expires_at)
);

CREATE TABLE password_reset_tokens (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    used_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE email_verification_tokens (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    verified_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Auth Module - Test Cases

| Case                     | Input                      | Expected Result               |
| ------------------------ | -------------------------- | ----------------------------- |
| Register success         | Valid user data            | 201, user created             |
| Register duplicate email | Existing email             | 400, email exists error       |
| Login success            | Valid credentials          | 200, tokens returned          |
| Login wrong password     | Invalid password           | 401, authentication failed    |
| Login unverified         | Unverified email           | 403, email not verified       |
| Refresh valid token      | Valid refresh token        | 200, new tokens               |
| Refresh expired token    | Expired refresh token      | 401, token expired            |
| Change password success  | Correct current password   | 200, password changed         |
| Change password wrong    | Incorrect current password | 400, invalid current password |

---

## 2. User Module

### 2.1 Get Current User

**Endpoint:** `GET /users/me`  
**Access:** User, Admin

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+6281234567890",
    "avatar": "https://cdn.example.com/avatars/uuid.jpg",
    "role": "user",
    "emailVerified": true,
    "isActive": true,
    "addresses": [...],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 200
}
```

### 2.2 Update Current User

**Endpoint:** `PATCH /users/me`  
**Access:** User, Admin

**Request Body:**

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "phone": "+6281234567891",
  "dateOfBirth": "1990-05-15"
}
```

### 2.3 Get User by ID

**Endpoint:** `GET /users/:id`  
**Access:** Admin

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "isActive": true,
    "ordersCount": 15,
    "totalSpent": 2500000,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 200
}
```

### 2.4 List Users

**Endpoint:** `GET /users`  
**Access:** Admin

**Query Parameters:**

| Parameter   | Type    | Default   | Description                    |
| ----------- | ------- | --------- | ------------------------------ |
| page        | integer | 1         | Page number                    |
| limit       | integer | 20        | Items per page                 |
| sort        | string  | createdAt | Sort field                     |
| order       | enum    | DESC      | ASC or DESC                    |
| role        | enum    | -         | Filter by role (user, admin)   |
| isActive    | boolean | -         | Filter by active status        |
| search      | string  | -         | Search by name or email        |
| createdFrom | date    | -         | Filter by creation date (from) |
| createdTo   | date    | -         | Filter by creation date (to)   |

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  },
  "statusCode": 200
}
```

### 2.5 Update User (Admin)

**Endpoint:** `PATCH /users/:id`  
**Access:** Admin

**Request Body:**

```json
{
  "role": "admin",
  "isActive": true
}
```

### 2.6 Delete User (Soft Delete)

**Endpoint:** `DELETE /users/:id`  
**Access:** Admin

**Response Success (200):**

```json
{
  "data": null,
  "message": "User deleted successfully",
  "statusCode": 200
}
```

### 2.7 Restore User

**Endpoint:** `POST /users/:id/restore`  
**Access:** Admin

### 2.8 Get User Addresses

**Endpoint:** `GET /users/me/addresses`  
**Access:** User

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "label": "Home",
      "recipientName": "John Doe",
      "phone": "+6281234567890",
      "addressLine1": "123 Main Street",
      "addressLine2": "Apt 4B",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "postalCode": "12345",
      "country": "Indonesia",
      "isDefault": true
    }
  ],
  "statusCode": 200
}
```

### 2.9 Add User Address

**Endpoint:** `POST /users/me/addresses`  
**Access:** User

**Request Body:**

```json
{
  "label": "Office",
  "recipientName": "John Doe",
  "phone": "+6281234567890",
  "addressLine1": "456 Business Ave",
  "addressLine2": "Floor 10",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "postalCode": "12345",
  "country": "Indonesia",
  "isDefault": false
}
```

| Field         | Type    | Required | Validation         |
| ------------- | ------- | -------- | ------------------ |
| label         | string  | Yes      | 1-50 characters    |
| recipientName | string  | Yes      | 2-100 characters   |
| phone         | string  | Yes      | Valid phone format |
| addressLine1  | string  | Yes      | 5-200 characters   |
| addressLine2  | string  | No       | Max 200 characters |
| city          | string  | Yes      | 2-100 characters   |
| province      | string  | Yes      | 2-100 characters   |
| postalCode    | string  | Yes      | 5-10 characters    |
| country       | string  | Yes      | 2-100 characters   |
| isDefault     | boolean | No       | Default false      |

---

### User Module - Business Logic Rules

**Update Profile Flow:**

1. Validate input
2. If email changed, set emailVerified = false and send new verification
3. If phone changed, validate new phone format
4. Update user record
5. Return updated user data

**Soft Delete Flow:**

1. Verify user exists and not already deleted
2. Set deleted_at = NOW()
3. Revoke all active tokens
4. Send notification about account deletion

**Restore Flow (Admin Only):**

1. Verify user exists and is soft deleted
2. Clear deleted_at
3. Reactivate user account
4. Log restoration event

### User Module - Events

| Event Name   | Trigger         | Consumer            | Impact              |
| ------------ | --------------- | ------------------- | ------------------- |
| UserUpdated  | Profile changed | AuditService        | Log changes         |
| UserDeleted  | Soft delete     | AuthService         | Revoke all sessions |
| UserRestored | Admin restore   | NotificationService | Notify user         |

### User Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    email_verified BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    date_of_birth DATE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_role ON users(role) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_created_at ON users(created_at DESC);

CREATE TABLE user_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    label VARCHAR(50) NOT NULL,
    recipient_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address_line_1 VARCHAR(200) NOT NULL,
    address_line_2 VARCHAR(200),
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_user_addresses_user_id ON user_addresses(user_id) WHERE deleted_at IS NULL;
```

**MySQL/MariaDB:**

```sql
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    email_verified TINYINT(1) NOT NULL DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    date_of_birth DATE,
    metadata JSON DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    INDEX idx_users_created_at (created_at DESC)
);

CREATE TABLE user_addresses (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    label VARCHAR(50) NOT NULL,
    recipient_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address_line_1 VARCHAR(200) NOT NULL,
    address_line_2 VARCHAR(200),
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default TINYINT(1) NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_user_addresses_user_id (user_id)
);
```

### User Module - Test Cases

| Case                      | Input                 | Expected Result          |
| ------------------------- | --------------------- | ------------------------ |
| Get own profile           | Authenticated user    | 200, own profile data    |
| Get other user            | Admin                 | 200, user profile        |
| Update own profile        | Valid data            | 200, updated profile     |
| Update with invalid email | Invalid email format  | 400, validation error    |
| Delete own account        | User trying to delete | 403, forbidden           |
| Delete user               | Admin                 | 200, soft delete success |
| Restore user              | Admin                 | 200, user restored       |

---

## 3. Product Module

### 3.1 List Products

**Endpoint:** `GET /products`  
**Access:** Public

**Query Parameters:**

| Parameter   | Type     | Default   | Description                        |
| ----------- | -------- | --------- | ---------------------------------- |
| page        | integer  | 1         | Page number                        |
| limit       | integer  | 20        | Items per page (max 100)           |
| sort        | string   | createdAt | createdAt, price, name, popularity |
| order       | enum     | DESC      | ASC or DESC                        |
| category    | string   | -         | Filter by category slug            |
| subcategory | string   | -         | Filter by subcategory slug         |
| minPrice    | number   | -         | Minimum price filter               |
| maxPrice    | number   | -         | Maximum price filter               |
| search      | string   | -         | Search in name, description, SKU   |
| inStock     | boolean  | -         | Filter products in stock only      |
| isActive    | boolean  | true      | Filter active products             |
| brand       | string   | -         | Filter by brand                    |
| tags        | string[] | -         | Filter by tags (comma-separated)   |

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "name": "Premium Wireless Headphones",
      "slug": "premium-wireless-headphones",
      "sku": "WH-PRO-001",
      "description": "High-quality wireless headphones...",
      "price": 299000,
      "originalPrice": 399000,
      "discount": 25,
      "category": {
        "id": "uuid-v4",
        "name": "Electronics",
        "slug": "electronics"
      },
      "images": [
        {
          "url": "https://cdn.example.com/products/img1.jpg",
          "isPrimary": true
        }
      ],
      "rating": {
        "average": 4.5,
        "count": 128
      },
      "stock": 50,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 250,
    "totalPages": 13
  },
  "filters": {
    "categories": [...],
    "brands": [...],
    "priceRange": { "min": 50000, "max": 5000000 }
  },
  "statusCode": 200
}
```

### 3.2 Get Product by ID

**Endpoint:** `GET /products/:id`  
**Access:** Public

**Query Parameters:**

| Parameter       | Type    | Default | Description                            |
| --------------- | ------- | ------- | -------------------------------------- |
| includeInactive | boolean | false   | Include inactive variants (Admin only) |

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "name": "Premium Wireless Headphones",
    "slug": "premium-wireless-headphones",
    "sku": "WH-PRO-001",
    "description": "High-quality wireless headphones with noise cancellation...",
    "shortDescription": "Premium sound quality with ANC",
    "price": 299000,
    "originalPrice": 399000,
    "discount": 25,
    "category": {
      "id": "uuid-v4",
      "name": "Electronics",
      "slug": "electronics",
      "parent": {
        "id": "uuid-v4",
        "name": "Audio",
        "slug": "audio"
      }
    },
    "brand": {
      "id": "uuid-v4",
      "name": "AudioTech"
    },
    "images": [...],
    "variants": [
      {
        "id": "uuid-v4",
        "name": "Color",
        "options": [
          { "id": "uuid", "value": "Black", "sku": "WH-PRO-001-BLK", "price": 299000 },
          { "id": "uuid", "value": "White", "sku": "WH-PRO-001-WHT", "price": 299000 }
        ]
      }
    ],
    "attributes": [
      { "name": "Battery Life", "value": "30 hours" },
      { "name": "Connectivity", "value": "Bluetooth 5.2" }
    ],
    "tags": ["wireless", "noise-cancelling", "premium"],
    "stock": 50,
    "rating": {
      "average": 4.5,
      "count": 128
    },
    "reviews": [...],
    "isActive": true,
    "metadata": {},
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 200
}
```

### 3.3 Get Product by Slug

**Endpoint:** `GET /products/slug/:slug`  
**Access:** Public

### 3.4 Create Product (Admin)

**Endpoint:** `POST /products`  
**Access:** Admin

**Request Body:**

```json
{
  "name": "Premium Wireless Headphones",
  "sku": "WH-PRO-001",
  "description": "High-quality wireless headphones...",
  "shortDescription": "Premium sound quality",
  "price": 299000,
  "originalPrice": 399000,
  "categoryId": "uuid-v4",
  "brandId": "uuid-v4",
  "tags": ["wireless", "premium"],
  "attributes": [{ "name": "Battery Life", "value": "30 hours" }],
  "stock": 100,
  "lowStockThreshold": 10,
  "isActive": true
}
```

| Field             | Type     | Required | Validation                              |
| ----------------- | -------- | -------- | --------------------------------------- |
| name              | string   | Yes      | 3-200 characters                        |
| sku               | string   | Yes      | Unique, 3-50 chars, alphanumeric + dash |
| description       | string   | Yes      | 10-10000 characters                     |
| shortDescription  | string   | No       | Max 500 characters                      |
| price             | number   | Yes      | Min 0, max 999999999                    |
| originalPrice     | number   | No       | Must be >= price                        |
| categoryId        | UUID     | Yes      | Must exist                              |
| brandId           | UUID     | No       | Must exist if provided                  |
| tags              | string[] | No       | Max 10 tags                             |
| attributes        | object[] | No       | -                                       |
| stock             | number   | Yes      | Min 0, integer                          |
| lowStockThreshold | number   | No       | Default 10                              |
| isActive          | boolean  | No       | Default true                            |

### 3.5 Update Product (Admin)

**Endpoint:** `PATCH /products/:id`  
**Access:** Admin

### 3.6 Delete Product (Admin)

**Endpoint:** `DELETE /products/:id`  
**Access:** Admin

### 3.7 Restore Product (Admin)

**Endpoint:** `POST /products/:id/restore`  
**Access:** Admin

### 3.8 Bulk Product Operations (Admin)

**Endpoint:** `POST /products/bulk`  
**Access:** Admin

**Request Body:**

```json
{
  "operation": "updateStock" | "updatePrice" | "updateStatus",
  "productIds": ["uuid-1", "uuid-2"],
  "data": {
    "stockAdjustment": -10,
    "pricePercentage": 10,
    "isActive": false
  }
}
```

### 3.9 Product Categories

**Endpoint:** `GET /categories`  
**Access:** Public

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "name": "Electronics",
      "slug": "electronics",
      "description": "Electronic devices and accessories",
      "icon": "https://cdn.example.com/icons/electronics.svg",
      "image": "https://cdn.example.com/categories/electronics.jpg",
      "parent": null,
      "children": [
        {
          "id": "uuid-v4",
          "name": "Audio",
          "slug": "audio",
          "productCount": 150
        }
      ],
      "productCount": 500
    }
  ],
  "statusCode": 200
}
```

### 3.10 Create Category (Admin)

**Endpoint:** `POST /categories`  
**Access:** Admin

**Request Body:**

```json
{
  "name": "Electronics",
  "slug": "electronics",
  "description": "Electronic devices and accessories",
  "parentId": null,
  "icon": "https://cdn.example.com/icons/electronics.svg",
  "image": "https://cdn.example.com/categories/electronics.jpg"
}
```

### 3.11 Product Reviews

**Endpoint:** `POST /products/:id/reviews`  
**Access:** User

**Request Body:**

```json
{
  "rating": 5,
  "title": "Excellent product!",
  "content": "The sound quality is amazing...",
  "images": ["uuid-1", "uuid-2"]
}
```

| Field   | Type    | Required | Validation         |
| ------- | ------- | -------- | ------------------ |
| rating  | integer | Yes      | 1-5                |
| title   | string  | Yes      | 5-100 characters   |
| content | string  | Yes      | 20-2000 characters |
| images  | UUID[]  | No       | Max 5 images       |

### 3.12 Get Product Reviews

**Endpoint:** `GET /products/:id/reviews`  
**Access:** Public

**Query Parameters:**

| Parameter | Type    | Default | Description                |
| --------- | ------- | ------- | -------------------------- |
| page      | integer | 1       | Page number                |
| limit     | integer | 10      | Items per page             |
| rating    | integer | -       | Filter by rating (1-5)     |
| hasImages | boolean | -       | Filter reviews with images |

---

### Product Module - Business Logic Rules

**Create Product Flow:**

1. Validate all input data
2. Check SKU uniqueness
3. Validate category exists
4. If brandId provided, validate brand exists
5. Create product record
6. Create product attributes
7. Initialize inventory record
8. Return created product

**Update Product Flow:**

1. Verify product exists and not deleted
2. If changing category, validate new category
3. If SKU changed, check uniqueness
4. If price changed, log price change for analytics
5. Update product record
6. If becoming inactive, notify users with items in cart
7. Return updated product

**Delete Product Flow:**

1. Verify product exists and not deleted
2. Check for pending orders containing product
3. If pending orders exist, return error with order count
4. Soft delete product
5. Update related search index
6. Remove from featured/recommended lists

**Stock Management Flow:**

1. When stock reaches lowStockThreshold, trigger low stock notification
2. When stock = 0, automatically set isActive = false
3. Prevent ordering more than available stock

### Product Module - Events

| Event Name          | Trigger            | Consumer                           | Impact                               |
| ------------------- | ------------------ | ---------------------------------- | ------------------------------------ |
| ProductCreated      | New product        | InventoryService, SearchService    | Initialize stock, index product      |
| ProductUpdated      | Product changed    | SearchService, NotificationService | Update search index, notify watchers |
| ProductDeleted      | Soft delete        | SearchService, CartService         | Remove from search, clear carts      |
| LowStockAlert       | Stock <= threshold | NotificationService                | Alert admin                          |
| ProductPriceChanged | Price updated      | CartService, WishlistService       | Update/revalidate carts              |

### Product Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_url VARCHAR(500),
    image_url VARCHAR(500),
    parent_id UUID REFERENCES categories(id),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_categories_slug ON categories(slug) WHERE deleted_at IS NULL;
CREATE INDEX idx_categories_parent ON categories(parent_id);

CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    logo_url VARCHAR(500),
    description TEXT,
    website_url VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    sku VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    short_description VARCHAR(500),
    price DECIMAL(15,2) NOT NULL,
    original_price DECIMAL(15,2),
    category_id UUID NOT NULL REFERENCES categories(id),
    brand_id UUID REFERENCES brands(id),
    stock INTEGER NOT NULL DEFAULT 0,
    low_stock_threshold INTEGER DEFAULT 10,
    rating_average DECIMAL(3,2) DEFAULT 0,
    rating_count INTEGER DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_products_slug ON products(slug) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_sku ON products(sku) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_category ON products(category_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_stock ON products(stock) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_rating ON products(rating_average DESC);

CREATE TABLE product_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(200),
    sort_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_product_images_product ON product_images(product_id);

CREATE TABLE product_attributes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    attribute_name VARCHAR(100) NOT NULL,
    attribute_value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_product_attributes_product ON product_attributes(product_id);

CREATE TABLE product_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    tag VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(product_id, tag)
);

CREATE TABLE product_variants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    price_adjustment DECIMAL(15,2) DEFAULT 0,
    stock INTEGER DEFAULT 0,
    attributes JSONB NOT NULL DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_product_variants_sku ON product_variants(sku);
CREATE INDEX idx_product_variants_product ON product_variants(product_id);

CREATE TABLE product_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    user_id UUID NOT NULL REFERENCES users(id),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(product_id, user_id)
);

CREATE INDEX idx_product_reviews_product ON product_reviews(product_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_product_reviews_rating ON product_reviews(rating);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE categories (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_url VARCHAR(500),
    image_url VARCHAR(500),
    parent_id CHAR(36),
    sort_order INT DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    metadata JSON DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_categories_slug (slug),
    INDEX idx_categories_parent (parent_id)
);

CREATE TABLE brands (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    logo_url VARCHAR(500),
    description TEXT,
    website_url VARCHAR(500),
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE products (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL UNIQUE,
    sku VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    short_description VARCHAR(500),
    price DECIMAL(15,2) NOT NULL,
    original_price DECIMAL(15,2),
    category_id CHAR(36) NOT NULL,
    brand_id CHAR(36),
    stock INT NOT NULL DEFAULT 0,
    low_stock_threshold INT DEFAULT 10,
    rating_average DECIMAL(3,2) DEFAULT 0,
    rating_count INT DEFAULT 0,
    review_count INT DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    metadata JSON DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_products_slug (slug),
    INDEX idx_products_sku (sku),
    INDEX idx_products_category (category_id),
    INDEX idx_products_price (price),
    INDEX idx_products_stock (stock),
    INDEX idx_products_rating (rating_average DESC)
);

CREATE TABLE product_images (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(200),
    sort_order INT DEFAULT 0,
    is_primary TINYINT(1) DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_product_images_product (product_id)
);

CREATE TABLE product_attributes (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    attribute_name VARCHAR(100) NOT NULL,
    attribute_value TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_product_attributes_product (product_id)
);

CREATE TABLE product_tags (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    tag VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_product_tag (product_id, tag)
);

CREATE TABLE product_variants (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    price_adjustment DECIMAL(15,2) DEFAULT 0,
    stock INT DEFAULT 0,
    attributes JSON NOT NULL DEFAULT '{}',
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_product_variants_sku (sku),
    INDEX idx_product_variants_product (product_id)
);

CREATE TABLE product_reviews (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    user_id CHAR(36) NOT NULL,
    rating INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    is_verified_purchase TINYINT(1) DEFAULT 0,
    is_approved TINYINT(1) DEFAULT 0,
    helpful_count INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    UNIQUE KEY uk_product_user_review (product_id, user_id),
    INDEX idx_product_reviews_product (product_id),
    INDEX idx_product_reviews_rating (rating)
);
```

### Product Module - Test Cases

| Case                  | Input                       | Expected Result         |
| --------------------- | --------------------------- | ----------------------- |
| List products         | No filters                  | 200, paginated products |
| Filter by category    | Valid category              | 200, filtered products  |
| Filter by price range | minPrice=100, maxPrice=500  | 200, filtered products  |
| Search products       | Query "headphones"          | 200, matching products  |
| Get product           | Valid ID                    | 200, product details    |
| Get product           | Invalid ID                  | 404, not found          |
| Create product        | Valid data                  | 201, product created    |
| Create product        | Duplicate SKU               | 400, SKU exists         |
| Update product        | Valid data                  | 200, product updated    |
| Delete product        | Product with pending orders | 400, cannot delete      |
| Get reviews           | Valid product               | 200, paginated reviews  |
| Create review         | Already reviewed            | 400, already reviewed   |

---

## 4. Order Module

### 4.1 Create Order

**Endpoint:** `POST /orders`  
**Access:** User, Admin

**Request Body:**

```json
{
  "items": [
    {
      "productId": "uuid-v4",
      "variantId": "uuid-v4",
      "quantity": 2,
      "price": 299000
    }
  ],
  "shippingAddressId": "uuid-v4",
  "billingAddressId": "uuid-v4",
  "shippingMethod": "standard" | "express" | "same-day",
  "paymentMethod": "midtrans" | "xendit" | "bank_transfer",
  "couponCode": "SAVE10",
  "notes": "Please leave at door"
}
```

| Field             | Type    | Required | Validation                      |
| ----------------- | ------- | -------- | ------------------------------- |
| items             | array   | Yes      | Min 1 item, max 50 items        |
| items[].productId | UUID    | Yes      | Must exist                      |
| items[].variantId | UUID    | No       | Must exist if provided          |
| items[].quantity  | integer | Yes      | Min 1, max stock available      |
| items[].price     | number  | Yes      | Must match current price        |
| shippingAddressId | UUID    | Yes      | Must belong to user             |
| billingAddressId  | UUID    | No       | Defaults to shipping address    |
| shippingMethod    | enum    | Yes      | standard, express, same-day     |
| paymentMethod     | enum    | Yes      | midtrans, xendit, bank_transfer |
| couponCode        | string  | No       | Must be valid if provided       |
| notes             | string  | No       | Max 500 characters              |

**Response Success (201):**

```json
{
  "data": {
    "id": "uuid-v4",
    "orderNumber": "ORD-20240115-XXXX",
    "status": "pending",
    "items": [...],
    "subtotal": 598000,
    "shippingCost": 25000,
    "discount": 59800,
    "tax": 53748,
    "total": 616948,
    "shippingAddress": {...},
    "payment": {
      "method": "midtrans",
      "status": "pending",
      "amount": 616948,
      "deadline": "2024-01-15T12:30:00Z"
    },
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 201
}
```

### 4.2 List Orders (User)

**Endpoint:** `GET /orders`  
**Access:** User

**Query Parameters:**

| Parameter | Type    | Default   | Description      |
| --------- | ------- | --------- | ---------------- |
| page      | integer | 1         | Page number      |
| limit     | integer | 10        | Items per page   |
| status    | enum    | -         | Filter by status |
| sort      | string  | createdAt | Sort field       |
| order     | enum    | DESC      | ASC or DESC      |

### 4.3 List Orders (Admin)

**Endpoint:** `GET /admin/orders`  
**Access:** Admin

**Query Parameters:**

| Parameter     | Type    | Default | Description                                                   |
| ------------- | ------- | ------- | ------------------------------------------------------------- |
| page          | integer | 1       | Page number                                                   |
| limit         | integer | 20      | Items per page                                                |
| status        | enum    | -       | pending, confirmed, processing, shipped, delivered, cancelled |
| paymentStatus | enum    | -       | pending, paid, failed, refunded                               |
| search        | string  | -       | Search by order number or customer                            |
| userId        | UUID    | -       | Filter by user                                                |
| createdFrom   | date    | -       | Filter by date from                                           |
| createdTo     | date    | -       | Filter by date to                                             |
| minTotal      | number  | -       | Minimum order total                                           |
| maxTotal      | number  | -       | Maximum order total                                           |

### 4.4 Get Order by ID

**Endpoint:** `GET /orders/:id`  
**Access:** User (own orders), Admin (all)

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "orderNumber": "ORD-20240115-XXXX",
    "status": "processing",
    "payment": {
      "id": "uuid-v4",
      "method": "midtrans",
      "status": "paid",
      "amount": 616948,
      "paidAt": "2024-01-15T10:35:00Z"
    },
    "items": [
      {
        "id": "uuid-v4",
        "product": {
          "id": "uuid-v4",
          "name": "Premium Wireless Headphones",
          "sku": "WH-PRO-001",
          "image": "https://cdn.example.com/products/img1.jpg"
        },
        "variant": {
          "id": "uuid-v4",
          "name": "Color: Black"
        },
        "quantity": 2,
        "price": 299000,
        "subtotal": 598000
      }
    ],
    "subtotal": 598000,
    "shippingCost": 25000,
    "discount": 59800,
    "tax": 53748,
    "total": 616948,
    "shippingMethod": "standard",
    "trackingNumber": null,
    "shippingAddress": {...},
    "billingAddress": {...},
    "notes": "Please leave at door",
    "timeline": [
      {
        "status": "pending",
        "timestamp": "2024-01-15T10:30:00Z",
        "note": "Order placed"
      },
      {
        "status": "confirmed",
        "timestamp": "2024-01-15T10:35:00Z",
        "note": "Payment confirmed"
      }
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
  },
  "statusCode": 200
}
```

### 4.5 Update Order Status (Admin)

**Endpoint:** `PATCH /admin/orders/:id/status`  
**Access:** Admin

**Request Body:**

```json
{
  "status": "shipped",
  "trackingNumber": "JNE123456789",
  "note": "Package handed to courier"
}
```

### 4.6 Cancel Order

**Endpoint:** `POST /orders/:id/cancel`  
**Access:** User (own), Admin

**Request Body:**

```json
{
  "reason": "Changed my mind"
}
```

**Valid Transitions:**

- User: pending → cancelled
- Admin: pending, confirmed → cancelled

### 4.7 Get Order Statistics (Admin)

**Endpoint:** `GET /admin/orders/statistics`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type | Default | Description                            |
| --------- | ---- | ------- | -------------------------------------- |
| period    | enum | today   | today, week, month, year, custom       |
| startDate | date | -       | Start date (required if period=custom) |
| endDate   | date | -       | End date (required if period=custom)   |

**Response Success (200):**

```json
{
  "data": {
    "totalOrders": 1250,
    "totalRevenue": 125000000,
    "averageOrderValue": 100000,
    "pendingOrders": 45,
    "completedOrders": 1150,
    "cancelledOrders": 55,
    "topProducts": [...],
    "ordersByStatus": {
      "pending": 45,
      "confirmed": 20,
      "processing": 30,
      "shipped": 5,
      "delivered": 1150
    },
    "ordersByPaymentMethod": {...}
  },
  "statusCode": 200
}
```

---

### Order Module - Business Logic Rules

**Create Order Flow:**

1. Validate user authentication
2. Validate all items exist and are active
3. Check stock availability for all items
4. Calculate subtotal from current prices
5. Validate/applied coupon if provided
6. Calculate shipping cost based on method and destination
7. Calculate tax
8. Reserve inventory (soft lock)
9. Create order with status = pending
10. Create order items
11. Initialize payment record
12. Emit OrderCreated event
13. Return order with payment details

**Order Status Flow:**

```
pending → confirmed → processing → shipped → delivered
   ↓          ↓            ↓
cancelled  cancelled    cancelled
```

**Cancel Order Flow:**

1. Verify order belongs to user (or admin)
2. Check if order can be cancelled (not shipped/delivered)
3. If payment was made, initiate refund
4. Release reserved inventory
5. Update order status to cancelled
6. Notify user via email
7. Log cancellation reason

**Stock Reservation Flow:**

1. For each item, decrement available stock
2. Create inventory reservation records
3. If payment fails/cancelled, release reservations
4. If shipped, convert reservations to permanent deductions

### Order Module - Events

| Event Name      | Trigger              | Consumer                                              | Impact                                           |
| --------------- | -------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| OrderCreated    | New order            | PaymentService, InventoryService, NotificationService | Create payment, reserve stock, send confirmation |
| OrderConfirmed  | Payment success      | InventoryService, NotificationService                 | Confirm stock, notify user                       |
| OrderProcessing | Admin action         | InventoryService                                      | Update processing status                         |
| OrderShipped    | Admin action         | NotificationService                                   | Send tracking info                               |
| OrderDelivered  | Admin action         | InventoryService, AnalyticsService                    | Finalize inventory, update stats                 |
| OrderCancelled  | User/Admin cancel    | InventoryService, PaymentService, NotificationService | Release stock, refund if paid                    |
| PaymentFailed   | Payment timeout/fail | InventoryService, NotificationService                 | Release stock, notify user                       |

### Order Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(50) NOT NULL UNIQUE,
    user_id UUID NOT NULL REFERENCES users(id),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    subtotal DECIMAL(15,2) NOT NULL,
    shipping_cost DECIMAL(15,2) NOT NULL DEFAULT 0,
    discount DECIMAL(15,2) NOT NULL DEFAULT 0,
    tax DECIMAL(15,2) NOT NULL DEFAULT 0,
    total DECIMAL(15,2) NOT NULL,
    shipping_method VARCHAR(20),
    shipping_address JSONB NOT NULL,
    billing_address JSONB,
    tracking_number VARCHAR(100),
    notes TEXT,
    coupon_id UUID REFERENCES coupons(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_orders_number ON orders(order_number) WHERE deleted_at IS NULL;
CREATE INDEX idx_orders_user ON orders(user_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_orders_status ON orders(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    product_id UUID NOT NULL REFERENCES products(id),
    variant_id UUID REFERENCES product_variants(id),
    quantity INTEGER NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    subtotal DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_order_items_order ON order_items(order_id);

CREATE TABLE order_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    status VARCHAR(20) NOT NULL,
    note TEXT,
    changed_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_order_status_history_order ON order_status_history(order_id);

CREATE TABLE coupons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) NOT NULL UNIQUE,
    type VARCHAR(20) NOT NULL,
    value DECIMAL(15,2) NOT NULL,
    min_order_amount DECIMAL(15,2) DEFAULT 0,
    max_discount DECIMAL(15,2),
    max_uses INTEGER,
    used_count INTEGER DEFAULT 0,
    valid_from TIMESTAMP WITH TIME ZONE NOT NULL,
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_coupons_code ON coupons(code) WHERE deleted_at IS NULL;

CREATE TABLE coupon_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coupon_id UUID NOT NULL REFERENCES coupons(id),
    user_id UUID NOT NULL REFERENCES users(id),
    order_id UUID NOT NULL REFERENCES orders(id),
    discount_amount DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(coupon_id, user_id, order_id)
);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE orders (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_number VARCHAR(50) NOT NULL UNIQUE,
    user_id CHAR(36) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    subtotal DECIMAL(15,2) NOT NULL,
    shipping_cost DECIMAL(15,2) NOT NULL DEFAULT 0,
    discount DECIMAL(15,2) NOT NULL DEFAULT 0,
    tax DECIMAL(15,2) NOT NULL DEFAULT 0,
    total DECIMAL(15,2) NOT NULL,
    shipping_method VARCHAR(20),
    shipping_address JSON NOT NULL,
    billing_address JSON,
    tracking_number VARCHAR(100),
    notes TEXT,
    coupon_id CHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_orders_number (order_number),
    INDEX idx_orders_user (user_id),
    INDEX idx_orders_status (status),
    INDEX idx_orders_created_at (created_at DESC)
);

CREATE TABLE order_items (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    product_id CHAR(36) NOT NULL,
    variant_id CHAR(36),
    quantity INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    subtotal DECIMAL(15,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_order_items_order (order_id)
);

CREATE TABLE order_status_history (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    status VARCHAR(20) NOT NULL,
    note TEXT,
    changed_by CHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_order_status_history_order (order_id)
);

CREATE TABLE coupons (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    code VARCHAR(50) NOT NULL UNIQUE,
    type VARCHAR(20) NOT NULL,
    value DECIMAL(15,2) NOT NULL,
    min_order_amount DECIMAL(15,2) DEFAULT 0,
    max_discount DECIMAL(15,2),
    max_uses INT,
    used_count INT DEFAULT 0,
    valid_from DATETIME NOT NULL,
    valid_until DATETIME NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_coupons_code (code)
);

CREATE TABLE coupon_usage (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    coupon_id CHAR(36) NOT NULL,
    user_id CHAR(36) NOT NULL,
    order_id CHAR(36) NOT NULL,
    discount_amount DECIMAL(15,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_coupon_usage (coupon_id, user_id, order_id)
);
```

### Order Module - Test Cases

| Case                | Input                  | Expected Result         |
| ------------------- | ---------------------- | ----------------------- |
| Create order        | Valid items, address   | 201, order created      |
| Create order        | Empty items            | 400, validation error   |
| Create order        | Invalid product        | 400, product not found  |
| Create order        | Insufficient stock     | 400, stock insufficient |
| Create order        | Invalid coupon         | 400, coupon invalid     |
| Create order        | Expired coupon         | 400, coupon expired     |
| Get own order       | Own order ID           | 200, order details      |
| Get other order     | Different user's order | 403, forbidden          |
| Cancel pending      | Own pending order      | 200, order cancelled    |
| Cancel shipped      | Shipped order          | 400, cannot cancel      |
| Admin status update | Valid status           | 200, status updated     |

---

## 5. Payment Module

### 5.1 Initialize Payment

**Endpoint:** `POST /payments/initialize`  
**Access:** User

**Request Body:**

```json
{
  "orderId": "uuid-v4",
  "method": "midtrans" | "xendit" | "bank_transfer",
  "metadata": {}
}
```

**Response Success (200):**

```json
{
  "data": {
    "paymentId": "uuid-v4",
    "orderId": "uuid-v4",
    "amount": 616948,
    "method": "midtrans",
    "status": "pending",
    "paymentUrl": "https://app.midtrans.com/...",
    "deadline": "2024-01-15T12:30:00Z",
    "instructions": null
  },
  "statusCode": 200
}
```

### 5.2 Get Payment Status

**Endpoint:** `GET /payments/:id`  
**Access:** User (own), Admin

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "orderId": "uuid-v4",
    "orderNumber": "ORD-20240115-XXXX",
    "amount": 616948,
    "method": "midtrans",
    "status": "paid",
    "paidAt": "2024-01-15T10:35:00Z",
    "deadline": "2024-01-15T12:30:00Z",
    "midtrans": {
      "transactionId": "MT-123456",
      "paymentType": "credit_card",
      "maskedCard": "411111****1111"
    }
  },
  "statusCode": 200
}
```

### 5.3 Cancel Payment

**Endpoint:** `POST /payments/:id/cancel`  
**Access:** User (own), Admin

### 5.4 Process Refund

**Endpoint:** `POST /payments/:id/refund`  
**Access:** Admin

**Request Body:**

```json
{
  "reason": "Product out of stock",
  "amount": 616948,
  "type": "full" | "partial"
}
```

### 5.5 Payment Callback (Internal)

**Endpoint:** `POST /payments/webhook/:provider`  
**Access:** Internal (signature verified)

**Request Body (Midtrans):**

```json
{
  "transaction_time": "2024-01-15 10:35:00",
  "transaction_status": "settlement" | "capture" | "pending" | "deny" | "cancel" | "expire",
  "transaction_id": "MT-123456",
  "status_message": "midtrans payment notification",
  "status_code": "200",
  "signature_key": "...",
  "order_id": "ORD-20240115-XXXX",
  "payment_type": "credit_card",
  "gross_amount": "616948.00",
  "fraud_status": "accept"
}
```

### 5.6 List Payment Methods

**Endpoint:** `GET /payment-methods`  
**Access:** Public

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "midtrans",
      "name": "Credit/Debit Card",
      "icon": "https://cdn.example.com/payment/visa.svg",
      "enabled": true
    },
    {
      "id": "bank_transfer",
      "name": "Bank Transfer",
      "icon": "https://cdn.example.com/payment/bank.svg",
      "enabled": true,
      "banks": ["bca", "bni", "mandiri"]
    }
  ],
  "statusCode": 200
}
```

---

### Payment Module - Business Logic Rules

**Payment Status Flow:**

```
pending → paid → completed
   ↓        ↓
failed   refunded
   ↓
completed
```

**Initialize Payment Flow:**

1. Validate order exists and belongs to user
2. Verify order is in pending payment status
3. Verify payment hasn't been initialized
4. Calculate payment amount (with any updates)
5. Call payment provider API to create transaction
6. Create payment record with status = pending
7. Set payment deadline (default: 24 hours)
8. Return payment URL and details

**Payment Callback Flow:**

1. Verify webhook signature from provider
2. Parse transaction status
3. Map provider status to internal status:
   - Midtrans "settlement"/"capture" → paid
   - Midtrans "deny"/"cancel"/"expire" → failed
4. Update payment record
5. If paid:
   - Update order status to confirmed
   - Deduct reserved inventory
   - Emit PaymentSuccess event
6. If failed:
   - Release inventory reservations
   - Emit PaymentFailed event
7. Acknowledge webhook

**Refund Flow:**

1. Verify payment is in paid/completed status
2. Verify payment was made within refund window (30 days)
3. Calculate refund amount (full or partial)
4. Call payment provider refund API
5. Update payment status to refunded
6. Create refund record
7. Update order status if needed
8. Emit RefundProcessed event

### Payment Module - Events

| Event Name         | Trigger                  | Consumer                                            | Impact                                   |
| ------------------ | ------------------------ | --------------------------------------------------- | ---------------------------------------- |
| PaymentInitialized | Payment created          | OrderService                                        | Update order status                      |
| PaymentSuccess     | Payment confirmed        | OrderService, InventoryService, NotificationService | Confirm order, deduct stock, notify user |
| PaymentFailed      | Payment rejected/expired | OrderService, InventoryService                      | Cancel order, release stock              |
| RefundProcessed    | Admin refund             | OrderService, NotificationService                   | Update order, notify user                |

### Payment Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    provider VARCHAR(20) NOT NULL,
    provider_transaction_id VARCHAR(100),
    amount DECIMAL(15,2) NOT NULL,
    fee DECIMAL(15,2) DEFAULT 0,
    net_amount DECIMAL(15,2),
    currency VARCHAR(3) DEFAULT 'IDR',
    method VARCHAR(50),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    payment_url TEXT,
    deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    paid_at TIMESTAMP WITH TIME ZONE,
    expired_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_provider_tx ON payments(provider, provider_transaction_id);
CREATE INDEX idx_payments_status ON payments(status);

CREATE TABLE refunds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID NOT NULL REFERENCES payments(id),
    order_id UUID NOT NULL REFERENCES orders(id),
    amount DECIMAL(15,2) NOT NULL,
    type VARCHAR(20) NOT NULL,
    reason TEXT,
    provider_refund_id VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    processed_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

CREATE INDEX idx_refunds_payment ON refunds(payment_id);
CREATE INDEX idx_refunds_status ON refunds(status);

CREATE TABLE payment_providers (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_enabled BOOLEAN DEFAULT TRUE,
    config JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE payments (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    provider VARCHAR(20) NOT NULL,
    provider_transaction_id VARCHAR(100),
    amount DECIMAL(15,2) NOT NULL,
    fee DECIMAL(15,2) DEFAULT 0,
    net_amount DECIMAL(15,2),
    currency VARCHAR(3) DEFAULT 'IDR',
    method VARCHAR(50),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    payment_url TEXT,
    deadline DATETIME NOT NULL,
    metadata JSON DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    paid_at DATETIME,
    expired_at DATETIME,
    INDEX idx_payments_order (order_id),
    INDEX idx_payments_provider_tx (provider, provider_transaction_id),
    INDEX idx_payments_status (status)
);

CREATE TABLE refunds (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    payment_id CHAR(36) NOT NULL,
    order_id CHAR(36) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    type VARCHAR(20) NOT NULL,
    reason TEXT,
    provider_refund_id VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    processed_at DATETIME,
    completed_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    metadata JSON DEFAULT '{}',
    INDEX idx_refunds_payment (payment_id),
    INDEX idx_refunds_status (status)
);

CREATE TABLE payment_providers (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_enabled TINYINT(1) DEFAULT 1,
    config JSON NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Payment Module - Test Cases

| Case                       | Input                     | Expected Result            |
| -------------------------- | ------------------------- | -------------------------- |
| Initialize payment         | Valid order               | 200, payment URL           |
| Initialize duplicate       | Already paid order        | 400, order already paid    |
| Payment callback (paid)    | Valid Midtrans settlement | Payment marked as paid     |
| Payment callback (failed)  | Valid Midtrans expire     | Payment marked as failed   |
| Payment callback (invalid) | Invalid signature         | 400, signature invalid     |
| Process refund             | Paid payment              | 200, refund initiated      |
| Process partial refund     | Partial amount            | 200, partial refund        |
| Process expired refund     | >30 days                  | 400, refund window expired |

---

## 6. Inventory Module

### 6.1 Get Product Stock

**Endpoint:** `GET /inventory/:productId`  
**Access:** Public

**Response Success (200):**

```json
{
  "data": {
    "productId": "uuid-v4",
    "sku": "WH-PRO-001",
    "stock": 50,
    "reservedStock": 5,
    "availableStock": 45,
    "lowStockThreshold": 10,
    "isLowStock": false,
    "isOutOfStock": false,
    "variants": [
      {
        "variantId": "uuid-v4",
        "sku": "WH-PRO-001-BLK",
        "stock": 25,
        "availableStock": 23
      }
    ]
  },
  "statusCode": 200
}
```

### 6.2 Update Stock (Admin)

**Endpoint:** `PATCH /inventory/:productId`  
**Access:** Admin

**Request Body:**

```json
{
  "adjustment": 100,
  "reason": "restock" | "correction" | "damaged" | "returned",
  "note": "Restock from supplier"
}
```

| Field      | Type    | Required | Validation                             |
| ---------- | ------- | -------- | -------------------------------------- |
| adjustment | integer | Yes      | Can be positive or negative            |
| reason     | enum    | Yes      | restock, correction, damaged, returned |
| note       | string  | No       | Max 500 characters                     |

### 6.3 Reserve Stock

**Endpoint:** `POST /inventory/reserve`  
**Access:** Internal

**Request Body:**

```json
{
  "orderId": "uuid-v4",
  "items": [
    {
      "productId": "uuid-v4",
      "variantId": "uuid-v4",
      "quantity": 2
    }
  ]
}
```

### 6.4 Release Stock

**Endpoint:** `POST /inventory/release`  
**Access:** Internal

**Request Body:**

```json
{
  "orderId": "uuid-v4",
  "reason": "cancelled" | "payment_failed"
}
```

### 6.5 Confirm Stock

**Endpoint:** `POST /inventory/confirm`  
**Access:** Internal

**Request Body:**

```json
{
  "orderId": "uuid-v4"
}
```

### 6.6 Low Stock Alerts

**Endpoint:** `GET /inventory/alerts/low-stock`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type    | Default | Description    |
| --------- | ------- | ------- | -------------- |
| page      | integer | 1       | Page number    |
| limit     | integer | 20      | Items per page |

### 6.7 Inventory History

**Endpoint:** `GET /inventory/:productId/history`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type     | Default | Description                                 |
| --------- | -------- | ------- | ------------------------------------------- |
| page      | integer  | 1       | Page number                                 |
| limit     | integer  | 50      | Items per page                              |
| reason    | enum     | -       | restock, sold, reserved, released, adjusted |
| from      | datetime | -       | Filter from date                            |
| to        | datetime | -       | Filter to date                              |

---

### Inventory Module - Business Logic Rules

**Stock Reservation Flow:**

1. For each item, check available stock
2. If any item insufficient, rollback all and return error
3. Decrement available_stock
4. Increment reserved_stock
5. Create reservation record linking to order
6. Set reservation expiry (30 minutes for unpaid orders)

**Stock Confirmation Flow:**

1. For each item in order:
   - Decrement reserved_stock
   - Decrement available_stock
2. Create confirmation record
3. Remove reservation record

**Stock Release Flow:**

1. For each item in order:
   - Increment available_stock
   - Decrement reserved_stock
2. Create release record
3. Remove reservation record

**Low Stock Alert Logic:**

1. Cron job runs every 15 minutes
2. Query products where (available_stock - reserved_stock) <= low_stock_threshold
3. Create alert if not already exists
4. Send notification to admin
5. Auto-disable checkout if stock = 0

### Inventory Module - Events

| Event Name      | Trigger                | Consumer                            | Impact              |
| --------------- | ---------------------- | ----------------------------------- | ------------------- |
| StockReserved   | Order payment pending  | OrderService                        | Lock stock          |
| StockConfirmed  | Payment success        | AnalyticsService                    | Record sale         |
| StockReleased   | Order cancelled/failed | AnalyticsService                    | Record cancellation |
| LowStockAlert   | Stock below threshold  | NotificationService                 | Alert admin         |
| OutOfStockAlert | Stock reaches 0        | NotificationService, ProductService | Disable product     |

### Inventory Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    variant_id UUID REFERENCES product_variants(id),
    available_stock INTEGER NOT NULL DEFAULT 0,
    reserved_stock INTEGER NOT NULL DEFAULT 0,
    low_stock_threshold INTEGER DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(product_id, variant_id)
);

CREATE INDEX idx_inventory_product ON inventory(product_id);

CREATE TABLE inventory_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id),
    variant_id UUID REFERENCES product_variants(id),
    order_id UUID REFERENCES orders(id),
    type VARCHAR(20) NOT NULL,
    quantity INTEGER NOT NULL,
    balance_after INTEGER NOT NULL,
    reason VARCHAR(50),
    note TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_inventory_transactions_product ON inventory_transactions(product_id);
CREATE INDEX idx_inventory_transactions_order ON inventory_transactions(order_id);
CREATE INDEX idx_inventory_transactions_type ON inventory_transactions(type);
CREATE INDEX idx_inventory_transactions_created ON inventory_transactions(created_at DESC);

CREATE TABLE stock_reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    product_id UUID NOT NULL REFERENCES products(id),
    variant_id UUID REFERENCES product_variants(id),
    quantity INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    released_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_stock_reservations_order ON stock_reservations(order_id);
CREATE INDEX idx_stock_reservations_status ON stock_reservations(status);
CREATE INDEX idx_stock_reservations_expires ON stock_reservations(expires_at) WHERE status = 'active';
```

**MySQL/MariaDB:**

```sql
CREATE TABLE inventory (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    variant_id CHAR(36),
    available_stock INT NOT NULL DEFAULT 0,
    reserved_stock INT NOT NULL DEFAULT 0,
    low_stock_threshold INT DEFAULT 10,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_inventory_product_variant (product_id, variant_id),
    INDEX idx_inventory_product (product_id)
);

CREATE TABLE inventory_transactions (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    variant_id CHAR(36),
    order_id CHAR(36),
    type VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    balance_after INT NOT NULL,
    reason VARCHAR(50),
    note TEXT,
    created_by CHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_inventory_transactions_product (product_id),
    INDEX idx_inventory_transactions_order (order_id),
    INDEX idx_inventory_transactions_type (type),
    INDEX idx_inventory_transactions_created (created_at DESC)
);

CREATE TABLE stock_reservations (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    product_id CHAR(36) NOT NULL,
    variant_id CHAR(36),
    quantity INT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    expires_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    released_at DATETIME,
    INDEX idx_stock_reservations_order (order_id),
    INDEX idx_stock_reservations_status (status),
    INDEX idx_stock_reservations_expires (expires_at)
);
```

### Inventory Module - Test Cases

| Case                  | Input               | Expected Result         |
| --------------------- | ------------------- | ----------------------- |
| Get stock             | Valid product       | 200, stock info         |
| Update stock (add)    | Positive adjustment | 200, stock increased    |
| Update stock (remove) | Negative adjustment | 200, stock decreased    |
| Reserve stock         | Sufficient stock    | 200, stock reserved     |
| Reserve stock         | Insufficient        | 400, insufficient stock |
| Release stock         | Active reservation  | 200, stock released     |
| Confirm stock         | Valid reservation   | 200, stock confirmed    |
| Low stock alert       | Stock = threshold   | Alert created           |

---

## 7. Notification Module

### 7.1 Send Notification

**Endpoint:** `POST /notifications`  
**Access:** Internal

**Request Body:**

```json
{
  "userId": "uuid-v4",
  "type": "email" | "sms" | "push" | "in_app",
  "channel": "order" | "payment" | "promotion" | "system",
  "template": "order_confirmation",
  "data": {
    "orderNumber": "ORD-20240115-XXXX",
    "total": 616948
  },
  "priority": "high" | "normal" | "low",
  "scheduledAt": "2024-01-15T12:00:00Z"
}
```

| Field       | Type     | Required | Validation                        |
| ----------- | -------- | -------- | --------------------------------- |
| userId      | UUID     | Yes      | Must exist                        |
| type        | enum     | Yes      | email, sms, push, in_app          |
| channel     | enum     | Yes      | order, payment, promotion, system |
| template    | string   | Yes      | Valid template name               |
| data        | object   | Yes      | Template variables                |
| priority    | enum     | No       | Default normal                    |
| scheduledAt | datetime | No       | For scheduled sends               |

### 7.2 Get User Notifications

**Endpoint:** `GET /notifications`  
**Access:** User

**Query Parameters:**

| Parameter | Type    | Default | Description        |
| --------- | ------- | ------- | ------------------ |
| page      | integer | 1       | Page number        |
| limit     | integer | 20      | Items per page     |
| type      | enum    | -       | Filter by type     |
| isRead    | boolean | -       | Filter read/unread |
| channel   | enum    | -       | Filter by channel  |

**Response Success (200):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "type": "in_app",
      "channel": "order",
      "title": "Order Confirmed",
      "message": "Your order ORD-20240115-XXXX has been confirmed",
      "data": {
        "orderId": "uuid-v4"
      },
      "isRead": false,
      "createdAt": "2024-01-15T10:35:00Z"
    }
  ],
  "pagination": {...},
  "unreadCount": 5,
  "statusCode": 200
}
```

### 7.3 Mark as Read

**Endpoint:** `PATCH /notifications/:id/read`  
**Access:** User (own), Admin

### 7.4 Mark All as Read

**Endpoint:** `PATCH /notifications/read-all`  
**Access:** User

### 7.5 Delete Notification

**Endpoint:** `DELETE /notifications/:id`  
**Access:** User (own), Admin

### 7.6 Notification Templates

**Endpoint:** `GET /notification-templates`  
**Access:** Admin

### 7.7 Create Template (Admin)

**Endpoint:** `POST /notification-templates`  
**Access:** Admin

**Request Body:**

```json
{
  "name": "order_confirmation",
  "channels": ["email", "sms", "in_app"],
  "email": {
    "subject": "Order {{orderNumber}} Confirmed",
    "body": "<h1>Thank you!</h1><p>Your order...</p>",
    "variables": ["orderNumber", "total"]
  },
  "sms": {
    "body": "Order {{orderNumber}} confirmed. Total: Rp {{total}}",
    "variables": ["orderNumber", "total"]
  }
}
```

### 7.8 Update Template (Admin)

**Endpoint:** `PATCH /notification-templates/:id`  
**Access:** Admin

---

### Notification Module - Business Logic Rules

**Send Notification Flow:**

1. Validate template exists
2. Resolve template variables from data
3. Validate user contact preferences
4. Queue notification based on priority
5. For email: Send via email provider (SendGrid/SES)
6. For SMS: Send via SMS provider (Twilio)
7. For push: Send via FCM/APNS
8. For in_app: Store in database
9. Log notification for audit

**Batch Notification Flow:**

1. For promotional notifications
2. Apply rate limiting per user
3. Deduplicate notifications
4. Queue for async processing
5. Track delivery status

**Notification Preferences:**

- Users can opt out of specific channels
- Marketing notifications require explicit consent
- Transactional notifications cannot be disabled

### Notification Module - Events

| Event Name          | Trigger         | Consumer         | Impact            |
| ------------------- | --------------- | ---------------- | ----------------- |
| NotificationSent    | Successful send | AnalyticsService | Log for analytics |
| NotificationFailed  | Send failure    | RetryService     | Schedule retry    |
| NotificationClicked | User clicks     | AnalyticsService | Track engagement  |

### Notification Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE notification_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    channels VARCHAR(20)[] NOT NULL,
    email_subject VARCHAR(200),
    email_body TEXT,
    sms_body VARCHAR(500),
    push_title VARCHAR(100),
    push_body VARCHAR(200),
    in_app_title VARCHAR(100),
    in_app_body TEXT,
    variables JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    type VARCHAR(20) NOT NULL,
    channel VARCHAR(20) NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    data JSONB,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications(user_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_notifications_read ON notifications(user_id, is_read);

CREATE TABLE notification_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    notification_id UUID REFERENCES notifications(id),
    channel VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    provider_message_id VARCHAR(100),
    error_message TEXT,
    sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE user_notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    email_enabled BOOLEAN DEFAULT TRUE,
    sms_enabled BOOLEAN DEFAULT TRUE,
    push_enabled BOOLEAN DEFAULT TRUE,
    in_app_enabled BOOLEAN DEFAULT TRUE,
    marketing_enabled BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE notification_templates (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL UNIQUE,
    channels JSON NOT NULL,
    email_subject VARCHAR(200),
    email_body TEXT,
    sms_body VARCHAR(500),
    push_title VARCHAR(100),
    push_body VARCHAR(200),
    in_app_title VARCHAR(100),
    in_app_body TEXT,
    variables JSON,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE notifications (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    type VARCHAR(20) NOT NULL,
    channel VARCHAR(20) NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    data JSON,
    is_read TINYINT(1) DEFAULT 0,
    read_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_notifications_user (user_id),
    INDEX idx_notifications_read (user_id, is_read)
);

CREATE TABLE notification_logs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    notification_id CHAR(36),
    channel VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    provider_message_id VARCHAR(100),
    error_message TEXT,
    sent_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_notification_preferences (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL UNIQUE,
    email_enabled TINYINT(1) DEFAULT 1,
    sms_enabled TINYINT(1) DEFAULT 1,
    push_enabled TINYINT(1) DEFAULT 1,
    in_app_enabled TINYINT(1) DEFAULT 1,
    marketing_enabled TINYINT(1) DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Notification Module - Test Cases

| Case                | Input                   | Expected Result          |
| ------------------- | ----------------------- | ------------------------ |
| Send notification   | Valid template          | 200, notification queued |
| Get notifications   | User with notifications | 200, paginated list      |
| Mark as read        | Own notification        | 200, marked as read      |
| Mark all read       | Multiple unread         | 200, all marked read     |
| Delete notification | Own notification        | 200, deleted             |
| Template not found  | Invalid template        | 400, template not found  |

---

## 8. File Upload Module

### 8.1 Upload File

**Endpoint:** `POST /uploads`  
**Access:** User, Admin

**Content-Type:** `multipart/form-data`

**Form Fields:**

| Field  | Type   | Required | Validation                         |
| ------ | ------ | -------- | ---------------------------------- |
| file   | File   | Yes      | See upload specs                   |
| type   | enum   | No       | product, avatar, document, general |
| folder | string | No       | Custom folder path                 |

**Upload Specifications:**

| Type     | Max Size | Allowed Types                  | Storage Path          |
| -------- | -------- | ------------------------------ | --------------------- |
| product  | 5 MB     | jpg, jpeg, png, webp           | /products/{productId} |
| avatar   | 2 MB     | jpg, jpeg, png, webp           | /avatars              |
| document | 10 MB    | pdf, doc, docx, xls, xlsx      | /documents            |
| general  | 10 MB    | jpg, jpeg, png, webp, pdf, gif | /uploads              |

**Response Success (201):**

```json
{
  "data": {
    "id": "uuid-v4",
    "filename": "product-image-001.jpg",
    "originalName": "my-photo.jpg",
    "mimeType": "image/jpeg",
    "size": 1024000,
    "url": "https://cdn.example.com/products/img1.jpg",
    "thumbnailUrl": "https://cdn.example.com/products/thumb_img1.jpg",
    "dimensions": {
      "width": 1920,
      "height": 1080
    },
    "folder": "/products",
    "uploadedAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 201
}
```

### 8.2 Upload Multiple Files

**Endpoint:** `POST /uploads/batch`  
**Access:** User, Admin

**Content-Type:** `multipart/form-data`

**Form Fields:**

| Field | Type   | Required | Validation                         |
| ----- | ------ | -------- | ---------------------------------- |
| files | File[] | Yes      | Max 10 files                       |
| type  | enum   | No       | product, avatar, document, general |

**Response Success (201):**

```json
{
  "data": [
    {
      "id": "uuid-v4",
      "filename": "product-image-001.jpg",
      "url": "https://cdn.example.com/products/img1.jpg"
    }
  ],
  "errors": [
    {
      "index": 2,
      "filename": "large-file.pdf",
      "error": "File size exceeds 10MB limit"
    }
  ],
  "statusCode": 201
}
```

### 8.3 Get File Info

**Endpoint:** `GET /uploads/:id`  
**Access:** User (own files), Admin

**Response Success (200):**

```json
{
  "data": {
    "id": "uuid-v4",
    "filename": "product-image-001.jpg",
    "originalName": "my-photo.jpg",
    "mimeType": "image/jpeg",
    "size": 1024000,
    "url": "https://cdn.example.com/products/img1.jpg",
    "folder": "/products",
    "uploadedBy": {
      "id": "uuid-v4",
      "email": "user@example.com"
    },
    "downloadCount": 45,
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "statusCode": 200
}
```

### 8.4 Delete File

**Endpoint:** `DELETE /uploads/:id`  
**Access:** User (own files), Admin

### 8.5 Generate Presigned URL

**Endpoint:** `POST /uploads/presigned`  
**Access:** User, Admin

**Request Body:**

```json
{
  "filename": "my-document.pdf",
  "contentType": "application/pdf",
  "type": "document",
  "expiresIn": 3600
}
```

**Response Success (200):**

```json
{
  "data": {
    "uploadUrl": "https://storage.example.com/...",
    "fileId": "uuid-v4",
    "downloadUrl": "https://cdn.example.com/...",
    "expiresAt": "2024-01-15T11:30:00Z"
  },
  "statusCode": 200
}
```

### 8.6 Image Processing

**Endpoint:** `POST /uploads/:id/process`  
**Access:** Admin

**Request Body:**

```json
{
  "operations": ["resize", "compress", "watermark"],
  "resize": {
    "width": 800,
    "height": 600,
    "fit": "cover" | "contain" | "fill"
  },
  "compress": {
    "quality": 80
  },
  "watermark": {
    "image": "uuid-of-watermark",
    "position": "bottom-right",
    "opacity": 0.5
  }
}
```

---

### File Upload Module - Business Logic Rules

**Upload Flow:**

1. Validate file size against limits
2. Validate MIME type against allowed types
3. Scan file for malware (ClamAV)
4. Generate unique filename with UUID
5. Upload to cloud storage (S3/GCS)
6. For images: Generate thumbnails (200x200, 400x400)
7. Create file metadata record
8. Return file information

**Presigned URL Flow:**

1. Validate file type and size
2. Generate unique file key
3. Create presigned upload URL (1 hour expiry)
4. Create pending file record
5. Return upload URL
6. Wait for completion webhook or poll
7. Validate uploaded file
8. Process if image

**File Deletion Flow:**

1. Verify ownership or admin
2. Check file is not referenced by active records
3. Delete from cloud storage
4. Delete thumbnails
5. Soft delete metadata record

**Image Processing:**

1. Validate source image exists
2. Queue processing job
3. Process operations sequentially
4. Store processed versions
5. Update file metadata

### File Upload Module - Events

| Event Name    | Trigger           | Consumer   | Impact           |
| ------------- | ----------------- | ---------- | ---------------- |
| FileUploaded  | Successful upload | CDNService | Invalidate cache |
| FileDeleted   | File deletion     | CDNService | Remove from CDN  |
| FileProcessed | Image processing  | CDNService | Update CDN       |

### File Upload Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    size INTEGER NOT NULL,
    width INTEGER,
    height INTEGER,
    type VARCHAR(20) NOT NULL,
    folder VARCHAR(255),
    storage_path VARCHAR(500) NOT NULL,
    cdn_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    uploaded_by UUID REFERENCES users(id),
    download_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_files_uploader ON files(uploaded_by) WHERE deleted_at IS NULL;
CREATE INDEX idx_files_type ON files(type);
CREATE INDEX idx_files_folder ON files(folder);

CREATE TABLE file_processing_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_id UUID NOT NULL REFERENCES files(id),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    operations JSONB NOT NULL,
    result JSONB,
    error_message TEXT,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_file_processing_file ON file_processing_jobs(file_id);
CREATE INDEX idx_file_processing_status ON file_processing_jobs(status);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE files (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    size BIGINT NOT NULL,
    width INT,
    height INT,
    type VARCHAR(20) NOT NULL,
    folder VARCHAR(255),
    storage_path VARCHAR(500) NOT NULL,
    cdn_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    uploaded_by CHAR(36),
    download_count INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    metadata JSON DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    INDEX idx_files_uploader (uploaded_by),
    INDEX idx_files_type (type),
    INDEX idx_files_folder (folder)
);

CREATE TABLE file_processing_jobs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    file_id CHAR(36) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    operations JSON NOT NULL,
    result JSON,
    error_message TEXT,
    started_at DATETIME,
    completed_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_file_processing_file (file_id),
    INDEX idx_file_processing_status (status)
);
```

### File Upload Module - Test Cases

| Case                    | Input                    | Expected Result      |
| ----------------------- | ------------------------ | -------------------- |
| Upload valid image      | JPEG, 2MB                | 201, file uploaded   |
| Upload too large        | JPEG, 10MB               | 400, file too large  |
| Upload invalid type     | EXE file                 | 400, invalid type    |
| Upload multiple         | 3 valid files            | 201, all uploaded    |
| Upload batch with error | Mix of valid and invalid | 201, partial success |
| Get file info           | Valid ID                 | 200, file details    |
| Delete owned file       | Own file                 | 200, deleted         |
| Delete others file      | Different user           | 403, forbidden       |

---

## 9. Analytics Module

### 9.1 Dashboard Overview

**Endpoint:** `GET /analytics/dashboard`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type | Default | Description                       |
| --------- | ---- | ------- | --------------------------------- |
| period    | enum | week    | today, week, month, quarter, year |
| startDate | date | -       | Custom start date                 |
| endDate   | date | -       | Custom end date                   |

**Response Success (200):**

```json
{
  "data": {
    "revenue": {
      "total": 500000000,
      "change": 15.5,
      "changeLabel": "vs previous period"
    },
    "orders": {
      "total": 2500,
      "change": 8.2
    },
    "customers": {
      "total": 1200,
      "new": 150,
      "returning": 1050,
      "change": 12.0
    },
    "averageOrderValue": {
      "value": 200000,
      "change": 5.3
    },
    "conversionRate": {
      "value": 3.5,
      "change": 0.2
    },
    "charts": {
      "revenue": [...],
      "orders": [...],
      "topProducts": [...]
    }
  },
  "statusCode": 200
}
```

### 9.2 Revenue Analytics

**Endpoint:** `GET /analytics/revenue`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type | Default | Description                     |
| --------- | ---- | ------- | ------------------------------- |
| period    | enum | month   | day, week, month, quarter, year |
| startDate | date | -       | Custom start date               |
| endDate   | date | -       | Custom end date                 |
| groupBy   | enum | date    | date, product, category, user   |

**Response Success (200):**

```json
{
  "data": {
    "summary": {
      "grossRevenue": 550000000,
      "discounts": 50000000,
      "netRevenue": 500000000,
      "refunds": 5000000
    },
    "timeSeries": [
      {
        "date": "2024-01-01",
        "revenue": 15000000,
        "orders": 75,
        "averageOrderValue": 200000
      }
    ],
    "byCategory": [...],
    "byPaymentMethod": [...]
  },
  "statusCode": 200
}
```

### 9.3 Product Analytics

**Endpoint:** `GET /analytics/products`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type    | Default | Description                        |
| --------- | ------- | ------- | ---------------------------------- |
| period    | enum    | week    | today, week, month                 |
| sort      | enum    | revenue | revenue, orders, views, conversion |
| limit     | integer | 10      | Top N products                     |

**Response Success (200):**

```json
{
  "data": {
    "topProducts": [
      {
        "productId": "uuid-v4",
        "name": "Premium Wireless Headphones",
        "sku": "WH-PRO-001",
        "revenue": 50000000,
        "unitsSold": 167,
        "averageRating": 4.5,
        "conversionRate": 5.2
      }
    ],
    "outOfStock": [...],
    "lowStock": [...]
  },
  "statusCode": 200
}
```

### 9.4 Customer Analytics

**Endpoint:** `GET /analytics/customers`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type    | Default | Description                       |
| --------- | ------- | ------- | --------------------------------- |
| period    | enum    | month   | today, week, month, quarter, year |
| sort      | enum    | orders  | orders, revenue, ltv              |
| limit     | integer | 20      | Top N customers                   |

### 9.5 Sales Funnel

**Endpoint:** `GET /analytics/funnel`  
**Access:** Admin

**Query Parameters:**

| Parameter | Type | Default | Description        |
| --------- | ---- | ------- | ------------------ |
| period    | enum | week    | today, week, month |

**Response Success (200):**

```json
{
  "data": {
    "funnel": [
      { "stage": "visitors", "count": 10000, "percentage": 100 },
      { "stage": "productViews", "count": 5000, "percentage": 50 },
      { "stage": "addToCart", "count": 1000, "percentage": 10 },
      { "stage": "checkout", "count": 500, "percentage": 5 },
      { "stage": "purchase", "count": 250, "percentage": 2.5 }
    ]
  },
  "statusCode": 200
}
```

### 9.6 Real-time Analytics

**Endpoint:** `GET /analytics/realtime`  
**Access:** Admin

**Response Success (200):**

```json
{
  "data": {
    "currentVisitors": 156,
    "activeOrders": 23,
    "pendingPayments": 8,
    "recentOrders": [...],
    "stockAlerts": [...]
  },
  "statusCode": 200
}
```

### 9.7 Export Analytics

**Endpoint:** `POST /analytics/export`  
**Access:** Admin

**Request Body:**

```json
{
  "report": "revenue" | "orders" | "products" | "customers",
  "format": "csv" | "xlsx" | "pdf",
  "period": {
    "startDate": "2024-01-01",
    "endDate": "2024-01-31"
  },
  "filters": {}
}
```

**Response Success (202):**

```json
{
  "data": {
    "jobId": "uuid-v4",
    "status": "processing",
    "estimatedTime": 60
  },
  "statusCode": 202
}
```

### 9.8 Get Export Status

**Endpoint:** `GET /analytics/export/:jobId`  
**Access:** Admin

---

### Analytics Module - Business Logic Rules

**Data Aggregation:**

1. Pre-compute hourly/daily aggregations
2. Store in materialized views
3. Refresh on schedule (hourly)
4. Calculate trends and changes
5. Cache dashboard data (5 min TTL)

**Report Generation:**

1. Validate report parameters
2. For large datasets, queue as background job
3. Apply date range filters
4. Calculate aggregations
5. Generate file
6. Send notification when ready

**Real-time Metrics:**

1. Use Redis for counters
2. Increment on events
3. Decay old data (24 hours)
4. Poll every 30 seconds

### Analytics Module - Database Schema

**PostgreSQL:**

```sql
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type VARCHAR(50) NOT NULL,
    user_id UUID REFERENCES users(id),
    session_id VARCHAR(100),
    entity_type VARCHAR(50),
    entity_id UUID,
    properties JSONB DEFAULT '{}',
    revenue DECIMAL(15,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_entity ON analytics_events(entity_type, entity_id);
CREATE INDEX idx_analytics_events_created ON analytics_events(created_at DESC);
CREATE INDEX idx_analytics_events_user ON analytics_events(user_id);

CREATE TABLE daily_aggregations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL,
    metric_type VARCHAR(50) NOT NULL,
    dimension_type VARCHAR(50),
    dimension_value VARCHAR(100),
    value DECIMAL(15,2) NOT NULL,
    count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(date, metric_type, dimension_type, dimension_value)
);

CREATE INDEX idx_daily_aggregations_date ON daily_aggregations(date);
CREATE INDEX idx_daily_aggregations_metric ON daily_aggregations(metric_type);

CREATE TABLE report_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    report_type VARCHAR(50) NOT NULL,
    format VARCHAR(10) NOT NULL,
    parameters JSONB,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    file_url VARCHAR(500),
    error_message TEXT,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_by UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_report_jobs_status ON report_jobs(status);
```

**MySQL/MariaDB:**

```sql
CREATE TABLE analytics_events (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    event_type VARCHAR(50) NOT NULL,
    user_id CHAR(36),
    session_id VARCHAR(100),
    entity_type VARCHAR(50),
    entity_id CHAR(36),
    properties JSON DEFAULT '{}',
    revenue DECIMAL(15,2),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_analytics_events_type (event_type),
    INDEX idx_analytics_events_entity (entity_type, entity_id),
    INDEX idx_analytics_events_created (created_at DESC),
    INDEX idx_analytics_events_user (user_id)
);

CREATE TABLE daily_aggregations (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    date DATE NOT NULL,
    metric_type VARCHAR(50) NOT NULL,
    dimension_type VARCHAR(50),
    dimension_value VARCHAR(100),
    value DECIMAL(15,2) NOT NULL,
    count INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_daily_agg (date, metric_type, dimension_type, dimension_value),
    INDEX idx_daily_aggregations_date (date),
    INDEX idx_daily_aggregations_metric (metric_type)
);

CREATE TABLE report_jobs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    report_type VARCHAR(50) NOT NULL,
    format VARCHAR(10) NOT NULL,
    parameters JSON,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    file_url VARCHAR(500),
    error_message TEXT,
    started_at DATETIME,
    completed_at DATETIME,
    created_by CHAR(36) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_report_jobs_status (status)
);
```

### Analytics Module - Test Cases

| Case               | Input        | Expected Result     |
| ------------------ | ------------ | ------------------- |
| Get dashboard      | Admin        | 200, dashboard data |
| Revenue analytics  | Valid period | 200, revenue data   |
| Product analytics  | Valid params | 200, top products   |
| Customer analytics | Valid params | 200, customer data  |
| Export report      | Valid params | 202, job queued     |
| Export status      | Valid job ID | 200, job status     |

---

## Execution Flow: Node.js Event Loop

### Complete Flow: Create Order → Payment → Inventory

This document explains the execution flow of a complete e-commerce transaction through Node.js, from order creation to payment completion and inventory management.

---

### Step 1: User Creates Order

**Entry Point:** HTTP Request from Client

```
Client (POST /orders)
    ↓
Express/Node.js Event Loop (accept connection)
    ↓
Middleware (Auth, Validation, Rate Limit)
    ↓
Controller (handleRequest)
```

**Call Stack (Synchronous):**

```
1. HTTP Server accepts connection
2. Express middleware chain executes
3. AuthGuard.validateToken() - JWT verification
4. ValidationPipe.transform() - DTO validation
5. OrdersController.create()
6. CreateOrderDto validation (class-validator)
7. OrdersService.create()
   ├── User validation
   ├── Product existence check
   ├── Stock availability check (3 database queries)
   ├── Price calculation
   ├── Coupon validation (if provided)
   └── Database transaction BEGIN
```

**Synchronous Operations:**

1. Request validation
2. JWT token parsing
3. Input sanitization
4. Business logic orchestration

**Microtask Queue (Promise callbacks):**

```
1. User.findOne() Promise resolution
2. Product.findMany() Promise resolution
3. Transaction commit Promise resolution
4. Event emission callbacks
```

---

### Step 2: Inventory Reservation (Async)

**Web API Call (Non-blocking):**

```
OrdersService.create()
    ↓ (async, non-blocking)
InventoryService.reserveStock()
    ↓
Database Query (non-blocking I/O)
    ↓
BullMQ Queue (if async)
    └── Reserved for background processing
```

**Event Loop Integration:**

```
┌─────────────────────────┐
│     Call Stack          │
│  - createOrder()        │
│  - validateItems()      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│   Microtask Queue       │
│  - Promise.then()      │
│  - async/await resolve  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│     Event Loop          │
│  - I/O operations       │
│  - Network requests     │
│  - setTimeout           │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│    Task Queues          │
│  - BullMQ Jobs          │
│  - setImmediate()       │
│  - I/O callbacks        │
└─────────────────────────┘
```

---

### Step 3: Payment Initialization

**Internal Service Call:**

```
OrdersService.create()
    ↓
PaymentService.initialize()
    ↓
Payment Provider API (HTTP Request)
    ├── Non-blocking I/O
    ├── Waits for response
    └── Resolves with payment URL
```

**Network I/O Flow:**

```
1. PaymentService calls Midtrans API
2. Node.js makes HTTP request (non-blocking)
3. Event Loop continues processing
4. When response arrives → callback in I/O queue
5. Process response
6. Emit events
```

---

### Step 4: Event Emission & Processing

**Event Loop Event Processing:**

```
OrderCreated Event
    ↓
EventEmitter2.emit('order:created')
    ↓
Event Handlers (async):
├── NotificationService.sendOrderConfirmation()
│       └── BullMQ Job Queue
├── InventoryService.reserveStock()
│       └── Synchronous (within transaction)
└── AnalyticsService.trackEvent()
        └── Redis write (non-blocking)
```

**BullMQ Task Queue:**

```
1. NotificationService.addJob('send-email', { orderId })
   └── Job added to 'notifications' queue

2. BullMQ Worker picks up job
   └── Sends email via external API

3. Job completion callback
   └── Updates job status
```

---

### Complete Timeline

```
Timeline (milliseconds)
─────────────────────────────────────────────────────────────────►

Client Request: 0ms
    │
    ▼
┌────────────────────────────────────────────────────────────────┐
│ Synchronous Execution (Call Stack)                    0-50ms  │
│ ├─ Middleware validation                                    │
│ ├─ JWT verification                                          │
│ ├─ Input validation                                          │
│ └─ Business logic (synchronous parts)                       │
└────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────┐
│ Database Operations (Async I/O)                     50-150ms  │
│ ├─ Product queries (parallel)                                 │
│ ├─ Stock checks                                              │
│ └─ Transaction commit                                        │
└────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────┐
│ External API Calls                                  150-500ms │
│ ├─ Payment provider initialization                           │
│ └─ Response processing                                       │
└────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────┐
│ Event Processing (Async)                          500ms+       │
│ ├─ Emit OrderCreated event                                    │
│ ├─ Queue notification jobs                                    │
│ └─ Background workers process                                │
└────────────────────────────────────────────────────────────────┘
    │
    ▼
Response to Client: 200-500ms
```

---

### Detailed Call Stack Example

```javascript
// Simplified representation of call stack
async function createOrder(req, res) {
  // Call Stack: createOrder()

  const user = await userService.findById(req.user.id);
  // Call Stack: createOrder() → findById() → Database Query
  // Microtask: Promise resolution

  const products = await productService.findByIds(itemIds);
  // Call Stack: findByIds()
  // Microtask: Multiple Promise resolutions

  const stockAvailable = await inventoryService.checkStock(products);
  // Call Stack: checkStock()

  const order = await db.transaction(async (tx) => {
    // Transaction callback - Call Stack

    const createdOrder = await orderRepository.create(tx);
    // Call Stack: create()

    await inventoryService.reserve(order.id, products, tx);
    // Call Stack: reserve() - Synchronous within transaction

    return createdOrder;
  });

  const payment = await paymentService.initialize(order);
  // Call Stack: initialize()
  // Web API: HTTP request to payment provider
  // Call Stack resumes when response received

  eventEmitter.emit("order:created", order);
  // Schedules async handlers via Microtask Queue

  res.status(201).json({ data: order });
}
```

---

### Event Loop Phases (libuv)

```
┌──────────────────────┐
│       Timers         │
│  setTimeout, setInterval
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│  Pending callbacks   │
│  I/O callbacks       │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│   Idle, prepare      │
│  Internal use        │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│       Poll          │
│  Retrieve new I/O   │
│  Network, disk      │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│       Check          │
│  setImmediate()      │
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│   Close callbacks    │
│  socket.on('close')  │
└──────────────────────┘
```

**In Our Flow:**

- **Timers**: Background job scheduling
- **Poll**: Database queries, HTTP requests
- **Check**: BullMQ job processing
- **Close**: Cleanup handlers

---

### BullMQ Task Queue Integration

**Job Queue Flow:**

```
┌─────────────────────────────────────────────────────────┐
│                    Main Process                         │
│  ┌─────────────┐    ┌─────────────┐    ┌───────────┐  │
│  │   Express   │───►│  Services   │───►│   Redis   │  │
│  │   Server    │    │             │    │  Queue    │  │
│  └─────────────┘    └─────────────┘    └─────┬─────┘  │
│                                               │        │
└───────────────────────────────────────────────┼────────┘
                                                │
                                                ▼
                       ┌─────────────────────────────────┐
                       │         Worker Process           │
                       │  ┌─────────┐  ┌───────────────┐  │
                       │  │  BullMQ │  │ Email Service │  │
                       │  │ Worker  │──►               │  │
                       │  └─────────┘  └───────────────┘  │
                       └─────────────────────────────────┘
```

**Job Processing:**

```javascript
// Main process adds job
await notificationQueue.add(
  "send-email",
  {
    to: user.email,
    template: "order_confirmation",
    data: { orderNumber: order.orderNumber },
  },
  {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 1000,
    },
  },
);

// Worker process
worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
  // Update analytics
  // Emit completion event
});
```

---

### Memory & Concurrency Model

**Single-Threaded Event Loop:**

```
┌─────────────────────────────────────────────────────┐
│                   Node.js Process                   │
│  ┌───────────────────────────────────────────────┐  │
│  │              Event Loop                       │  │
│  │  (single-threaded, handles all requests)      │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │         Call Stack                            │  │
│  │  (manages function execution order)           │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │         Heap + Stack                          │  │
│  │  (memory allocation for objects)              │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │         Worker Threads (I/O)                  │  │
│  │  (handled by libuv, non-blocking)             │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Non-Blocking I/O Pattern:**

```
Request 1 ──┐
Request 2 ──┼──► Event Loop ──► Database/Network I/O
Request 3 ──┤              │
            │              ▼ (non-blocking wait)
            │      ┌─────────────────┐
            │      │ I/O Completion │
            │      │   (callback)   │
            │      └────────┬────────┘
            └───────────────┴────► Resume processing
```

---

### Async/Await vs Promises vs Callbacks

**Evolution in Our Code:**

```javascript
// Callback style (legacy)
function createOrder(req, res) {
    validateUser(req.user.id, (err, user) => {
        if (err) return res.status(400).send(err);
        checkStock(items, (err, available) => {
            if (err) return res.status(400).send(err);
            createOrderRecord(user, items, (err, order) => {
                // ... nested callbacks
            });
        });
    });
}

// Promise style
async function createOrder(req, res) {
    try {
        const user = await validateUser(req.user.id);
        const available = await checkStock(items);
        const order = await createOrderRecord(user, items);
        res.json(order);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Modern async/await (used in NestJS)
async create(@Body() dto: CreateOrderDto) {
    const order = await this.ordersService.create(dto);
    this.eventEmitter.emit('order:created', order);
    return order;
}
```

---

### Concurrency Limits

**Database Connection Pool:**

```javascript
// Connection pool configuration
{
    max: 20,           // Maximum connections
    min: 5,            // Minimum connections
    idleTimeout: 30000,
    connectionTimeout: 2000
}
```

**Event Loop Backpressure:**

```
High Load Scenario:
    │
    ▼
┌────────────────────────────────────────────────────┐
│ Event Loop saturated                               │
│  - Too many concurrent requests                    │
│  - Database connections exhausted                  │
│  - I/O waiting                                    │
└────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────┐
│ Backpressure Handling                              │
│  - Request queuing                                 │
│  - Rate limiting                                   │
│  - Load shedding                                   │
│  - Circuit breaker                                 │
└────────────────────────────────────────────────────┘
    │
    ▼
Response: Slow (or 503 Service Unavailable)
```

---

### Summary: Execution Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         HTTP Request                                │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Express Middleware                          │
│  ├── Helmet (security headers)                                      │
│  ├── CORS                                                             │
│  ├── Body parser                                                      │
│  ├── Authentication                                                   │
│  └── Rate limiter                                                     │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         NestJS Interceptors                          │
│  ├── Logging                                                          │
│  ├── Timing                                                           │
│  └── Exception handling                                               │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Controller                                   │
│  └── create(@Body() dto): Promise<OrderDto>                         │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Service Layer                                │
│  ├── DTO Validation (class-validator)                                │
│  ├── Business logic                                                  │
│  ├── Transaction management                                          │
│  └── Event emission                                                  │
└─────────────────────────────────────────────────────────────────────┘
                    │                           │
                    ▼                           ▼
┌───────────────────────────────┐   ┌───────────────────────────────────┐
│       Database               │   │      External Services            │
│  ├── Users table             │   │  ├── Payment Provider API          │
│  ├── Products table          │   │  ├── Notification Queue           │
│  ├── Inventory table         │   │  └── Analytics Service             │
│  └── Orders table            │   └───────────────────────────────────┘
└───────────────────────────────┘
                    │                           │
                    ▼                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Response                                      │
│  └── JSON: { data: OrderDto, statusCode: 201 }                      │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Background Processing                             │
│  ├── BullMQ Workers                                                 │
│  ├── Event handlers                                                  │
│  └── Scheduled jobs (cron)                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Appendix

### HTTP Status Codes Reference

| Code | Meaning               | Usage                    |
| ---- | --------------------- | ------------------------ |
| 200  | OK                    | Successful GET, PATCH    |
| 201  | Created               | Successful POST (create) |
| 202  | Accepted              | Async processing started |
| 204  | No Content            | Successful DELETE        |
| 400  | Bad Request           | Validation errors        |
| 401  | Unauthorized          | Missing/invalid auth     |
| 403  | Forbidden             | Insufficient permissions |
| 404  | Not Found             | Resource doesn't exist   |
| 409  | Conflict              | Duplicate resource       |
| 422  | Unprocessable Entity  | Business rule violation  |
| 429  | Too Many Requests     | Rate limit exceeded      |
| 500  | Internal Server Error | Server error             |

### Common Error Codes

| Code        | Message             | Description              |
| ----------- | ------------------- | ------------------------ |
| AUTH_001    | Invalid credentials | Wrong email/password     |
| AUTH_002    | Token expired       | Access token expired     |
| AUTH_003    | Token invalid       | Malformed token          |
| AUTH_004    | Account locked      | Too many failed attempts |
| USER_001    | User not found      | Invalid user ID          |
| USER_002    | Email exists        | Duplicate email          |
| PRODUCT_001 | Product not found   | Invalid product ID       |
| PRODUCT_002 | Out of stock        | Insufficient stock       |
| ORDER_001   | Order not found     | Invalid order ID         |
| ORDER_002   | Invalid status      | Cannot transition        |
| PAYMENT_001 | Payment failed      | Payment provider error   |
| PAYMENT_002 | Already paid        | Order already paid       |

### Rate Limiting

| Endpoint          | Limit | Window     |
| ----------------- | ----- | ---------- |
| POST /auth/login  | 5     | per minute |
| POST /orders      | 10    | per minute |
| POST /uploads     | 20    | per minute |
| GET /analytics/\* | 30    | per minute |

---

**Document Version:** 1.0.0  
**Last Updated:** 2024-01-15  
**Author:** Backend Team
