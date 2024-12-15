import React from 'react';
import './Modal.css';

const Modal = ({ show, close, courseDetails }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={close}>X</button>
        <h2>{courseDetails.title}</h2>
        <p>{courseDetails.description}</p>
        <h3>Что мы изучим:</h3>
        <ul>
          {courseDetails.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        {/* Добавляем раздел "Изучение" */}
        <h3>Изучение:</h3>
        <div className="lesson-content">
          {courseDetails.studyContent ? (
            <div>
              <p>{courseDetails.studyContent}</p>
              {/* Можно добавить другие типы контента, например, изображения или видеоматериалы */}
            </div>
          ) : (
            <p>Здесь будет контент для урока.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
