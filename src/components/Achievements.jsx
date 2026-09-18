import React from 'react';
import { Trophy, Code, Award, ExternalLink, ShieldCheck } from 'lucide-react';

const achievementsList = [
  {
    id: 1,
    title: 'CodeChef Problem Solving',
    detail: '183 Problems Solved',
    desc: 'Demonstrated consistent problem-solving skills across data structures and algorithmic challenges on CodeChef.',
    icon: Code,
    link: 'https://www.codechef.com/users/pride_echo_87'
  },
  {
    id: 2,
    title: 'CodeChef Contest Performance',
    detail: 'Participated in 16 Contests',
    desc: 'Actively competed in timed competitive programming challenges to improve speed, efficiency, and accuracy.',
    icon: Trophy,
    link: 'https://www.codechef.com/users/pride_echo_87'
  },
  {
    id: 3,
    title: 'Smart India Hackathon (SIH)',
    detail: 'Frontend Developer',
    desc: 'Contributed as a Frontend Developer designing responsive UI, developing React components, and integrating APIs.',
    icon: ShieldCheck,
    link: '#leadership'
  },
  {
    id: 4,
    title: 'LeetCode Coding Profile',
    detail: 'Active Developer',
    desc: 'Consistently practicing core algorithmic problem solving and data structures on LeetCode.',
    icon: Award,
    link: 'https://leetcode.com/u/58NiGi24S7/'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Recognitions</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Key milestones, coding achievements, and hackathon contributions.
          </p>
        </div>

        <div className="projects-grid">
          {achievementsList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                    <div className="skill-icon-wrapper" style={{ width: '44px', height: '44px' }}>
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)' }}>{item.title}</h3>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>{item.detail}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>
                </div>

                {item.link.startsWith('http') ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <ExternalLink size={14} /> View Profile / Verification
                  </a>
                ) : (
                  <a 
                    href={item.link} 
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <ShieldCheck size={14} /> View Leadership Details
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
