# Latihan SQL Query - Database E-Commerce

## Cara Masuk ke MariaDB
```bash
mariadb -u root
```

Setelah masuk, pilih database:
```sql
USE nama_database_kamu;
```

---

## LEVEL 1: Dasar SELECT

### Soal 1
Tampilkan semua produk yang aktif (`is_active = 1`).

### Soal 2
Tampilkan nama produk dan harga dari semua produk, urutkan berdasarkan harga dari yang termahal.

### Soal 3
Tampilkan 5 produk dengan rating tertinggi (rating_average).

### Soal 4
Tampilkan semua kategori yang memiliki parent (parent_id tidak NULL).

### Soal 5
Tampilkan nama brand dan website dari brand yang aktif, urutkan berdasarkan nama brand A-Z.

---

## LEVEL 2: WHERE dengan Kondisi Kompleks

### Soal 6
Tampilkan produk yang:
- Aktif
- Stok lebih dari 0
- Harga di bawah 1.000.000

### Soal 7
Tampilkan produk yang stoknya di bawah threshold (low_stock_threshold).

### Soal 8
Tampilkan coupon yang masih aktif dan belum expired (valid_until > sekarang).

### Soal 9
Tampilkan produk yang tidak punya brand (brand_id NULL).

### Soal 10
Tampilkan order dengan status 'completed' atau 'delivered' yang dibuat dalam 30 hari terakhir.

---

## LEVEL 3: Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)

### Soal 11
Hitung berapa banyak produk di setiap kategori. Tampilkan nama kategori dan jumlah produknya.

### Soal 12
Hitung rata-rata harga produk dari semua produk aktif.

### Soal 13
Tampilkan brand dengan jumlah produk terbanyak.

### Soal 14
Hitung total pendapatan dari semua order (kolom `total`).

### Soal 15
Tampilkan rating tertinggi dan terendah dari semua produk review.

---

## LEVEL 4: GROUP BY dengan HAVING

### Soal 16
Tampilkan kategori yang memiliki lebih dari 5 produk aktif.

### Soal 17
Tampilkan brand yang rata-rata harga produknya di atas 500.000.

### Soal 18
Tampilkan user yang sudah membuat lebih dari 3 order.

### Soal 19
Tampilkan coupon yang sudah digunakan lebih dari 10 kali.

### Soal 20
Tampilkan produk yang memiliki rata-rata rating di atas 4.0 dan minimal 10 review.

---

## LEVEL 5: JOIN Dasar (INNER JOIN)

### Soal 21
Tampilkan nama produk dan nama kategorinya untuk semua produk aktif.

### Soal 22
Tampilkan nama produk, nama brand, dan harga untuk semua produk yang punya brand.

### Soal 23
Tampilkan order number, nama user (first_name + last_name), dan total order.

### Soal 24
Tampilkan nama produk dan jumlah item yang terjual (dari order_items).

### Soal 25
Tampilkan nama produk dan semua review-nya (rating, title, content).

---

## LEVEL 6: JOIN Lanjutan (LEFT JOIN, Multiple JOIN)

### Soal 26
Tampilkan semua kategori dan jumlah produknya (termasuk kategori yang belum punya produk).

### Soal 27
Tampilkan semua produk beserta brand-nya (jika ada). Gunakan LEFT JOIN untuk brand.

### Soal 28
Tampilkan order beserta detail user-nya (email, phone) dan shipping address.

### Soal 29
Tampilkan produk, kategori, DAN brand dalam satu query. Tampilkan: nama produk, nama kategori, nama brand, harga.

### Soal 30
Tampilkan order items dengan detail lengkap: order number, nama produk, quantity, price, subtotal.

---

## LEVEL 7: JOIN dengan Aggregate + GROUP BY

### Soal 31
Tampilkan nama kategori dan total revenue (pendapatan) dari produk-produk di kategori tersebut.
(Hint: JOIN products → order_items, lalu SUM subtotal)

### Soal 32
Tampilkan nama brand dan rata-rata rating produk dari brand tersebut.

### Soal 33
Tampilkan user dan total belanja mereka (SUM total dari orders), urutkan dari yang paling banyak belanja.

### Soal 34
Tampilkan 10 produk terlaris berdasarkan total quantity terjual (dari order_items).

### Soal 35
Tampilkan coupon dan berapa kali sudah digunakan, serta total discount yang diberikan.

---

## LEVEL 8: Subquery

### Soal 36
Tampilkan produk yang harganya di atas rata-rata harga semua produk.

