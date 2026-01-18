# User Management System - Backend (Node.js & MySQL)
 Repositori ini berisi kode sumber untuk Backend API dari aplikasi Manajemen User. Project ini dibangun menggunakan **Node.js** dan **Express.js**, berfungsi sebagai jembatan antara Frontend dan database **MySQL**.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL (Relation Database)
- **Library Utama:**
  - `mysql2`: Driver untuk komunikasi MySQL.
  - `cors`: Untuk mengizinkan akses dari domain Frontend (React).
  - `dotenv`: Untuk mengelola variabel lingkungan (Environment Variables).

## 🚀 Fitur Backed
- **RESTful API:** Menyediakan endpoint untuk operasi read database.
- **Security:** Implementasi `.env` untuk menyembunyikan kredensial database dari publik.
- **Data Persistence:** Data tersimpan secara permanen dalam tabel MySQL.
- **JSON Middleware:** Memproses data JSON yang dikirimkan oleh Frontend melalui body request.

## ⚙️ Cara Menjalankan Project
1. **Clone Repositori:**
 ```bash
 git clone [https://github.com/fadhlihaiban/nodejs-exploration.git](https://github.com/fadhlihaiban/nodejs-exploration.git)
 cd nodejs-exploration