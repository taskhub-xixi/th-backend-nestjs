| Table                     | Columns                                       | Relation      |
| ------------------------- | --------------------------------------------- | ------------- |
| users                     | id, email, password, first_name...            | -             |
| user_addresses            | id, user_id, recipient_name, address_line1... | users (1:N)   |
| auth_tokens               | id, user_id, refresh_token_hash, expires      | users (1:N)   |
| password_reset_tokens     | id, user_id, token                            | users (1:1/N) |
| email_verification_tokens | id, user_id, token, verified_at               | users (1:1/N) |

| Table              | Columns                                     | Relation              |
| ------------------ | ------------------------------------------- | --------------------- |
| categories         | id, name, slug, parent_id                   | self (parent_id)      |
| brands             | id, name, slug, logo                        | -                     |
| products           | id, name, sku, price, category_id, brand_id | categories, brands    |
| product_variants   | id, product_id, sku, name, price_adj, stock | products (1:N)        |
| product_images     | id, product_id, url, is_primary             | products (1:N)        |
| product_attributes | id, product_id, attr_name, value            | products (1:N)        |
| product_tags       | id, product_id, tag                         | products (1:N)        |
| product_reviews    | id, product_id, user_id, rating, content    | products, users (N:1) |

| Table                | Columns                                    | Relation                   |
| -------------------- | ------------------------------------------ | -------------------------- |
| coupons              | id, code, type, value, max_use             | -                          |
| orders               | id, user_id, order_number, status, total   | users, coupons             |
| order_items          | id, order_id, product_id, variant_id, qty  | orders, products, variants |
| order_status_history | id, order_id, status, note, changed_by     | orders (1:N)               |
| coupon_usage         | id, coupon_id, user_id, order_id, discount | coupons, users, orders     |

| Table             | Columns                                  | Relation       |
| ----------------- | ---------------------------------------- | -------------- |
| payment_providers | id, name, config                         | -              |
| payments          | id, order_id, provider, amount, status   | orders (1:N)   |
| refunds           | id, payment_id, order_id, amount, status | payments (1:N) |

| Table                            | Columns                                           | Relation                   |
| -------------------------------- | ------------------------------------------------- | -------------------------- |
| inventory                        | id, product_id, variant_id, available, reserved   | products, variants         |
| inventory_transactions           | id, product_id, variant_id, order_id, type, qty   | inventory (1:N)            |
| stock_reservations               | id, order_id, product_id, variant_id, qty, status | orders, products, variants |
| Table                            | Columns                                           | Relation                   |
| -------------------------------- | ----------------------------------------------    | -----------------          |
| notifications                    | id, user_id, type, channel, title, message        | users (1:N)                |
| notification_logs                | id, notification_id, channel, status              | notifications              |
| notification_templates           | id, name, channels, email_subject, sms_body       | -                          |
| user_notification_preferences    | id, user_id, email_enabled, sms_enabled           | users (1:1)                |

---

## Insert Data (Step by Step)

### 1. USER & ADDRESS

-- 1. Insert User

```sql
INSERT INTO users (email, password_hash, first_name, last_name, phone)
VALUES ('<john@example.com>', '$2b$12$...', 'John', 'Doe', '+6281234567890');
```

-- 2. Insert Address (pake user_id dari step 1)

```sql
INSERT INTO user_addresses (
  user_id, label, recipient_name, phone,
  address_line1, city, province, postal_code, country
)
VALUES (
  'uuid-user-1', 'Home', 'John Doe', '+6281234567890',
  'Jl. Merdeka No.1', 'Jakarta', 'DKI Jakarta', '10110', 'Indonesia'
);
```

---

### 2. CATEGORY & BRAND -> PRODUCT

-- 1. Insert Category

```sql
INSERT INTO categories (name, slug, description)
VALUES ('Electronics', 'electronics', 'Electronic devices');
```

-- 2. Insert Brand (optional)

