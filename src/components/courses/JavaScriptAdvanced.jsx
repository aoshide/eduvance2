// src/components/courses/JavaScriptAdvanced.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './javascript.css';

const JavaScriptAdvanced = () => {
  const [showModal, setShowModal] = useState(false);
  const [courseDetails, setCourseDetails] = useState({});

  const openModal = (details) => {
    setCourseDetails(details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const lessonDetails = {
    title: 'Урок 1: Асинхронность в JavaScript',
    description: 'Этот урок познакомит вас с асинхронным JavaScript, включая промисы, async/await и обработку ошибок.',
    topics: [
      'Промисы и цепочки',
      'Async/await',
      'Обработка ошибок в асинхронном коде',
      'Задачи с асинхронным кодом',
    ],
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>JavaScript для продвинутых</h1>
        <p>Этот курс сосредоточен на более сложных аспектах JavaScript, таких как асинхронность, мемоизация и продвинутые функции.</p>

        <div className="lesson" onClick={() => openModal(lessonDetails)}>
          <h2>Урок 1: Асинхронность в JavaScript</h2>
          <p>Краткое описание урока.</p>
        </div>

        <Modal show={showModal} close={closeModal} courseDetails={courseDetails} />

        <div className="navigation-buttons">
          <Link to="/Courses/javascript" className="btn btn-prev">Назад к курсу: JavaScript для начинающих</Link>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptAdvanced;
