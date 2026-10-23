import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Specialization: Data Science',
    institution: 'ABES Engineering College',
    duration: '2024 – 2028',
    expectedGrad: 'Expected Graduation: 2028',
    grade: 'CGPA: 6.7',
    icon: GraduationCap,
    current: true
  },
  {
    id: 2,
    degree: 'Class XII (Senior Secondary)',
    specialization: 'CBSE Board',
    institution: 'Arya Kama Public School, Greater Noida',
    duration: 'Completed',
    expectedGrad: 'Senior Secondary Certificate',
    grade: 'Score: 67%',
    icon: School,
    current: false
  },
  {
    id: 3,
    degree: 'Class X (Secondary)',
    specialization: 'CBSE Board',
    institution: 'Arya Kama Public School, Greater Noida',
    duration: 'Completed',
    expectedGrad: 'Secondary School Examination',
    grade: 'Score: 64%',
    icon: BookOpen,
    current: false
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Academic Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering education timeline and academic qualifications in Computer Science &amp; Data Science.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="card" style={{ padding: '1.5rem 1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="timeline-date">{item.duration}</span>
                    {item.current && (
                      <span className="project-type-badge" style={{ fontSize: '0.75rem' }}>
                        Graduation 2028 • Currently Enrolled
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-title" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <IconComponent size={20} style={{ color: 'var(--accent-cyan)' }} />
                    {item.degree}
                  </h3>
                  
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
                    {item.specialization}
                  </div>

                  <p className="timeline-subtitle">{item.institution}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                      {item.grade}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {item.expectedGrad}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
