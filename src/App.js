import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Courses from './components/Courses';
import Forum from './components/Forum';
import About from './components/About';
import Dashboard from './components/DashBoard';
import Undefined from './components/Undefined';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/About" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
