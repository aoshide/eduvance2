// src/components/courses/ReactIntro.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './react.css';

const ReactIntro = () => {
  const [showModal, setShowModal] = useState(false);
  const [courseDetails, setCourseDetails] = useState({});
  const [progress, setProgress] = useState(0); // Изначально прогресс 0

  const openModal = (details) => {
    setCourseDetails(details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Уроки
  const lessonDetails = [
    {
      title: 'Урок 1: Введение в React',
      description: 'Изучаем основы React: компоненты, props и state.',
      topics: [
        'Что такое React?',
        'Как установить React?',
        'Компоненты и JSX',
        'Props и state в React',
      ],
    },
    {
      title: 'Урок 2: Управление состоянием в React',
      description: 'Погружаемся в управление состоянием и хуки useState и useEffect.',
      topics: [
        'Как использовать useState',
        'Что такое useEffect?',
        'Жизненный цикл компонента',
      ],
    },
    {
      title: 'Урок 3: Роутинг и навигация в React',
      description: 'Добавляем роутинг для создания многостраничных приложений.',
      topics: [
        'Что такое React Router?',
        'Роутинг и маршруты',
        'Параметры маршрутов',
      ],
    },
    {
      title: 'Урок 4: Работа с API в React',
      description: 'Изучаем, как взаимодействовать с внешними API в React.',
      topics: [
        'Как делать HTTP-запросы',
        'Использование axios',
        'Обработка ответов от API',
      ],
    },
    {
      title: 'Урок 5: Создание реальных приложений на React',
      description: 'Заключительный проект: создание полноценного приложения с использованием всех изученных тем.',
      topics: [
        'Создание простого приложения',
        'Разработка интерфейса',
        'Интеграция с внешним API',
      ],
    },
  ];

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>Основы React</h1>
        <p>Изучите React и создавайте динамичные веб-приложения с использованием компоненнтов и хуков.</p>

        {/* Уроки */}
        {lessonDetails.map((lesson, index) => (
          <div
            key={index}
            className="lesson"
            onClick={() => openModal(lesson)}
            style={{ display: progress >= index * 25 ? 'block' : 'none' }}
          >
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>
        ))}

        {/* Модальное окно */}
        <Modal show={showModal} close={closeModal} courseDetails={courseDetails} />

        {/* Прогресс */}
        <div className="progress-container">
          <label htmlFor="progress">Прогресс (%):</label>
          <input
            type="number"
            id="progress"
            value={progress}
            onChange={(e) => updateProgress(Math.min(Math.max(e.target.value, 0), 100))}
            placeholder="Введите прогресс"
          />
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Навигация */}
        <div className="navigation-buttons">
          {progress === 100 ? (
            <Link to="/Courses" className="btn btn-next">Завершить курс</Link>
          ) : (
            <button
              onClick={() => updateProgress(progress + 25)}
              className="btn btn-next"
              disabled={progress >= 100}
            >
              Следующий урок
            </button>
          )}
          <Link to="/Courses" className="btn btn-prev">Назад к курсам</Link>
        </div>
      </div>
    </div>
  );
};

export default ReactIntro;
