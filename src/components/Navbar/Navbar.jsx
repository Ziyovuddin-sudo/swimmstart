import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
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

        <ul className="navbar-links">
          <li><Link to="/treneri">Тренеры</Link></li>
          <li><a href="/#o-nas">О нас</a></li>
          <li><Link to="/novosti">Новости</Link></li>
          {/* Admin link removed from public navbar for security. Use /login to access. */}
        </ul>

        <div className="navbar-cta">
          <button className="btn-register" onClick={onOpenModal}>Записаться</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
