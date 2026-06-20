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

const Marquee = ({ text, bgClass = "bg-[#e0ef29]", textClass = "text-black" }) => (
  <div className={`relative w-full overflow-hidden ${bgClass} py-3 md:py-5 border-y-2 border-white my-8 md:my-16`}>
    <div className="whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className={`text-2xl md:text-4xl font-display uppercase tracking-widest ${textClass} font-bold`}>
          {text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
        <div className="relative w-32 h-32 flex items-center justify-center border-4 border-white">
          <div className="absolute inset-0 bg-[#e0ef29] animate-pulse"></div>
          <span className="relative font-display text-4xl font-bold text-black z-10">JG</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#e0ef29] selection:text-black">
      <div className="bg-grid" />
      <Navbar />
      <main>
        <Hero />
        
        <Marquee text="SOFTWARE ENGINEER . WEB DEVELOPER . PROBLEM SOLVER" />
        
        <About />
        
        <Marquee text="SKILLS . TECHNOLOGIES . FRAMEWORKS . TOOLS" bgClass="bg-[#0505cb]" textClass="text-white" />
        
        <Skills />
        
        <Marquee text="LATEST PROJECTS . BUILDS . EXPERIMENTS" />
        
        <Projects />
        
        <Marquee text="WORK EXPERIENCE . CAREER . JOURNEY" bgClass="bg-white" textClass="text-black" />
        
        <Experience />
        <Education />
        
        <Marquee text="GET IN TOUCH . COLLABORATE . HIRE ME" bgClass="bg-[#e0ef29]" textClass="text-black" />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
