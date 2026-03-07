import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-primary z-[9999]">
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <div className="loader-ring absolute inset-0 rounded-full border-2 border-transparent"></div>
          <div className="loader-ring absolute inset-0 rounded-full border-2 border-transparent"></div>
          <div className="loader-ring absolute inset-0 rounded-full border-2 border-transparent"></div>
          <span className="font-mono text-xl font-bold text-gradient">JG</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="bg-grid" />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
