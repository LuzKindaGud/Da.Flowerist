# Da.Florist Backend API

Backend API sử dụng Node.js/Express + MySQL (XAMPP)

## 🚀 Cài đặt

### 1. Cài đặt Dependencies

```bash
cd backend
npm install
```

### 2. Tạo Database trong XAMPP

1. Mở XAMPP Control Panel
2. Start **Apache** và **MySQL**
3. Mở **phpMyAdmin** (http://localhost/phpmyadmin)
4. Tạo database mới tên `da_florist`
5. Import file `database/init.sql` hoặc chạy SQL sau:

```sql
CREATE DATABASE IF NOT EXISTS da_florist;
USE da_florist;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);
```

### 3. Cấu hình Environment

File `.env` đã được tạo sẵn. Chỉnh sửa nếu cần:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=da_florist
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173
```

### 4. Chạy Server

```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

Server sẽ chạy tại: `http://localhost:5000`

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Đăng ký tài khoản mới |
| POST | `/api/auth/login` | Đăng nhập |
| GET | `/api/auth/profile` | Lấy thông tin user (cần token) |

### Register Request

```json
POST /api/auth/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "MyPass123"
}
```

### Login Request

```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "MyPass123"
}
```

### Response Success

```json
{
  "success": true,
  "message": "Login successful!",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 🔐 Authentication Flow

1. User đăng ký → Password được hash bằng bcrypt → Lưu vào MySQL
2. User đăng nhập → Verify password → Tạo JWT token → Trả về client
3. Client lưu token vào localStorage
4. Mỗi request cần auth → Gửi token trong header `Authorization: Bearer <token>`

## 📁 Cấu trúc thư mục

```
backend/
├── config/
│   └── database.js      # Kết nối MySQL
├── controllers/
│   └── authController.js # Logic xử lý auth
├── middleware/
│   └── authMiddleware.js # JWT verification
├── routes/
│   └── authRoutes.js    # Định nghĩa routes
├── database/
│   └── init.sql         # SQL tạo database
├── .env                 # Environment variables
├── package.json
├── server.js            # Entry point
└── README.md
```

## 🧪 Test với Postman/Thunder Client

### Register
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "Test123"
}
```

### Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Test123"
}
```

## ⚠️ Lưu ý

- Đảm bảo XAMPP MySQL đang chạy trước khi start server
- Frontend chạy ở port 5173, Backend ở port 5000
- CORS đã được cấu hình cho phép request từ frontend
