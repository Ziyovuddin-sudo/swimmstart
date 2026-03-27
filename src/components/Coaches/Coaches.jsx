import React from 'react';
import { useCoaches } from '../../context/CoachContext';
import './Coaches.css';

const Coaches = ({ onOpenModal }) => {
  const { coaches, loading, error } = useCoaches();

  if (loading) return <div className="loading">Загрузка тренеров...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="coaches-section" id="treneri">
      <div className="coaches-container">
        <div className="section-header">
          <span className="section-subtitle">Профессиональная команда</span>
          <h2 className="section-title">Наши <span className="highlight">Тренеры</span></h2>
          <p className="section-desc">
            Ваши достижения — наша главная цель. Тренируйтесь под руководством лучших специалистов.
          </p>
        </div>

        <div className="coaches-grid-wrapper">
          <div className="coaches-grid">
            {(Array.isArray(coaches) ? coaches : []).map((coach) => (
              <div key={coach.id} className="coach-card">
                <div className="coach-image-wrapper">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="coach-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="coach-image-placeholder"
                    style={{ display: coach.image ? 'none' : 'flex' }}
                  >
                    <span className="coach-avatar-letter">
                      {coach.name ? coach.name[0] : '?'}
                    </span>
                  </div>
                  <div className="coach-overlay">
                    <button
                      className="btn-coach-action"
                      onClick={() => onOpenModal(`Тренировка с ${coach.name}`)}
                    >
                      Записаться к тренеру
                    </button>
                  </div>
                </div>
                <div className="coach-info">
                  <div className="coach-header">
                    <h3 className="coach-name">{coach.name}</h3>
                    <span className="coach-experience">{coach.experience}</span>
                  </div>
                  <p className="coach-role">{coach.role}</p>
                  <div className="coach-details">
                    <p><strong>Специализация:</strong> {coach.specialization}</p>
                    <p><strong>Достижения:</strong> {coach.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
