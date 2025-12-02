# 🔐 Authentication System Guide

## Cách Hoạt Động

### 1. Nơi Lưu Trữ Dữ Liệu

#### A. **users.json** (Mock Database - Users có sẵn)
- **Vị trí**: `src/view/data/users.json`
- **Mục đích**: Lưu users có sẵn để test login
- **Dữ liệu hiện có**:
  ```json
  {
    "email": "admin@flowerist.com",
    "password": "Admin123",
    "role": "admin"
  }
  ```

#### B. **localStorage** (Trình duyệt)
Lưu 2 loại dữ liệu:

1. **Session đăng nhập** (sau khi login thành công):
   - `userEmail`: Email của user đang đăng nhập
   - `userRole`: Role của user (admin/user)

2. **Users đăng ký mới** (key: `mockUsers`):
   - Array chứa tất cả users đăng ký qua form Register
   - Format: `[{id, username, email, password, role}]`

### 2. Flow Đăng Ký (Register)

```
User điền form → Validate với Zod → Kiểm tra email/username trùng 
→ Lưu vào localStorage.mockUsers → Redirect đến Login
```

**Code trong register.jsx:**
```javascript
// Lưu user mới vào localStorage
const newUser = {
  id: Date.now(),
  username,
  email,
  password, // ⚠️ Trong production phải hash!
  role: 'user'
};

const existingUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
localStorage.setItem('mockUsers', JSON.stringify([...existingUsers, newUser]));
```

### 3. Flow Đăng Nhập (Login)

```
User điền form → Validate với Zod → Tìm user trong (users.json + localStorage.mockUsers)
→ So sánh password → Lưu session vào localStorage → Redirect về Home
```

**Code trong login.jsx:**
```javascript
// Tìm user
const user = USERS_DATA.find(
  u => u.email === email && u.password === password
);

// Lưu session
localStorage.setItem('userEmail', user.email);
localStorage.setItem('userRole', user.role);
```

### 4. Kiểm Tra Đăng Nhập (Navbar)

**Code trong navbar.jsx:**
```javascript
useEffect(() => {
  const email = localStorage.getItem('userEmail');
  if (email) {
    setIsLoggedIn(true);
    setUserEmail(email);
  }
}, []);
```

### 5. Đăng Xuất (Sign Out)

```javascript
const handleSignOut = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userRole');
  navigate('/');
};
```

---

## 🧪 Test Accounts

### Users có sẵn (từ users.json):

| Email | Password | Role |
|-------|----------|------|
| admin@flowerist.com | Admin123 | admin |
| user1@example.com | User123 | user |
| test@flowerist.com | Test123 | user |

### Tạo user mới:
1. Vào trang Register
2. Điền form (password phải có: chữ HOA, chữ thường, số)
3. User mới sẽ được lưu vào localStorage
4. Login với email/password vừa tạo

---

## 🔍 Xem Dữ Liệu trong Browser

### Chrome DevTools:
1. Mở DevTools (F12)
2. Tab **Application** → **Local Storage** → `http://localhost:5173`
3. Xem keys:
   - `userEmail`: Email đang đăng nhập
   - `userRole`: Role của user
   - `mockUsers`: Array users đã đăng ký

### Console Commands:
```javascript
// Xem session hiện tại
console.log('Email:', localStorage.getItem('userEmail'));
console.log('Role:', localStorage.getItem('userRole'));

// Xem tất cả users đã đăng ký
console.log('Registered Users:', JSON.parse(localStorage.getItem('mockUsers') || '[]'));

// Clear tất cả
localStorage.clear();
```

---

## ⚠️ Lưu Ý Quan Trọng

### Đây là MOCK SYSTEM cho Development:
- ❌ **KHÔNG dùng trong Production**
- ❌ Password không được hash
- ❌ Không có JWT/Token thật
- ❌ Dữ liệu mất khi clear browser

### Trong Production thực tế cần:
- ✅ Backend API (Node.js/Express, Django, etc.)
- ✅ Database thật (PostgreSQL, MongoDB, etc.)
- ✅ Hash password (bcrypt)
- ✅ JWT tokens
- ✅ HTTPS
- ✅ Rate limiting
- ✅ CSRF protection

---

## 📝 Validation Rules (Zod)

### Login:
- Email: phải đúng format
- Password: tối thiểu 6 ký tự

### Register:
- Username: 3-20 ký tự, chỉ chữ/số/underscore
- Email: phải đúng format
- Password: 
  - Tối thiểu 6 ký tự
  - Phải có chữ HOA (A-Z)
  - Phải có chữ thường (a-z)
  - Phải có số (0-9)
- Confirm Password: phải khớp với password

---

## 🎯 Tóm Tắt

**Dữ liệu được lưu ở:**
1. `users.json` - Users có sẵn để test
2. `localStorage.mockUsers` - Users đăng ký mới
3. `localStorage.userEmail` + `userRole` - Session đăng nhập

**Để test:**
1. Login với account có sẵn: `admin@flowerist.com` / `Admin123`
2. Hoặc Register account mới với password mạnh (VD: `MyPass123`)
