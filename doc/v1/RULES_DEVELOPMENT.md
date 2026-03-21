## Workflow Step-by-Step

```
1. DEFINISI → 2. SPEC → 3. TEST → 4. IMPLEMENT → 5. REFACTOR
```

### 1️⃣ Definisi Requirement (Di Luar Kode)

```markdown
## Feature: User Registration

- Endpoint: POST /api/auth/register
- Request: { email, password }
- Response Success: { data: { email }, statusCode, message }
- Response Error: { errors: [...], statusCode }
- Validation: email required & valid format, password min 6 chars
```

### 2️⃣ Buat DTO + Interface (Contract First)

```typescript
// src/auth/dto/register.dto.ts
export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

// src/auth/auth.response.ts
export interface AuthResponse {
  data: { email: string };
  statusCode: number;
  message: string;
}

export interface ErrorResponse {
  errors: string[];
  statusCode: number;
}
```

### 3️⃣ Tulis Test Dulu (TDD)

```typescript
// test/auth.spec.ts
describe("POST /api/auth/register", () => {
  it("should return 400 if email invalid", async () => {
    const res = await request(app.getHttpServer())
      .post("/api/auth/register")
      .send({ email: "invalid", password: "123456" });

    expect(res.status).toBe(400);
    expect(res.body.errors).toBeDefined();
  });

  it("should return 201 + data.email if valid", async () => {
    const res = await request(app.getHttpServer())
      .post("/api/auth/register")
      .send({ email: "test@test.com", password: "123456" });

    expect(res.status).toBe(201);
    expect(res.body.data.email).toBe("test@test.com");
  });
});
```

### 4️⃣ Implementasi (Bikin Test Pass)

```typescript
// src/auth/auth.controller.ts
@Post('register')
@HttpCode(HttpStatus.CREATED)
async register(@Body() dto: RegisterDto): Promise<AuthResponse> {
  const result = await this.authService.register(dto);
  return {
    data: { email: result.email },
    statusCode: HttpStatus.CREATED,
    message: 'User registered',
  };
}
```

### 5️⃣ Run Test + Refactor

```bash
bun run test  # Semua test harus pass
# Jika fail → fix code, jangan ubah test
# Jika pass → refactor untuk cleanliness
```

---

## Struktur Folder

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── dto/
│   │   ├── register.dto.ts
│   │   └── login.dto.ts
│   └── auth.response.ts      # ✅ Interface response
│
test/
├── auth.spec.ts              # ✅ Test suite
├── test.module.ts            # Mock service
└── test.service.ts           # Helper DB cleanup
```

---

## Tools

| Tool                                    | Fungsi                                            |
| --------------------------------------- | ------------------------------------------------- |
| **OpenAPI/Swagger**                     | Dokumentasi API otomatis dari decorator           |
| **class-validator + class-transformer** | Validasi DTO + auto-transform                     |
| **Zod / Joi**                           | Alternative validation jika tidak pakai decorator |
| **jest + supertest**                    | Testing framework + HTTP assertion                |
| **pact / openapi-generator**            | Contract testing & generate client dari spec      |

---

## Checklist Per Feature

```markdown
- [ ] Tulis requirement (endpoint, method, request, response)
- [ ] Buat DTO (request) + Interface (response)
- [ ] Tulis test case: happy path + error cases
- [ ] Implement controller + service
- [ ] Run test → fix sampai pass
- [ ] Tambah dokumentasi (Swagger comment / README)
- [ ] Commit dengan message jelas: "feat(auth): add register endpoint"
```

## Template

````markdown
# API Spec: [SAKEN]

## Endpoint

- Method: POST
- Path: /api/auth/register

## Request

```typescript
{
  email: string (required, valid email)
  password: string (required, min 6 chars)
}
```
````

## Response Success (201)

```typescript
{
  statusCode: 201,
  message: "User registered",
  data: { email: string }
}
```

## Response Error (400)

```typescript
{
  statusCode: 400,
  errors: ["email must be an email", "password must be longer than 6 chars"]
}
```

## Test Cases

- [ ] 400 if email invalid format
- [ ] 400 if password < 6 chars
- [ ] 201 + return email if valid
- [ ] 409 if email already exists

## Notes

- Password di-hash sebelum simpan ke DB
- Jangan expose password/hash di response

```

---

```
