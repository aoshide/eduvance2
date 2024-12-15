import React, { useState } from "react";
import "./CoursesPage.css";

const CoursesPage = () => {
  const courses = [
    { 
      id: 1, 
      title: "React для начинающих", 
      description: "Изучите основы React.js и начните создавать свои приложения.",
      image: "/images/react-course.jpg",
      link: "/course/react"
    },
    { 
      id: 2, 
      title: "JavaScript глубокое погружение", 
      description: "Разберитесь с современным JavaScript, включая ES6+.",
      image: "/images/javascript-course.jpg",
      link: "/course/javascript"
    },
    { 
      id: 3, 
      title: "Веб-дизайн и UX/UI", 
      description: "Научитесь создавать удобные и красивые интерфейсы.",
      image: "/images/design-course.jpg",
      link: "/course/design"
    },
  ];

  return (
    <div className="courses-container">
      <h1>Курсы</h1>
      <div className="courses-list">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const Course = ({ course }) => {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (event) => {
    const value = Math.min(Math.max(event.target.value, 0), 100); // Ограничиваем от 0 до 100
    setProgress(value);
  };

  return (
    <a href={course.link} className="course">
      <div 
        className="course-image" 
        style={{ backgroundImage: `url(${course.image})` }}
      ></div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="progress-container">
        <label htmlFor={`progress-${course.id}`}>Прогресс (%):</label>
        <input
          type="number"
          id={`progress-${course.id}`}
          value={progress}
          onChange={handleProgressChange}
          placeholder="Введите прогресс"
        />
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </a>
  );
};

export default CoursesPage;
