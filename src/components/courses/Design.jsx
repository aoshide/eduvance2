// src/components/courses/Design.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './Design.css';

const Design = () => {
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
      title: 'Урок 1: Основы дизайна',
      description: 'Изучаем основы дизайна, включая композицию, цветовую теорию и типографику.',
      topics: [
        'Основы композиции в дизайне',
        'Цветовая теория',
        'Типографика',
        'Использование сеток в дизайне',
      ],
    },
    {
      title: 'Урок 2: Инструменты дизайнера',
      description: 'Работа с популярными инструментами: Figma, Photoshop, и Sketch.',
      topics: [
        'Как работать с Figma',
        'Основы работы в Photoshop',
        'Создание макетов',
      ],
    },
    {
      title: 'Урок 3: Принципы UX/UI дизайна',
      description: 'Обсуждаем принципы пользовательского опыта (UX) и интерфейса (UI).',
      topics: [
        'Как улучшить UX',
        'Важность навигации',
        'Микровзаимодействия в дизайне',
      ],
    },
    {
      title: 'Урок 4: Прототипирование',
      description: 'Как создавать интерактивные прототипы и тестировать идеи.',
      topics: [
        'Создание прототипов в Figma',
        'Использование InVision',
        'Тестирование дизайнов',
      ],
    },
    {
      title: 'Урок 5: Реальные проекты и кейс-стадии',
      description: 'Работа с реальными проектами и создание портфолио.',
      topics: [
        'Создание реальных проектов',
        'Как собрать кейс-стадии',
        'Работа с клиентами',
      ],
    },
  ];

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>Основы дизайна</h1>
        <p>Этот курс поможет вам понять основы дизайна интерфейсов и применить их на практике.</p>

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

export default Design;
