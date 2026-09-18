import React from 'react';
import { Award, Cloud, Cpu, CheckCircle2 } from 'lucide-react';

const certsList = [
  {
    id: 1,
    title: 'Troubleshoot your code using IBM Bob',
    issuer: 'IBM',
    category: 'Code Debugging & Optimization',
    icon: Cpu
  },
  {
    id: 2,
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'AWS Academy',
    category: 'Cloud Computing & Infrastructure',
    icon: Cloud
  },
  {
    id: 3,
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'AI Certification',
    category: 'Artificial Intelligence & Machine Learning',
    icon: Award
  }
];

const Certifications = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and verified course completions in cloud computing, AI, and debugging.
          </p>
        </div>

        <div className="certs-grid">
          {certsList.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div key={cert.id} className="card cert-card">
                <div className="cert-icon">
                  <IconComponent size={28} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', fontWeight: '700' }}>
                    {cert.issuer}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)', margin: '0.35rem 0' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {cert.category}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem', fontSize: '0.8rem', color: '#4ade80' }}>
                    <CheckCircle2 size={14} /> Verified Completion
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

export default Certifications;
