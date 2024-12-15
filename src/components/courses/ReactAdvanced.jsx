// src/components/courses/ReactAdvanced.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './react.css';

const ReactAdvanced = () => {
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
    title: 'Урок 1: Хуки в React',
    description: 'В этом уроке мы изучим React хуки, включая useState, useEffect, и кастомные хуки.',
    topics: [
      'Что такое хуки?',
      'useState и useEffect',
      'Кастомные хуки',
      'useMemo и useCallback',
    ],
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>React для продвинутых</h1>
        <p>Этот курс углубляет ваше понимание React и включает более сложные концепции и хуки.</p>

        <div className="lesson" onClick={() => openModal(lessonDetails)}>
          <h2>Урок 1: Хуки в React</h2>
          <p>Краткое описание урока.</p>
        </div>

        <Modal show={showModal} close={closeModal} courseDetails={courseDetails} />

        <div className="navigation-buttons">
          <Link to="/Courses/react" className="btn btn-prev">Назад к курсу: React для начинающих</Link>
        </div>
      </div>
    </div>
  );
};

export default ReactAdvanced;
