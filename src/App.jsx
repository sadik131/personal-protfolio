import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Project from './Components/Pages/Project';
import Artical from './Components/Pages/Artical';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/artical" element={<Artical />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
