import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Courses from './components/courses/Courses';
import Forum from './components/forum/Forum';
import About from './components/about/About';
import Dashboard from './components/DashBoard';
import Undefined from './components/Undefined';
import JavaScript from './components/courses/JavaScript';
import Design from './components/courses/Design';
import ReactIntro from './components/courses/ReactIntro';
import LessonDetails from './components/courses/LessonDetails';
import ReactAdvanced from './components/courses/ReactAdvanced';
import JavaScriptAdvanced from './components/courses/JavaScriptAdvanced';
import DesignAdvanced from './components/courses/DesignAdvanced';
import Registration from './components/Registration';

function App() {
  const [userData, setUserData] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Проверяем в localStorage, был ли пользователь зарегистрирован
    const storedRegistration = localStorage.getItem('isRegistered');
    if (storedRegistration === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleRegistration = (data) => {
    setUserData(data);
    setIsRegistered(true);
    console.log('User registered:', data);
    localStorage.setItem('isRegistered', 'true'); // Сохраняем информацию о регистрации
  };

  return (
    <Router>
      <Header />
      <main>
        {!isRegistered && <Registration onRegister={handleRegistration} />}
        {isRegistered && (
          <Routes>
            <Route path="/" element={<Main userData={userData} />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/About" element={<About />} />
            <Route path="/dashboard" element={<Dashboard userData={userData} />} />
            <Route path="*" element={<Undefined />} />
            <Route path="/Courses/design" element={<Design />} />
            <Route path="/Courses/javascript" element={<JavaScript />} />
            <Route path="/courses/react" element={<ReactIntro />} />
            <Route path="/Courses/lesson/:lessonId" component={LessonDetails} />
            <Route path="/Courses/react-advanced" component={ReactAdvanced} />
            <Route path="/Courses/javascript-advanced" component={JavaScriptAdvanced} />
            <Route path="/Courses/design-advanced" component={DesignAdvanced} />
          </Routes>
        )}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
