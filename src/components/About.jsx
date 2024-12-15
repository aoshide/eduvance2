import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>О нас</h1>
        <p>Мы стремимся предоставить доступное и качественное образование для всех.</p>
      </section>

      <section className="about-grid">
        <div className="about-grid-item">
          <h2>Наша миссия</h2>
          <p>
            Наша цель — помочь каждому студенту развивать свои знания и навыки, чтобы достигать
            успеха в жизни и карьере. Мы стремимся изменить образовательный процесс, сделать его
            более доступным и эффективным.
          </p>
        </div>

        <div className="about-grid-item">
          <h2>История компании</h2>
          <p>
            Компания EduVance была основана в 2020 году с идеей сделать образование доступным для
            всех. С тех пор мы предлагаем инновационные решения для студентов и преподавателей по
            всему миру.
          </p>
        </div>

        <div className="about-grid-item">
          <h2>Наши ценности</h2>
          <ul>
            <li><strong>Качество:</strong> Предоставляем только лучшие образовательные ресурсы.</li>
            <li><strong>Доступность:</strong> Образование должно быть доступно каждому, независимо от места проживания.</li>
            <li><strong>Инновации:</strong> Внедряем новые технологии для улучшения учебного процесса.</li>
          </ul>
        </div>

        <div className="about-grid-item">
          <h2>Наша команда</h2>
          <p>
            Наша команда состоит из опытных преподавателей, профессионалов в области технологий и
            образования. Мы работаем вместе, чтобы предоставить вам лучшие образовательные ресурсы.
          </p>
        </div>

        <div className="about-grid-item">
          <h2>Контакты</h2>
          <p>
            Если у вас есть вопросы, не стесняйтесь обращаться к нам по адресу:
            <a href="mailto:info@eduvance.com">info@eduvance.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;