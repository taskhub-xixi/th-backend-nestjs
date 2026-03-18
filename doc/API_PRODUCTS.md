# Products API Spec

## 1. Feature Definition

### Create Product

- Endpoint: POST /api/products
- Access: Admin only
- Request: { name, price, description, category, image }
- Response Success: { data: { id, name, price, category, image }, statusCode, message }
- Response Error: { errors: [...], statusCode }
- Validation: name required, price > 0, category required

### Get All Products

- Endpoint: GET /api/products
- Access: Public
- Query Params: page, limit, category, minPrice, maxPrice, search
- Response Success: { data: { products: [...], total, page, limit }, statusCode }
- Response Error: { errors: [...], statusCode }

### Get Product By ID

- Endpoint: GET /api/products/:id
- Access: Public
- Response Success: { data: { id, name, price, description, category, image, createdAt }, statusCode }
- Response Error: 404 if not found

### Update Product

- Endpoint: PATCH /api/products/:id
- Access: Admin only
- Request: { name?, price?, description?, category?, image? }
- Response Success: { data: { id, name, price, category }, statusCode, message }
- Response Error: { errors: [...], statusCode }

### Delete Product

- Endpoint: DELETE /api/products/:id
- Access: Admin only
- Response Success: { data: true, statusCode, message }
- Response Error: { errors: [...], statusCode }

---

## 2. Request & Response Format

### Request - Create Product

```json
{
  "name": "Laptop Gaming",
  "price": 15000000,
  "description": "Laptop gaming dengan spesifikasi tinggi",
  "category": "electronics",
  "image": "filename.jpg"
}
```

### Request - Get Products (Query Params)

| Param    | Type   | Required | Default | Description                |
| -------- | ------ | -------- | ------- | -------------------------- |
| page     | number | No       | 1       | Page number                |
| limit    | number | No       | 10      | Items per page             |
| category | string | No       | -       | Filter by category         |
| minPrice | number | No       | -       | Minimum price              |
| maxPrice | number | No       | -       | Maximum price              |
| search   | string | No       | -       | Search in name/description |

### Response - Get Products Success (200)

```json
{
  "data": {
    "products": [
      {
        "id": 1,
        "name": "Laptop Gaming",
        "price": 15000000,
        "description": "Laptop gaming dengan spesifikasi tinggi",
        "category": "electronics",
        "image": "laptop-123.jpg",
        "createdAt": "2026-03-15T10:00:00Z"
      }
    ],
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  },
  "statusCode": 200
}
```

### Response - Create Product Success (201)

```json
{
  "data": {
    "id": 1,
    "name": "Laptop Gaming",
    "price": 15000000,
    "category": "electronics",
    "image": "laptop-123.jpg"
  },
  "statusCode": 201,
  "message": "Product created successfully"
}
```

### Response - Error (400/404)

```json
{
  "errors": ["name is required", "price must be greater than 0"],
  "statusCode": 400
}
```

---

## 3. Image Upload Spec

### Upload Endpoint

- Endpoint: POST /api/products/upload
- Content-Type: multipart/form-data
- Field: file (max 5MB)
- Allowed: jpg, jpeg, png, webp

### Upload Response Success (200)

```json
{
  "data": {
    "filename": "product-1234567890.jpg",
    "originalName": "laptop.jpg",
    "size": 1024000,
    "mimetype": "image/jpeg"
  },
  "statusCode": 200
}
```

### Upload Response Error (400)

```json
{
  "errors": ["File too large", "Invalid file type"],
  "statusCode": 400
}
```

---

## 4. Test Cases

### POST /api/products (Create)

- [~] 201 if valid data (admin only)
- [~] 400 if name empty
- [~] 400 if price <= 0
- [~] 400 if category empty
- [~] 401 if not authenticated
- [~] 403 if not admin

### GET /api/products (List)

- [~] 200 + paginated products
- [~] Filter by category works
- [~] Filter by price range works
- [~] Search by name/description works
- [~] Return correct total & totalPages

### GET /api/products/:id (Get One)

- [~] 200 + product data
- [~] 404 if product not found

### PATCH /api/products/:id (Update)

- [~] 200 if valid data (admin only)
- [~] 404 if product not found
- [~] 400 if price <= 0

### DELETE /api/products/:id (Delete)

- [~] 200 if success (admin only)
- [~] 404 if product not found

### POST /api/products/upload

- [~] 200 + filename for valid image
- [~] 400 if file too large
- [~] 400 if invalid file type

---

## 5. Database Schema

```sql
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_category ON products(category);
CREATE INDEX idx_price ON products(price);
CREATE INDEX idx_name ON products(name);
```

---

## 6. Category Options

| Category    | Description                 |
| ----------- | --------------------------- |
| electronics | Gadget, Laptop, Phone       |
| clothing    | Fashion, Shoes, Accessories |
| food        | Food & Beverages            |
| books       | Books, Magazines            |
| furniture   | Home & Furniture            |
| sports      | Sports Equipment            |
| other       | Miscellaneous               |

---

## 7. Notes

- Image files stored in `uploads/` folder
- Return only filename in responses, full URL constructed on client
- Price stored as decimal (Indonesian Rupiah)
- All timestamps in ISO 8601 format (UTC)
- Soft delete recommended (add `deleted_at` field)
- Consider adding `stock` field for inventory management

---

## 8. Struktur Folder Products

```
src/product/
├── product.entity.ts           # TypeORM Entity
├── product.model.ts           # DTOs & Interfaces
├── product.controller.ts       # HTTP Endpoints
├── product.service.ts         # Business Logic
├── product.module.ts          # Module Configuration
├── product.response.ts        # Response Interfaces
└── dto/
    ├── create-product.dto.ts
    ├── update-product.dto.ts
    └── query-product.dto.ts

src/uploads/                   # Image storage (gitignored)

test/
└── product.spec.ts            # Product Test Suite
```

---

## 9. Implementation Steps

1. [ ] Buat product.entity.ts
2. [ ] Buat product.model.ts (DTOs)
3. [ ] Buat product.module.ts
4. [ ] Buat product.service.ts (CRUD + pagination + filter)
5. [ ] Buat product.controller.ts
6. [ ] Setup multer untuk image upload
7. [ ] Tambah route upload ke controller
8. [ ] Import module ke app.module.ts
9. [ ] Tulis test cases
10. [ ] Run test → fix sampai pass

---

## 10. Referensi Teknologi

- **Multer**: File upload middleware untuk NestJS
- **TypeORM QueryBuilder**: Untuk complex queries (filter, pagination, search)
- **class-validator**: Validasi DTO
- **Serve-static**: Serve files dari uploads folder
