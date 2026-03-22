import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Profiles from './components/Profiles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 text-slate-300 min-h-screen relative overflow-x-hidden w-full font-sans">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-dark-900"></div>
      
      <Navbar />
      
      <main className="w-full max-w-[100vw] overflow-hidden flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Profiles />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
