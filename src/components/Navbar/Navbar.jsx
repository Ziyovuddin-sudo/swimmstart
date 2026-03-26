import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <img src="/nav.png" alt="SWIMMSTART Dolphin Logo" />
          </div>
          <div className="logo-text">
            <span className="brand-name">SWIMMSTART</span>
            <span className="brand-subtitle">Главная</span>
          </div>
        </Link>

        <div className={`navbar-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`navbar-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/treneri" onClick={() => setIsMenuOpen(false)}>Тренеры</Link></li>
            <li><a href="/#o-nas" onClick={() => setIsMenuOpen(false)}>О нас</a></li>
            <li><Link to="/novosti" onClick={() => setIsMenuOpen(false)}>Новости</Link></li>
            {/* Admin link removed from public navbar for security. Use /login to access. */}
          </ul>

          <div className="navbar-cta mobile-cta">
            <button className="btn-register" onClick={() => {
              setIsMenuOpen(false);
              onOpenModal();
            }}>Записаться</button>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-cta desktop-cta">
            <button className="btn-register" onClick={onOpenModal}>Записаться</button>
          </div>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
