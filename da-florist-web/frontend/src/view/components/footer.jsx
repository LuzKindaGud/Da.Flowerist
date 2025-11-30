import React from 'react';
import './components-style/footer.css';
import logo from '../../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="df-footer" role="contentinfo">
      <div className="df-footer-inner">
        <div className="df-footer-brand">
          <img src={logo} alt="Da.Florist logo" className="df-footer-logo" />
          <div className="df-footer-copy">
            <small>©{new Date().getFullYear()} Da.Florist</small>
            <nav className="df-footer-legal" aria-label="Legal">
              <a href="#">Terms of Service</a>
              <span> | </span>
              <a href="#">Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className="df-footer-columns" aria-hidden={false}>
          <div className="df-col">
            <h4>Products</h4>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Log in</a>
            <a href="#">Partnerships</a>
          </div>

          <div className="df-col">
            <h4>About us</h4>
            <a href="#">About Da.Florist</a>
            <a href="#">Contact us</a>
            <a href="#">Features</a>
          </div>

          <div className="df-col">
            <h4>Resources</h4>
            <a href="#">Help center</a>
            <a href="#">Blog</a>
          </div>

          <div className="df-col df-col-contact">
            <h4>Get in touch</h4>
            <p className="df-contact-note">Questions or feedback? We'd love to hear from you.</p>
            <div className="df-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <svg className="df-icon df-icon--large" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" preserveAspectRatio="xMidYMid meet" width="28" height="28" fill="currentColor" aria-hidden>
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg className="df-icon df-icon--large" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" width="28" height="28" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22V8.98zM8.99 8.98h4.37v2.06h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.23c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.79V24H8.99V8.98z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;