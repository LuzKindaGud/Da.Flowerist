import React from 'react';
import './pages-style/introduce.css';
import flowershopImg from '../../assets/image/flowershop.jpg';
import tulipImg from '../../assets/image/tulip.png';

const Introduce = () => {
  return (
    <section className="introduce-section">
      {/* Hàng 1: Text trái, Ảnh phải */}
      <div className="introduce-row row-1">
        <div className="introduce-content">
          <h2 className="introduce-title">Who are we?</h2>
          <p className="introduce-text">
            We are a fresh flower shop with a passion for bringing the beauty of nature into your life. Here, each flower is not just a gift, but also a story, an emotion that we cherish and convey.
          </p>
        </div>
        <div className="introduce-image">
          <img src={flowershopImg} alt="Our flower shop" />
        </div>
      </div>

      {/* Hàng 2: Ảnh trái, Text phải */}
      <div className="introduce-row row-2">
        <div className="introduce-image">
          <img src={tulipImg} alt="Fresh flowers" />
        </div>
        <div className="introduce-content">
          <h2 className="introduce-title">What we do</h2>
          <p className="introduce-text">
            Chúng tôi chuyên cung cấp các loại hoa tươi được nhập khẩu và chọn lọc kỹ lưỡng. 
            Từ những bó hoa đơn giản đến những thiết kế phức tạp cho sự kiện lớn, chúng tôi cam kết 
            mang đến chất lượng tốt nhất và dịch vụ tận tâm cho mọi khách hàng.
          </p>
        </div>
        <div className="introduce-image">
          <img src={tulipImg} alt="Fresh flowers" />
        </div>
      </div>

      {/* Hàng 3: Text trái, Ảnh phải */}
      <div className="introduce-row row-3">
        <div className="introduce-content">
          <h2 className="introduce-title">How we do it</h2>
          <p className="introduce-text">
            Với quy trình làm việc chuyên nghiệp, chúng tôi đảm bảo mỗi bó hoa được chăm sóc tỉ mỉ 
            từ khâu chọn lựa nguyên liệu đến thiết kế và giao hàng. Đội ngũ nhân viên giàu kinh nghiệm 
            luôn sẵn sàng tư vấn và hỗ trợ bạn tạo nên những món quà hoàn hảo.
          </p>
        </div>
        <div className="introduce-image">
          <img src={flowershopImg} alt="Our process" />
        </div>
      </div>
    </section>
  );
};

export default Introduce;