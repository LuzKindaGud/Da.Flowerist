import React from 'react';
import './components-style/navbar.css';
import logo from '../../assets/image/logo.png';

const Navbar = () => {
  return (
    <header className="df-navbar">
      <div className="df-nav-inner">
        <div className="df-brand" aria-label="Home">
          <img src={logo} alt="Da.Florist logo" className="df-logo" />
          <span className="df-name">Da.Florerist</span>
        </div>

        <nav className="df-nav-links" role="navigation" aria-label="Primary">
          <a className="df-link" href="#">Home</a>
          <a className="df-link" href="#">Products</a>
          <a className="df-link " href="#" aria-current="page">Company</a>
          <a className="df-link" href="#">Resources</a>
        </nav>

        <div className="df-actions">
          <button className="df-btn" type="button">Buy here!  </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
