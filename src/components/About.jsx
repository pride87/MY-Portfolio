import React from 'react';
import { GraduationCap, Building2, UserCheck, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Background &amp; Focus</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about crafting intuitive frontend experiences and analyzing data to solve real-world problems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
              Engineering Student &amp; Web Developer
            </h3>
            <p>
              I am a B.Tech Computer Science and Engineering student specializing in Data Science at ABES Engineering College. I have a strong interest in frontend development, web technologies, data analysis, and problem solving.
            </p>
            <p>
              I enjoy turning ideas into responsive and interactive web applications. I am currently strengthening my skills in React.js, JavaScript, backend technologies, data analysis, and machine learning while building practical projects.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card card">
              <GraduationCap className="info-icon" size={26} />
              <span className="info-label">Education</span>
              <span className="info-value">B.Tech CSE – Data Science</span>
            </div>

            <div className="info-card card">
              <Building2 className="info-icon" size={26} />
              <span className="info-label">College</span>
              <span className="info-value">ABES Engineering College</span>
            </div>

            <div className="info-card card">
              <UserCheck className="info-icon" size={26} />
              <span className="info-label">Current Status</span>
              <span className="info-value">Student / Fresher</span>
            </div>

            <div className="info-card card">
              <Target className="info-icon" size={26} />
              <span className="info-label">Primary Focus</span>
              <span className="info-value">Frontend Dev &amp; Data Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
