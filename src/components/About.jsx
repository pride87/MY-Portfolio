import React from 'react';
import { GraduationCap, Building2, Target, Calendar, Server, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Background &amp; Focus</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Aspiring Full Stack MERN Developer committed to building scalable web applications and integrating deep learning systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
              Full Stack MERN Developer &amp; Data Science Student
            </h3>
            
            <p>
              I am a <strong>B.Tech Computer Science and Engineering</strong> student specializing in <strong>Data Science</strong> at <strong>ABES Engineering College</strong> (Class of 2028). My core technical enthusiasm lies in full-stack software development, modern frontend architectures, and data-driven intelligence.
            </p>

            <p>
              My stack centers around the <strong>MERN ecosystem</strong>—building dynamic component interfaces with <strong>React.js</strong> and <strong>JavaScript (ES6+)</strong>, crafting robust RESTful backends with <strong>Node.js</strong> and <strong>Express.js</strong>, and architecting database models using <strong>MongoDB</strong>. I maintain clean version control habits using <strong>Git and GitHub</strong>.
            </p>

            <p>
              Beyond traditional web engineering, I have practical experience integrating AI/ML workflows: connecting responsive React frontends with <strong>Python FastAPI</strong> services to serve fine-tuned <strong>PyTorch deep learning models</strong> (such as EfficientNet for plant disease detection and DenseNet for chest X-ray analysis).
            </p>

            <p>
              Through real-world client delivery, I worked as a <strong>Freelance Web Developer</strong> for <strong>ThePhysiFit</strong>, building responsive web pages, organizing specialized rehabilitation services, and supporting online appointment-booking workflows. I am currently seeking a <strong>Full Stack MERN Developer Internship</strong> to contribute to collaborative engineering teams and build high-impact digital products.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card card">
              <GraduationCap className="info-icon" size={26} />
              <span className="info-label">Degree</span>
              <span className="info-value">B.Tech CSE (Data Science)</span>
            </div>

            <div className="info-card card">
              <Building2 className="info-icon" size={26} />
              <span className="info-label">College</span>
              <span className="info-value">ABES Engineering College</span>
            </div>

            <div className="info-card card">
              <Calendar className="info-icon" size={26} />
              <span className="info-label">Graduation Year</span>
              <span className="info-value">2028 (Currently Enrolled)</span>
            </div>

            <div className="info-card card">
              <Target className="info-icon" size={26} />
              <span className="info-label">Primary Career Goal</span>
              <span className="info-value">Full Stack MERN Developer Intern</span>
            </div>

            <div className="info-card card">
              <Server className="info-icon" size={26} />
              <span className="info-label">Core Tech Stack</span>
              <span className="info-value">MERN (React, Node, Express, MongoDB)</span>
            </div>

            <div className="info-card card">
              <Briefcase className="info-icon" size={26} />
              <span className="info-label">Freelance Work</span>
              <span className="info-value">ThePhysiFit (thephysifit.com)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
