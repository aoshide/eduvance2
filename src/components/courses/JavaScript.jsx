import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './javascript.css';

const JavaScript = () => {
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
      title: 'Урок 1: Основы JavaScript',
      description: 'Изучим переменные, типы данных и основные операторы в JavaScript.',
      topics: [
        'Что такое переменные и типы данных?',
        'Операторы в JavaScript',
        'Условия и циклы',
        'Функции и области видимости',
      ],
      studyContent: ` 1.Переменные и типы данных
Переменные: Хранят данные, объявляются с помощью let, const, или var.
Типы данных:
Примитивные: number, string, boolean, null, undefined, symbol.
Объекты: структуры данных, такие как массивы и функции.         
"let age = 25; // number
let name = "John"; // string
let isActive = true; // boolean",
 2. Операторы
Арифметические: +, -, *, /, %.
Сравнения: ==, ===, !=, >, <.
Логические: &&, ||, !.
Присваивания: =, +=, -=, *=, /=."let result = 10 + 5; // 15"
 3. Условия и циклы
Условия (if, else):
javascript

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}  Циклы:
for: выполняет блок кода несколько раз.
while: выполняет блок кода, пока условие истинно.
do...while: выполняет блок хотя бы один раз.
javascript

"for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}"
`,
    },
    {
      title: 'Урок 2: Асинхронность в JavaScript',
      description: 'Работа с асинхронным кодом: callbacks, promises и async/await.',
      topics: [
        'Что такое асинхронность?',
        'Callbacks в JavaScript',
        'Promises и их использование',
        'Async/Await',
      ],
      studyContent: `Этот урок поможет вам понять, как работают асинхронные операции в JavaScript, а также как эффективно использовать promises и async/await для обработки асинхронного кода.`,
    },
    {
      title: 'Урок 3: Работа с DOM',
      description: 'Научимся манипулировать DOM и работать с элементами на странице.',
      topics: [
        'Что такое DOM?',
        'Изменение элементов DOM',
        'Обработка событий',
      ],
      studyContent: `В этом уроке мы познакомимся с понятием DOM и научимся изменять элементы на веб-странице с помощью JavaScript. Также разберем, как обрабатывать события, такие как клики и наведение мыши.`,
    },
    {
      title: 'Урок 4: Модули и Classes в JavaScript',
      description: 'Работа с модулями и классами для улучшения структуры кода.',
      topics: [
        'Модули в JavaScript',
        'Создание классов',
        'Наследование классов',
      ],
      studyContent: `Этот урок научит вас использовать модули и классы в JavaScript. Мы разберем, как создавать модули, а также создадим классы и научимся работать с наследованием.`,
    },
    {
      title: 'Урок 5: Реальные проекты на JavaScript',
      description: 'Практика: создание реальных проектов с использованием JavaScript.',
      topics: [
        'Работа с реальными проектами',
        'Разработка приложений с использованием DOM',
        'Создание API с использованием fetch',
      ],
      studyContent: `На пятом уроке мы приступим к созданию реальных проектов с использованием JavaScript, а также рассмотрим, как создавать простые API с использованием fetch.`,
    },
  ];

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>JavaScript для начинающих</h1>
        <p>Изучите основы JavaScript и начните разрабатывать веб-приложения.</p>

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

export default JavaScript;
