// src/components/courses/LessonDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LessonDetails.css';

const LessonDetails = ({ match }) => {
  // Здесь будем получать данные о текущем уроке
  const lessonId = match.params.lessonId; // lessonId будет передаваться через маршрут

  // Пример данных для уроков
  const lessons = {
    lesson1: {
      title: 'Урок 1: Основы дизайна',
      description: 'В этом уроке мы изучим основы дизайна интерфейсов, принципы композиции и цветовой теории.',
      topics: [
        'Основы композиции в дизайне',
        'Цветовая теория',
        'Типографика',
        'Использование сеток в дизайне',
      ],
    },
    lesson2: {
      title: 'Урок 2: Создание пользовательских интерфейсов',
      description: 'Здесь мы сосредоточимся на проектировании пользовательских интерфейсов (UI) с учетом практических примеров и инструментов.',
      topics: [
        'Процесс создания UI',
        'Принципы юзабилити',
        'Использование инструментов Figma и Sketch',
        'Прототипирование и wireframes',
      ],
    },
    lesson3: {
      title: 'Урок 3: UX-дизайн и исследование пользователей',
      description: 'В этом уроке мы рассмотрим важность пользовательского опыта (UX) и методы исследования для создания эффективных интерфейсов.',
      topics: [
        'Что такое UX-дизайн?',
        'Методы исследования пользователей',
        'Пользовательские персонажи (Personas)',
        'Проверка гипотез и тестирование интерфейсов',
      ],
    },
  };

  const lesson = lessons[lessonId];

  return (
    <div className="lesson-details-container">
      <div className="lesson-card">
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
        <h3>Что мы изучим:</h3>
        <ul>
          {lesson.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <div className="navigation-buttons">
          {/* Кнопки для перехода к следующему уроку или назад */}
          {lessonId !== 'lesson3' && (
            <Link to={`/Courses/lesson/${parseInt(lessonId.slice(-1)) + 1}`} className="btn btn-next">
              Следующий урок
            </Link>
          )}
          <Link to="/Courses" className="btn btn-prev">Назад к курсам</Link>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
