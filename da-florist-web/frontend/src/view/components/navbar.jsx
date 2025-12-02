import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './components-style/navbar.css';
import logo from '../../assets/image/logo.png';
import { authAPI } from '../../services/api';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const currentUser = authAPI.getCurrentUser();
    if (currentUser) {
      setIsLoggedIn(true);
      setUser(currentUser);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    authAPI.logout();
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  // Get first letter of username for avatar
  const getInitial = () => {
    return user?.username?.charAt(0).toUpperCase() || 'U';
  };

  return (
    <header className="df-navbar">
      <div className="df-nav-inner">
        <Link to="/" className="df-brand" aria-label="Home">
          <img src={logo} alt="Da.Florist logo" className="df-logo" />
          <span className="df-name">Da.Florerist</span>
        </Link>

        <nav className="df-nav-links" role="navigation" aria-label="Primary">
          <Link to="/" className="df-link">Home</Link>
          <a className="df-link" href="#products">Products</a>
          <a className="df-link" href="#company">Company</a>
          <a className="df-link" href="#resources">Resources</a>
        </nav>

        <div className="df-actions">
          {isLoggedIn ? (
            <div className="profile-container" ref={dropdownRef}>
              <button 
                className="profile-btn" 
                onClick={() => setShowDropdown(!showDropdown)}
                aria-label="User menu"
              >
                <div className="profile-avatar">{getInitial()}</div>
                <span className="profile-email">{user?.username || 'User'}</span>
                <svg className={`dropdown-arrow ${showDropdown ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {showDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="dropdown-avatar">{getInitial()}</div>
                    <div className="dropdown-info">
                      <p className="dropdown-name">{user?.username || 'User'}</p>
                      <p className="dropdown-email">{user?.email || ''}</p>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Profile Settings
                  </Link>
                  <Link to="/cart" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 2L7 6H3l3 14h12l3-14h-4l-2-4H9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="21" r="1" fill="currentColor"/>
                      <circle cx="15" cy="21" r="1" fill="currentColor"/>
                    </svg>
                    My Cart
                  </Link>
                  <Link to="/orders" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    My Orders
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item signout" onClick={handleSignOut}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="df-btn">Buy here!</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
