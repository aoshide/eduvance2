import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Footer() {
  return (
    <footer >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ fontSize: '18px' }}>Образовательный сайт</h4>
          <p>Мы помогаем студентам развиваться и достигать успехов в учебе.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '18px' }}>Быстрые ссылки</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/main " style={{ color: 'white', textDecoration: 'none' }}>Главная</Link></li>
            <li><Link to="/Courses" style={{ color: 'white', textDecoration: 'none' }}>Курсы</Link></li>
            <li><Link to="/Forum" style={{ color: 'white', textDecoration: 'none' }}>Форум</Link></li>
            <li><Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>О нас</Link></li>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Личный Кабинет</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '18px' }}>Связь с нами</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="mailto:info@education.com" style={{ color: 'white', textDecoration: 'none' }}>EduVance@gmail.com</a></li>
            <li><a href="tel:+123456789" style={{ color: 'white', textDecoration: 'none' }}>+222222222</a></li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '95px', fontSize: '14px' }}>
        <p>&copy; 2024 Образовательный сайт. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;