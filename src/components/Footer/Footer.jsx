import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50C20 50 35 30 55 35C75 40 85 60 85 60C85 60 70 75 50 70C30 65 20 50 20 50Z" fill="#38BDF8"/>
                <circle cx="65" cy="45" r="3" fill="white"/>
                <path d="M25 55C25 55 35 65 50 60" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="logo-text">SWIMM<span className="highlight">START</span></span>
            </div>
            <p className="brand-desc">
              Ваш путь к здоровью и силе начинается с нами. Профессиональные тренировки, современный бассейн и хаммам для вашего идеального отдыха.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/swimmstart/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Тренеры</a></li>
                <li><a href="#">Новости</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Услуги</h4>
              <ul>
                <li><a href="#">Бассейн</a></li>
                <li><a href="#">Тренажерный зал</a></li>
                <li><a href="#">Хаммам</a></li>
                <li><a href="#">Массаж</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Контакты</h4>
              <ul>
                <li><a href="tel:+998947722295">+998 94-772-22-95</a></li>
                <li><a href="tel:+998781133337">+998 78-113-33-37</a></li>
                <li><a href="mailto:swimmstart.uz@gmail.com">swimmstart.uz@gmail.com</a></li>
                <li>Бойкургон 2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Swimmstart. Все права защищены.</p>
          <div className="footer-legal">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия пользования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
