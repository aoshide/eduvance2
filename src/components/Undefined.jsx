import React from 'react';
import { Link } from 'react-router-dom';
import './Undefined.css';

const Undefined = () => {
  return (
    <div className="undefined-page">
      <h2 color='red'>ERROR 404 Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует. Вы можете вернуться на главную страницу.</p>
      <Link to="/" className="back-home-button">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default Undefined;
