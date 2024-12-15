import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EduVance</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/Courses">Курсы</Link></li>
          <li><Link to="/Forum">Чат / Форум</Link></li>
          <li><Link to="/About">О нас</Link></li>
          <li><Link to="/dashboard">Личный Кабинет 🪪</Link></li>
          <li><Link to="*"></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;