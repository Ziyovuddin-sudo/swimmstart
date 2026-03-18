import React, { useState } from 'react';
import './RegisterModal.css';

const RegisterModal = ({ isOpen, onClose, preSelectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Бассейн'
  });

  React.useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService, isOpen]);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const BOT_TOKEN = '8748348453:AAEdv_LaFbh5iMQKbMF83C0ieRRGKnbBA5k';
  const CHAT_ID = '8583556869'; // Updated to user's actual chat ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const message = `
<b>🚀 Новая заявка с сайта!</b>
<b>👤 Имя:</b> ${formData.name}
<b>📞 Телефон:</b> ${formData.phone}
<b>🎯 Услуга:</b> ${formData.service}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', phone: '', service: 'Бассейн' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {status === 'success' ? (
          <div className="status-message success">
            <div className="success-icon">✓</div>
            <h3>Заявка принята!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Записаться на тренировку</h2>
              <p>Оставьте свои контакты, и мы подберем для вас идеальное время.</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label>Ваше имя</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Номер телефона</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Интересующая услуга</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Бассейн">Бассейн</option>
                  <option value="Тренажерный зал">Тренажерный зал</option>
                  <option value="Хаммам">Хаммам</option>
                  <option value="Индивидуальное обучение">Индивидуальное обучение</option>
                  <option value="Массаж">Массаж</option>
                </select>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              {status === 'error' && (
                <p className="error-text">Произошла ошибка. Попробуйте снова или позвоните нам.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
