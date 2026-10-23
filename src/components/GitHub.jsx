import React, { useState, useEffect } from 'react';
import { Star, GitFork, BookOpen, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './Icons';

const fallbackRepos = [
  {
    name: 'Plant-Disease-Detection-System',
    description: 'AI agricultural diagnostics platform: React + Express + FastAPI + PyTorch EfficientNet-B0 predicting 38 plant disease classes.',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
    html_url: 'https://github.com/pride87'
  },
  {
    name: 'Chest-X-Ray-Disease-Prediction',
    description: 'Deep learning thoracic radiograph analysis system powered by PyTorch DenseNet-121 and FastAPI backend.',
    stargazers_count: 2,
    forks_count: 1,
    language: 'Python',
    html_url: 'https://github.com/pride87'
  },
  {
    name: 'ChatApp',
    description: 'A MERN stack-based chat application developed for online communication and photo sharing.',
    stargazers_count: 2,
    forks_count: 1,
    language: 'JavaScript',
    html_url: 'https://github.com/pride87'
  },
  {
    name: 'College-Academic-Portal',
    description: 'A college academic management portal designed to support attendance tracking and assignment management.',
    stargazers_count: 2,
    forks_count: 0,
    language: 'JavaScript',
    html_url: 'https://github.com/pride87'
  }
];

const GitHub = () => {
  const [repos, setRepos] = useState(fallbackRepos);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/pride87/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch {
        console.log('Using default repository showcase list.');
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Open Source</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            Explore code repositories, open-source projects, and ongoing development on GitHub.
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-grid" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', gridTemplateColumns: '1fr 1fr' }}>
          <div className="stat-box card">
            <BookOpen size={28} style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }} />
            <div className="stat-num">23</div>
            <div className="stat-lbl">Public Repositories</div>
          </div>
          <div className="stat-box card">
            <Star size={28} style={{ color: '#fde047', marginBottom: '0.5rem' }} />
            <div className="stat-num">7</div>
            <div className="stat-lbl">GitHub Stars</div>
          </div>
        </div>

        {/* Repo Showcase Grid */}
        <div className="projects-grid" style={{ marginBottom: '2.5rem' }}>
          {repos.slice(0, 4).map((repo) => (
            <div key={repo.name} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={18} style={{ color: 'var(--accent-cyan)' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                      {repo.name}
                    </h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {repo.description || 'Public repository focused on web development and computer science.'}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  {repo.language && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <GitFork size={14} /> {repo.forks_count || 0}
                  </span>
                </div>

                <a 
                  href={repo.html_url || 'https://github.com/pride87'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <ExternalLink size={14} /> View Repository
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href="https://github.com/pride87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <GitHubIcon size={18} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
