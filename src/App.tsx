import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NestlandVelhe from './pages/NestlandVelhe';
import NestlandBhor from './pages/NestlandBhor';
import Analytics from './components/Analytics';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Analytics />
      <div className="min-h-screen">
        <Header scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nestland-velhe" element={<NestlandVelhe />} />
          <Route path="/nestland-bhor" element={<NestlandBhor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
