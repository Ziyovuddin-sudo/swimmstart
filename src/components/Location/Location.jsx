import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-header">
        <span className="section-tag">Локация</span>
        <h2>Найдите нас на карте</h2>
        <p>Мы находимся в самом сердце города — в отеле Panarams Tashkent Hotel. Удобный заезд и бесплатная парковка для всех гостей.</p>
      </div>

      <div className="location-container">
        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.657140884241!2d69.31052077660686!3d41.31059617130953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d2c7820a93%3A0xa8f3422ef03c25e7!2sPanarams%20Tashkent%20Hotel%2C%20a%20member%20of%20Radisson%20Individuals!5e0!3m2!1sen!2s!4v1710657500000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Panarams Tashkent Hotel Map"
          ></iframe>
        </div>
        
        <div className="contact-card">
          <div className="contact-item">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="info">
              <h4>Адрес</h4>
              <p>ул. Мустакиллик, 2, Ташкент, Узбекистан</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.21-2.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
            </div>
            <div className="info">
              <h4>Телефон</h4>
              <p>+998 94-772-22-95</p>
              <p>+998 78-113-33-37</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="info">
              <h4>Ориентир</h4>
              <p>Panarams Hotel (Radisson Individuals)</p>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/dir//Panarams+Tashkent+Hotel,+a+member+of+Radisson+Individuals/@41.3105962,69.3130957,17z" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="directions-btn"
          >
            Проложить маршрут
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
