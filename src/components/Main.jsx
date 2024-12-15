import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div className="container">
      <div className="intro">
        <p className="tagline">Образование — путь к успеху и самореализации</p>
        <p className="welcome">Добро пожаловать в мир знаний, где ваши мечты превращаются в реальность!</p>
      </div>

      <div className="section">
        <h2 className="section-title">Что мы предлагаем:</h2>
        <ul className="offer-list">
          <li>Курсы и тренинги: современные программы,программирование, адаптированные под ваши интересы и карьерные устремления.</li>
          <li>Онлайн-обучение: учитесь в удобное время и в удобном месте, оставаясь на шаг впереди.</li>
          <li>Профессиональное развитие: мастер-классы, семинары и индивидуальные консультации для роста в карьере.</li>
          <li>Развитие: увлекательное обучение, которое развивает навыки и открывает таланты с раннего возраста.</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Почему выбирают нас:</h2>
        <ul className="benefits-list">
          <li>Качество обучения: наши программы разрабатываются опытными педагогами и специалистами.</li>
          <li>Доступность: мы верим, что образование должно быть доступным для каждого.</li>
          <li>Гибкость: учитесь в своём темпе, без компромиссов.</li>
          <li>Сообщество: станьте частью вдохновляющей образовательной экосистемы.</li>
        </ul>
      </div>

      <div className="cta">
        <h2 className="cta-title">Как начать?</h2>
        <ol className="steps-list">
          <li>Выберите программу или курс, который вам подходит.</li>
          <li>Зарегистрируйтесь онлайн или свяжитесь с нами для консультации.</li>
          <li>Сделайте первый шаг к своему будущему уже сегодня!</li>
        </ol>
        <div class="button-transitioncont">
        <Link to="/courses" className="button-transition">Перейти на страницу Курсы</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
