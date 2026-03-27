import React from 'react';
import { useNews } from '../../context/NewsContext';
import './NewsPage.css';

const NewsPage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <div className="news-page-loading">Загрузка новостей...</div>;
  if (error) return <div className="news-page-error">{error}</div>;

  return (
    <div className="news-page">
      <header className="news-page-header">
        <div className="container">
          <span className="subtitle">Последние события</span>
          <h1>Наши <span className="highlight">Новости</span></h1>
          <p>Следите за жизнью нашего клуба и узнавайте о новых возможностях первыми.</p>
        </div>
      </header>

      <section className="news-grid-section">
        <div className="container">
          <div className="news-grid">
            {(Array.isArray(news) ? news : []).map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="news-date">
                    {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'Недавно'}
                  </div>
                </div>
                <div className="news-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="read-more-btn">Читать полностью</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
