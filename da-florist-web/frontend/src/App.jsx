import { useEffect } from 'react';
// 1. Import thư viện Router
import { Routes, Route } from 'react-router-dom';

// 2. Import các components cũ
import Navbar from './view/components/navbar';
import Home from './view/pages/home';
import Footer from './view/components/footer';
import CurvedLoop from './view/pages/curvedLoop';
import CTA from './view/pages/CTA';
import ProductSlider from './view/pages/productSlider';
import Introduce from './view/pages/introduce';
import ScrollToTop from './view/components/ScrollToTop';

// 3. Import các trang Login/Register
import Login from './view/pages/login';
import Register from './view/pages/register';

// 4. Import user storage và default users
import { initializeUsers } from './utils/userStorage';
import USERS_DATA from './view/data/users.json';

function App() {
  // Khởi tạo users từ users.json vào localStorage (chỉ chạy 1 lần)
  useEffect(() => {
    initializeUsers(USERS_DATA);
  }, []);
  return (
    <>
      {/* Component tự động scroll lên đầu trang khi route thay đổi */}
      <ScrollToTop />
      
      {/* Navbar luôn nằm trên cùng ở mọi trang */}
      <Navbar />

      {/* Khu vực nội dung thay đổi */}
      <Routes>
        
        {/* TRANG CHỦ: Gom nhóm tất cả component Landing Page vào path="/" */}
        <Route path="/" element={
          <>
            <Home />
            <CurvedLoop 
                  marqueeText="&#x2022; SALE OFF 36% XMAS"
                  speed={1}
                  curveAmount={0}
                  interactive={true}
            />
            <Introduce />
            <ProductSlider />
            <CTA />
          </>
        } />

        {/* TRANG LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* TRANG REGISTER */}
        <Route path="/register" element={<Register />} />

      </Routes>

      {/* Footer luôn nằm dưới cùng ở mọi trang */}
      <Footer />
    </>
  );
}

export default App;