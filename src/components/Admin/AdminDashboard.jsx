import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoaches } from '../../context/CoachContext';
import { useNews } from '../../context/NewsContext';
import './Admin.css';

const AdminDashboard = () => {
  const { coaches, archivedCoaches, addCoach, deleteCoach, restoreCoach, fetchArchivedCoaches, loading: coachesLoading } = useCoaches();
  const { news, archivedNews, addNews, deleteNews, restoreNews, fetchArchivedNews, loading: newsLoading } = useNews();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('coaches');
  const [showArchive, setShowArchive] = useState(false);

  const [newCoach, setNewCoach] = useState({
    name: '',
    role: '',
    experience: '',
    specialization: '',
    achievements: '',
    image: ''
  });

  const [newNews, setNewNews] = useState({
    title: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (showArchive) {
      if (activeTab === 'coaches') fetchArchivedCoaches();
      if (activeTab === 'news') fetchArchivedNews();
    }
  }, [showArchive, activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('swimmstart_admin');
    navigate('/login');
  };

  const handleCoachSubmit = (e) => {
    e.preventDefault();
    addCoach(newCoach);
    setNewCoach({ name: '', role: '', experience: '', specialization: '', achievements: '', image: '' });
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    addNews(newNews);
    setNewNews({ title: '', description: '', image: '' });
  };

  const isAdmin = localStorage.getItem('swimmstart_admin') === 'true';

  if (!isAdmin) {
    navigate('/login');
    return null;
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Панель управления</h1>
          <div className="admin-actions">
            <div className="tabs">
              <button className={`tab-btn ${activeTab === 'coaches' ? 'active' : ''}`} onClick={() => {setActiveTab('coaches'); setShowArchive(false);}}>Тренеры</button>
              <button className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`} onClick={() => {setActiveTab('news'); setShowArchive(false);}}>Новости</button>
            </div>
            <button onClick={handleLogout} className="btn-logout">Выйти</button>
          </div>
        </div>

        <div className="admin-sub-header">
          <button className={`archive-toggle ${showArchive ? 'active' : ''}`} onClick={() => setShowArchive(!showArchive)}>
            {showArchive ? '← Вернуться к списку' : '📁 Показать архив'}
          </button>
        </div>

        {activeTab === 'coaches' ? (
          <div className="admin-grid">
            {!showArchive && (
              <div className="admin-section">
                <h3>Добавить тренера</h3>
                <form onSubmit={handleCoachSubmit} className="admin-form">
                  <div className="form-group">
                    <label>Имя</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Полное имя" value={newCoach.name} onChange={(e) => setNewCoach({...newCoach, name: e.target.value})} required />
                      <span className="input-icon">👤</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Должность</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Напр. Старший тренер" value={newCoach.role} onChange={(e) => setNewCoach({...newCoach, role: e.target.value})} required />
                      <span className="input-icon">🏷️</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Опыт</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Напр. 10 лет опыта" value={newCoach.experience} onChange={(e) => setNewCoach({...newCoach, experience: e.target.value})} required />
                      <span className="input-icon">⏱️</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Специализация</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Напр. Плавание баттерфляем" value={newCoach.specialization} onChange={(e) => setNewCoach({...newCoach, specialization: e.target.value})} required />
                      <span className="input-icon">🎯</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Достижения</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Напр. Мастер спорта" value={newCoach.achievements} onChange={(e) => setNewCoach({...newCoach, achievements: e.target.value})} required />
                      <span className="input-icon">🏆</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Фотография</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="URL фотографии или путь" value={newCoach.image} onChange={(e) => setNewCoach({...newCoach, image: e.target.value})} required />
                      <span className="input-icon">🖼️</span>
                    </div>
                  </div>
                  <button type="submit" className="btn-add">Добавить тренера</button>
                </form>
              </div>
            )}

            <div className="admin-section full-width">
              <h3>{showArchive ? 'Архив тренеров' : 'Список тренеров'}</h3>
              <div className="admin-coaches-list">
                {coachesLoading ? <p>Загрузка...</p> : 
                  (showArchive ? archivedCoaches : coaches).map(coach => (
                    <div key={coach.id} className="admin-coach-item">
                      <div className="coach-brief">
                        <img src={coach.image} alt={coach.name} />
                        <div>
                          <p className="name">{coach.name}</p>
                          <p className="role">{coach.role}</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        {showArchive ? (
                          <button onClick={() => restoreCoach(coach.id)} className="btn-restore">Восстановить</button>
                        ) : (
                          <button onClick={() => deleteCoach(coach.id)} className="btn-delete">Удалить</button>
                        )}
                      </div>
                    </div>
                  ))
                }
                {(showArchive ? archivedCoaches : coaches).length === 0 && <p className="empty-msg">Пусто</p>}
              </div>
            </div>
          </div>
        ) : (
          <div className="admin-grid">
            {!showArchive && (
              <div className="admin-section">
                <h3>Добавить новость</h3>
                <form onSubmit={handleNewsSubmit} className="admin-form">
                  <div className="form-group">
                    <label>Заголовок</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Заголовок новости" value={newNews.title} onChange={(e) => setNewNews({...newNews, title: e.target.value})} required />
                      <span className="input-icon">📰</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Описание</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Краткое описание" value={newNews.description} onChange={(e) => setNewNews({...newNews, description: e.target.value})} required />
                      <span className="input-icon">📝</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Фотография</label>
                    <div className="input-wrapper">
                      <input type="text" placeholder="URL фотографии или путь" value={newNews.image} onChange={(e) => setNewNews({...newNews, image: e.target.value})} required />
                      <span className="input-icon">🖼️</span>
                    </div>
                  </div>
                  <button type="submit" className="btn-add">Добавить новость</button>
                </form>
              </div>
            )}

            <div className="admin-section full-width">
              <h3>{showArchive ? 'Архив новостей' : 'Список новостей'}</h3>
              <div className="admin-coaches-list">
                {newsLoading ? <p>Загрузка...</p> : 
                  (showArchive ? archivedNews : news).map(item => (
                    <div key={item.id} className="admin-coach-item">
                      <div className="coach-brief">
                        <img src={item.image} alt={item.title} />
                        <div>
                          <p className="name">{item.title}</p>
                          <p className="role" style={{fontSize: '0.8rem'}}>{item.description.substring(0, 50)}...</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        {showArchive ? (
                          <button onClick={() => restoreNews(item.id)} className="btn-restore">Восстановить</button>
                        ) : (
                          <button onClick={() => deleteNews(item.id)} className="btn-delete">Удалить</button>
                        )}
                      </div>
                    </div>
                  ))
                }
                {(showArchive ? archivedNews : news).length === 0 && <p className="empty-msg">Пусто</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
