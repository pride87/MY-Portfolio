import React from 'react';
import { ShieldCheck, CheckCircle, Users } from 'lucide-react';

const sihContributions = [
  'Designed a responsive and user-friendly UI.',
  'Developed reusable frontend components using HTML, CSS, JavaScript, and React.js.',
  'Implemented smooth navigation and user interactions.',
  'Integrated frontend with backend APIs.',
  'Focused on responsive design for desktop, tablet, and mobile devices.',
  'Worked on UI/UX improvements and frontend testing.',
  'Collaborated with backend developers and team members for module integration.',
  'Fixed frontend issues and improved usability and performance.'
];

const Leadership = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Teamwork &amp; Competitions</span>
          <h2 className="section-title">Leadership &amp; Activities</h2>
          <p className="section-subtitle">
            Collaborative hackathon development experience and team project contributions.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="skill-icon-wrapper" style={{ width: '52px', height: '52px' }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>Smart India Hackathon (SIH)</h3>
                <span style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>Role: Frontend Developer</span>
              </div>
            </div>
            <span className="project-type-badge" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>National Level Hackathon</span>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            As a Frontend Developer in the Smart India Hackathon (SIH) team, I was responsible for designing and developing the user interface of our project.
          </p>

          <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={18} style={{ color: 'var(--accent-cyan)' }} /> Key Contributions &amp; Responsibilities:
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1rem' }}>
            {sihContributions.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
