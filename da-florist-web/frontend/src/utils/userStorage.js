// User Storage Manager - Quản lý users trong localStorage
// Sau này sẽ thay bằng API calls đến backend

const STORAGE_KEY = 'da_florist_users';

// Lấy tất cả users (từ users.json + localStorage)
export const getAllUsers = () => {
  try {
    const storedUsers = localStorage.getItem(STORAGE_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error('Error reading users from storage:', error);
    return [];
  }
};

// Thêm user mới
export const addUser = (userData) => {
  try {
    const users = getAllUsers();
    
    // Kiểm tra email đã tồn tại
    if (users.some(u => u.email === userData.email)) {
      throw new Error('Email already exists');
    }
    
    // Kiểm tra username đã tồn tại
    if (users.some(u => u.username === userData.username)) {
      throw new Error('Username already exists');
    }
    
    const newUser = {
      id: Date.now(),
      username: userData.username,
      email: userData.email,
      password: userData.password, // ⚠️ Trong production phải hash
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    
    return { success: true, user: newUser };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Tìm user theo email và password
export const findUser = (email, password) => {
  const users = getAllUsers();
  return users.find(u => u.email === email && u.password === password);
};

// Lưu session đăng nhập
export const saveSession = (user) => {
  localStorage.setItem('userEmail', user.email);
  localStorage.setItem('userRole', user.role);
  localStorage.setItem('username', user.username);
};

// Xóa session (logout)
export const clearSession = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userRole');
  localStorage.removeItem('username');
};

// Lấy session hiện tại
export const getSession = () => {
  const email = localStorage.getItem('userEmail');
  const role = localStorage.getItem('userRole');
  const username = localStorage.getItem('username');
  
  if (email) {
    return { email, role, username, isLoggedIn: true };
  }
  return { isLoggedIn: false };
};

// Export users ra JSON format (để backup hoặc migrate)
export const exportUsers = () => {
  const users = getAllUsers();
  const dataStr = JSON.stringify(users, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'users_backup.json';
  link.click();
  
  URL.revokeObjectURL(url);
};

// Import users từ JSON (để restore backup)
export const importUsers = (jsonData) => {
  try {
    const users = JSON.parse(jsonData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Khởi tạo users từ users.json (chỉ chạy 1 lần)
export const initializeUsers = (defaultUsers) => {
  const existingUsers = getAllUsers();
  
  // Nếu chưa có users nào, import từ users.json
  if (existingUsers.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
    console.log('✅ Initialized users from users.json');
  }
};