```sql
INSERT INTO brands (name, slug, logo_url)
VALUES ('Samsung', 'samsung', '<https://cdn.../samsung.png>');
```

-- 3. Insert Product

```sql
INSERT INTO products (
  name, slug, sku, description, price,
  category_id, brand_id, stock
)
VALUES (
  'Galaxy S24', 'galaxy-s24', 'SGS24-001',
  'Smartphone premium', 15000000,
  'uuid-cat-1', 'uuid-brand-1', 100
);
```

-- 4. Insert Product Images

```sql
INSERT INTO product_images (product_id, url, is_primary)
VALUES ('uuid-product-1', '<https://cdn.../s24.jpg>', true);
```

-- 5. Insert Product Variants

```sql
INSERT INTO product_variants (
  product_id, sku, name, price_adjustment, stock, attributes
)
VALUES (
  'uuid-product-1', 'SGS24-001-BLK', 'Black',
  0, 50, '{"color": "Black"}'
);
```

---

### 3. PRODUCT -> ORDER -> ORDER ITEMS

-- 1. Insert Coupon (optional)

```sql
INSERT INTO coupons (
  code, type, value, min_order_amount, valid_from, valid_until
)
VALUES (
  'SAVE10', 'percentage', 10, 100000,
  '2024-01-01', '2024-12-31'
);
```

-- 2. Insert Order

```sql
INSERT INTO orders (
  order_number, user_id, status, subtotal,
  shipping_cost, discount, tax, total,
  shipping_method, shipping_address, coupon_id
)
VALUES (
  'ORD-20240115-001', 'uuid-user-1', 'pending',
  15000000, 25000, 1500000, 1212500, 14625000,
  'express', '{"address": "..."}', 'uuid-coupon-1'
);
```

-- 3. Insert Order Items

```sql
INSERT INTO order_items (
  order_id, product_id, variant_id, quantity, price, subtotal
)
VALUES (
  'uuid-order-1', 'uuid-product-1', 'uuid-variant-1',
  1, 15000000, 15000000
);
```

-- 4. Insert Order Status History

```sql
INSERT INTO order_status_history (order_id, status, note)
VALUES ('uuid-order-1', 'pending', 'Order placed');
```

---

### 4. ORDER -> PAYMENT

-- 1. Insert Payment

```sql
INSERT INTO payments (
  order_id, provider, amount, method, status, deadline
)
VALUES (
  'uuid-order-1', 'midtrans', 14625000,
  'credit_card', 'pending', '2024-01-15T12:30:00Z'
);
```

---

### 5. INVENTORY

-- Inventory

```sql
INSERT INTO inventory (
  product_id, variant_id, available_stock, reserved_stock, low_stock_threshold
)
VALUES ('uuid-product-1', 'uuid-variant-1', 100, 0, 10);
```

-- Stock reservation

```sql
INSERT INTO stock_reservations (
  order_id, product_id, variant_id, quantity, status, expires_at
)
VALUES (
  'uuid-order-1', 'uuid-product-1', 'uuid-variant-1',
  1, 'active', '2024-01-15T11:00:00Z'
);
```

---

## Summary Insert Order

| No  | Table              | Wajib | Depends On                 |
| --- | ------------------ | ----- | -------------------------- |
| 1   | users              | Ya    | -                          |
| 2   | user_addresses     | Tidak | users                      |
| 3   | categories         | Ya    | categories (self)          |
| 4   | brands             | Tidak | -                          |
| 5   | products           | Ya    | categories, brands         |
| 6   | product_images     | Tidak | products                   |
| 7   | product_variants   | Tidak | products                   |
| 8   | coupons            | Tidak | -                          |
| 9   | orders             | Ya    | users, coupons             |
| 10  | order_items        | Ya    | orders, products, variants |
| 11  | payments           | Ya    | orders                     |
| 12  | inventory          | Ya    | products, variants         |
| 13  | stock_reservations | Tidak | orders, products           |

```

```
