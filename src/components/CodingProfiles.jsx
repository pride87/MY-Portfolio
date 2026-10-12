import React from 'react';
import { Code, ExternalLink, CheckCircle2, Trophy } from 'lucide-react';

const CodingProfiles = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Problem Solving &amp; DSA</span>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle">
            Active competitive programming performance and problem-solving metrics across top coding platforms.
          </p>
        </div>

        <div className="profiles-grid">
          {/* CodeChef Card */}
          <div className="card profile-card">
            <div>
              <div className="profile-card-header">
                <div className="platform-info">
                  <Code className="info-icon" size={32} />
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>CODECHEF</h3>
                    <span className="profile-username">@pride_echo_87</span>
                  </div>
                </div>
                <span className="badge-pill">1★ / Rookie League</span>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-num">931</div>
                  <div className="stat-lbl">Rating</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">183</div>
                  <div className="stat-lbl">Problems Solved</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">16</div>
                  <div className="stat-lbl">Contests</div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Regular participant in CodeChef Starters and long challenges, solving algorithmic problems focused on data structures and dynamic programming.
              </p>
            </div>

            <a 
              href="https://www.codechef.com/users/pride_echo_87" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <ExternalLink size={16} /> View CodeChef Profile
            </a>
          </div>

          {/* LeetCode Card */}
          <div className="card profile-card">
            <div>
              <div className="profile-card-header">
                <div className="platform-info">
                  <Trophy className="info-icon" size={32} style={{ color: '#f59e0b' }} />
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>LEETCODE</h3>
                    <span className="profile-username">@58NiGi24S7</span>
                  </div>
                </div>
                <span className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: 'var(--accent-cyan)' }}>
                  Active Developer
                </span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', textAlign: 'center' }}>
                <CheckCircle2 size={32} style={{ color: 'var(--accent-cyan)', margin: '0 auto 0.5rem auto' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  Verified LeetCode Handle
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Solving daily coding challenges and practice problems in Data Structures and Algorithms.
                </p>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Focusing on core computer science fundamentals, array manipulation, string algorithms, and recursion.
              </p>
            </div>

            <a 
              href="https://leetcode.com/u/58NiGi24S7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <ExternalLink size={16} /> View LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
