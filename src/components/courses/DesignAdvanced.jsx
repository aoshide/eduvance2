// src/components/courses/DesignAdvanced.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './Design.css';

const DesignAdvanced = () => {
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
    title: 'Урок 1: Продвинутые принципы UX/UI',
    description: 'В этом уроке мы изучим более сложные принципы UX/UI дизайна и создание гибких интерфейсов.',
    topics: [
      'Сложные принципы UX-дизайна',
      'Интерфейсы с динамическими элементами',
      'Принципы создания адаптивных интерфейсов',
      'Психология восприятия дизайна',
    ],
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h1>Дизайн для продвинутых</h1>
        <p>Этот курс углубляется в более сложные аспекты UX/UI дизайна, включая психологию восприятия и создание продвинутых интерфейсов.</p>

        <div className="lesson" onClick={() => openModal(lessonDetails)}>
          <h2>Урок 1: Продвинутые принципы UX/UI</h2>
          <p>Краткое описание урока.</p>
        </div>

        <Modal show={showModal} close={closeModal} courseDetails={courseDetails} />

        <div className="navigation-buttons">
          <Link to="/Courses/design" className="btn btn-prev">Назад к курсу: Дизайн для начинающих</Link>
        </div>
      </div>
    </div>
  );
};

export default DesignAdvanced;