### Soal 37
Tampilkan kategori yang tidak memiliki produk sama sekali.

### Soal 38
Tampilkan user yang belum pernah membuat order.

### Soal 39
Tampilkan produk yang ratingnya di atas rata-rata rating semua produk yang punya review.

### Soal 40
Tampilkan order dengan total tertinggi menggunakan subquery.

---

## LEVEL 9: JOIN Kompleks + Subquery

### Soal 41
Tampilkan user yang sudah verified email (email_verified = 1) dan sudah membuat minimal 1 order completed.

### Soal 42
Tampilkan produk yang belum pernah dipesan sama sekali.

### Soal 43
Tampilkan kategori dengan revenue tertinggi.

### Soal 44
Tampilkan user yang paling banyak memberikan review (COUNT product_review).

### Soal 45
Tampilkan produk yang stoknya habis tapi masih ada di order_items (masih pernah dipesan).

---

## LEVEL 10: Challenge (Ultimate Test)

### Soal 46 - Dashboard Query
Buat query yang menampilkan:
- Nama kategori
- Jumlah produk aktif
- Total revenue dari kategori tersebut
- Rata-rata rating produk
Urutkan berdasarkan total revenue DESC, LIMIT 10.

### Soal 47 - Best Seller per Kategori
Untuk setiap kategori, tampilkan 1 produk terlaris (berdasarkan quantity terjual).
(Hint: butuh window function atau subquery korelasi)

### Soal 48 - User Behavior
Tampilkan user yang:
- Sudah verified
- Pernah order minimal 2 kali
- Total belanja di atas 1.000.000
- Pernah memberikan review rating 5
Tampilkan: nama, email, total order, total belanja, jumlah review rating 5.

### Soal 49 - Coupon Effectiveness
Analisis efektivitas coupon:
- Code coupon
- Berapa kali digunakan
- Total discount yang diberikan
- Rata-rata order value yang menggunakan coupon ini
Urutkan berdasarkan total discount DESC.

### Soal 50 - Complete Order Report
Buat laporan order lengkap:
- Order number
- Nama user (concat first + last)
- Email user
- Status order
- Subtotal
- Discount
- Total
- Jumlah item dalam order tersebut
- Nama coupon yang digunakan (jika ada)
- Tanggal order
Urutkan berdasarkan tanggal order DESC, LIMIT 50.

---

## BONUS: Real-World Scenarios

### Soal 51 - Low Stock Alert
Tampilkan produk yang:
- Aktif
- Stok di bawah threshold
- Masih ada yang pesan (ada di order_items)
Prioritaskan yang paling banyak dipesan.

### Soal 52 - Product Performance
Tampilkan produk dengan metrik:
- Nama produk
- Kategori
- Brand
- Harga
- Total terjual
- Revenue generated
- Rata-rata rating
- Jumlah review
Urutkan berdasarkan revenue DESC.

### Soal 53 - Customer Lifetime Value
Hitung CLV per user:
- User ID
- Nama lengkap
- Email
- Jumlah order
- Total belanja
- Rata-rata nilai order
- Order pertama
- Order terakhir
Hanya untuk user yang sudah verified dan aktif.

### Soal 54 - Monthly Revenue Report
Tampilkan revenue per bulan (tahun 2024/2025/2026):
- Tahun
- Bulan
- Total revenue
- Jumlah order
- Rata-rata nilai order
- Jumlah user unik yang order
Urutkan berdasarkan tahun dan bulan.

### Soal 55 - Cross-Selling Analysis
Temukan produk yang sering dibeli bersama:
- Produk A
- Produk B
- Berapa kali dibeli bersama
(Hint: JOIN order_items dengan diri sendiri berdasarkan order_id yang sama, WHERE produk A != produk B)

---

## Tips Pengerjaan

1. **Kerjakan berurutan** dari Level 1 sampai 10
2. **Jangan skip** - setiap level membangun konsep dari level sebelumnya
3. **Cek hasil** - pastikan query menghasilkan data yang masuk akal
4. **Gunakan LIMIT** saat explorasi data dulu: `SELECT * FROM products LIMIT 5;`
5. **Catat query** yang berhasil untuk referensi

## Command Berguna

```sql
-- Lihat semua tabel
SHOW TABLES;

-- Lihat struktur tabel
DESCRIBE products;

-- Lihat sample data
SELECT * FROM products LIMIT 10;

-- Lihat index
SHOW INDEX FROM products;
```

---

**Selamat mengerjakan!** 🚀
