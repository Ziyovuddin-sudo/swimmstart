import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';
import './Slider.css';

const Slider = () => {
  const { news, loading, error } = useNews();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent(current === news.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? news.length - 1 : current - 1);
  };

  if (loading) return <div className="loading" style={{textAlign: 'center', padding: '100px', color: '#38bdf8'}}>Загрузка новостей...</div>;
  
  if (news.length === 0) {
    return (
      <section className="slider-section" id="novosti">
        <div className="slider-header">
          <h2>Новости заведения</h2>
          <p style={{color: '#94a3b8', marginTop: '20px'}}>Пока нет активных новостей.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="slider-section" id="novosti">
      <div className="slider-header">
        <span className="section-subtitle">Будьте в курсе</span>
        <h2>Последние <span className="highlight">Новости</span></h2>
      </div>
      
      <div className="slider-container">
        <button className="nav-btn prev" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button className="nav-btn next" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="slider-wrapper">
          {news.map((item, index) => (
            <div 
              className={index === current ? 'slide active' : 'slide'} 
              key={item.id}
            >
              {index === current && (
                <div className="card-outer">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} className="slide-image" />
                  </div>
                  <div className="card-content" onClick={() => navigate('/novosti')} style={{cursor: 'pointer'}}>
                    <div className="card-date">{new Date(item.created_at).toLocaleDateString()}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="read-more-btn">Узнать больше</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="dot-indicators">
          {news.map((_, index) => (
            <span 
              key={index} 
              className={index === current ? 'dot active' : 'dot'}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
