import React, { useState, useEffect } from 'react';
import { Download, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-badge">AR</span>
          <span>Abhishek Rathor</span>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
          {mobileMenuOpen && (
            <li className="mobile-actions" style={{ marginTop: '1rem', width: '100%' }}>
              <a 
                href="/resume.pdf" 
                download="Abhishek_Rathor_Resume.pdf" 
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '0.75rem' }}
                onClick={closeMenu}
              >
                <Download size={16} /> Download Resume
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={closeMenu}
              >
                <Mail size={16} /> Contact Me
              </a>
            </li>
          )}
        </ul>

        <div className="nav-actions">
          <a href="/resume.pdf" download="Abhishek_Rathor_Resume.pdf" className="btn btn-primary btn-sm">
            <Download size={15} /> Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary btn-sm">
            <Mail size={15} /> Contact Me
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
