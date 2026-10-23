import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import GitHub from './components/GitHub';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <GitHub />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
