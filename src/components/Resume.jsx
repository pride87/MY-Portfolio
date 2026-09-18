import React from 'react';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="resume-box">
          <div className="skill-icon-wrapper" style={{ width: '64px', height: '64px', margin: '0 auto 1.25rem auto' }}>
            <FileText size={32} />
          </div>

          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Resume
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 1.75rem auto', lineHeight: '1.7' }}>
            Download my resume to learn more about my education, technical skills, projects, certifications, and achievements.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} /> Recruiter Friendly
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} /> Verified Background
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} /> Standard PDF Format
            </span>
          </div>

          <div className="resume-actions">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <ExternalLink size={18} /> View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download="Abhishek_Rathor_Resume.pdf" 
              className="btn btn-primary"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
