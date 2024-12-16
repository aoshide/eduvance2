import React, { useState, useEffect } from 'react';
import './Registration.css';

const Registration = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    age: ''
  });
  
  const [isRegistered, setIsRegistered] = useState(false); // Состояние для отслеживания регистрации

  // Проверяем, была ли уже регистрация при загрузке компонента
  useEffect(() => {
    const storedRegistration = localStorage.getItem('isRegistered');
    if (storedRegistration === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRegistered) {
      onRegister(formData);
      setIsRegistered(true);
      localStorage.setItem('isRegistered', 'true'); // Сохраняем информацию о регистрации в localStorage
    }
  };

  return (
    <div className="registration-modal">
      <div className="modalr-content">
        <h2>Регистрация</h2>
        {isRegistered ? (
          <p>Вы успешно зарегистрированы!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Возраст:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className='rutton'>Зарегистрироваться</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
