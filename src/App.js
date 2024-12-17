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

function App() {
  return (
    <Router>
      <Header />
      <main>
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
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
