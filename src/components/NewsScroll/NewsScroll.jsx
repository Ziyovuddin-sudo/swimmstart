import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';
import './NewsScroll.css';

const NewsScroll = () => {
  const { news, loading, error } = useNews();
  const navigate = useNavigate();

  if (loading) return <div className="news-scroll-loading">Загрузка...</div>;
  // If there's an error or no news, we can still show the section or hide it gracefully
  const newsList = Array.isArray(news) ? news : [];
  if (error || newsList.length === 0) {
    console.log('News not visible due to:', error || 'Empty list');
    return null;
  }

  return (
    <section className="news-scroll-section" id="novosti">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Будьте в курсе</span>
          <h2 className="section-title">Последние <span className="highlight">Новости</span></h2>
          <p className="section-desc">Самые интересные и актуальные новости нашего клуба.</p>
        </div>

        <div className="news-scroll-grid">
          {newsList.map((item) => (
            <div key={item.id} className="news-scroll-card" onClick={() => navigate('/novosti')}>
              <div className="news-scroll-image">
                <img src={item.image} alt={item.title} />
                <div className="news-scroll-date">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'Недавно'}
                </div>
              </div>
              <div className="news-scroll-content">
                <h3>{item.title}</h3>
                <p>{(item.description || '').substring(0, 100)}...</p>
                <div className="news-scroll-footer">
                  <span className="read-more">Узнать больше →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsScroll;
