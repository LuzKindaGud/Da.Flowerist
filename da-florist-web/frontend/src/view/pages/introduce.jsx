import React from 'react';
import './pages-style/introduce.css';
import flowerShopImg from '../../assets/image/flowershop.jpg'; 
import tulipImg from '../../assets/image/tulip.png'; 

const Introduce = () => {
  return (
    <section className="introduce-section">
      <div className="introduce-row">
        <div className="introduce-col image-col">
          <div className="image-wrapper">
            <img 
              src={flowerShopImg} 
              alt="Không gian Da Flowerist" 
              className="introduce-img" 
            />
            <div className="img-border"></div>
          </div>
        </div>

        <div className="introduce-col content-col">
          <h4 className="introduce-subtitle">Who am we ?</h4>
          <h2 className="introduce-title">
            Bringing Natural Beauty <br /> Into Your Life
          </h2>
          <p className="introduce-description">
            At <strong>Da.Flowerist</strong>, every flower tells a story. 
We don't just sell flowers, we deliver emotions. With a passion for the art of flower arrangement and meticulous attention to detail, we are committed to bringing the freshest, most unique products to your space.
          </p>
          
          <div className="introduce-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh Flowers Daily</span>
            </div>
          </div>

          <button className="introduce-btn">View Our Story</button>
        </div>
      </div>
      
      {/* --- HÀNG 2: TEXT TRÁI - ẢNH PHẢI (Áp dụng reverse-layout) --- */}
      <div className="introduce-row reverse-layout">
        {/* LƯU Ý: Thứ tự các cột vẫn là Image -> Content trong HTML */}
        <div className="introduce-col image-col">
          <div className="image-wrapper">
            <img 
              src={tulipImg} 
              alt="Nghệ thuật cắm hoa" 
              className="introduce-img" 
            />
            <div className="img-border border-right"></div>
          </div>
        </div>
        
        <div className="introduce-col content-col">
          <h4 className="introduce-subtitle">Art & Passion</h4>
          <h2 className="introduce-title">
            Custom Flower Designs <br /> Just For You
          </h2>
          <p className="introduce-description">
            We believe every customer has a unique aesthetic. 
            The Florist team at <strong>Da.Flowerist</strong> always listens to create 
            bouquets that reflect your personal style. From classic 
            to modern styles, we can meet all your needs.
          </p>
          
          <ul className="introduce-features">
            <li><span className="check-icon">✓</span> Custom Designs</li>
            <li><span className="check-icon">✓</span> 2-Hour Express Delivery</li>
            <li><span className="check-icon">✓</span> 3-Day Freshness Guarantee</li>
          </ul>

          <button className="introduce-btn btn-outline">View Our Collection</button>
        </div>
      </div>
      
      {/* --- HÀNG 3: ẢNH TRÁI - TEXT PHẢI (Mặc định) --- */}
      <div className="introduce-row">
        <div className="introduce-col image-col">
          <div className="image-wrapper">
            <img 
              src={flowerShopImg} 
              alt="Hàng 3" 
              className="introduce-img" 
            />
            <div className="img-border"></div>
          </div>
        </div>

        <div className="introduce-col content-col">
          <h4 className="introduce-subtitle">Commitment</h4>
          <h2 className="introduce-title">
            Fresh Quality <br /> and Dedicated Service
          </h2>
          <p className="introduce-description">
            We take pride in our strict flower selection process, ensuring that every bloom reaching you retains its freshness and natural fragrance. Customer satisfaction is our top priority.
          </p>
          
          <ul className="introduce-features">
            <li><span className="check-icon">✓</span> 24/7 Free Consultation</li>
            <li><span className="check-icon">✓</span> Best Value Guarantee</li>
            <li><span className="check-icon">✓</span> Luxury Gift Wrapping</li>
          </ul>

          <button className="introduce-btn">Contact Us</button>
        </div>
      </div>
      
    </section>
  );
};

export default Introduce;