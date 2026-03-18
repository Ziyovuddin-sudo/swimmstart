import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('swimmstart_admin', 'true');
      navigate('/admin');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Admin Login</h2>
        {error && <p className="error-msg">⚠️ {error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                placeholder="Введите пароль" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="input-icon">🔒</span>
            </div>
          </div>
          <button type="submit" className="btn-login">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
