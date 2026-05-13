import React from 'react';
import Hero from './components/Hero';
import CoreStrengths from './components/CoreStrengths';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      
      <main className="container">
        <Hero />
        <Experience />
        <CoreStrengths />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
