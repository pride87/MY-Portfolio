import React from 'react';
import { ExternalLink, MessageSquare, GraduationCap, FileText, Utensils } from 'lucide-react';
import { GitHubIcon } from './Icons';

const projectsList = [
  {
    id: 1,
    title: 'ChatApp',
    tech: 'MERN Stack',
    icon: MessageSquare,
    description: 'A MERN stack-based chat application developed for online communication and photo sharing.',
    features: [
      'Real-time style communication interface',
      'Photo sharing capabilities',
      'User-friendly modern UI',
      'Full MERN architecture'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87'
  },
  {
    id: 2,
    title: 'College Academic Portal',
    tech: 'MERN Stack',
    icon: GraduationCap,
    description: 'A college academic management portal designed to support attendance tracking, assignment management, and centralized academic activities.',
    features: [
      'Attendance tracking system',
      'Assignment upload & grade management',
      'Centralized academic dashboard',
      'Role-based navigation'
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87'
  },
  {
    id: 3,
    title: 'AI Resume Builder',
    tech: 'HTML / CSS / JS / React.js',
    icon: FileText,
    description: 'An AI-focused resume builder interface designed to help users create professional resumes.',
    features: [
      'Dynamic section builder & form inputs',
      'Recruiter-ready layout previews',
      'Responsive design styling',
      'Export & download support'
    ],
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87'
  },
  {
    id: 4,
    title: 'Food Delivery Application',
    tech: 'React.js / JavaScript / CSS',
    icon: Utensils,
    description: 'A responsive food delivery frontend application with food categories, food cards, navigation, and interactive UI.',
    features: [
      'Categorized food item listings',
      'Interactive cart preview UI',
      'Responsive navigation header',
      'Modern UI card animations'
    ],
    tags: ['React.js', 'JavaScript', 'CSS Modules'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Practical web applications and software projects built using modern frontend &amp; fullstack technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projectsList.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="card project-card">
                <div>
                  <div className="project-header">
                    <div className="skill-icon-wrapper" style={{ width: '46px', height: '46px' }}>
                      <IconComponent size={24} />
                    </div>
                    <span className="project-type-badge">{project.tech}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <ul className="project-features">
                    {project.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <GitHubIcon size={15} /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1 }}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
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

export default Projects;
