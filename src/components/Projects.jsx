import React, { useState } from 'react';
import { 
  ExternalLink, 
  Leaf, 
  Activity, 
  MessageSquare, 
  GraduationCap, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { GitHubIcon } from './Icons';

const projectsList = [
  {
    id: 'plant-disease',
    title: 'AI-Based Plant Disease Detection System',
    category: 'AI / Full Stack',
    tagline: 'Deep Learning Crop Health Diagnostics & Treatment Recommendations',
    architecture: 'React + Vite → Node.js/Express Backend → Python FastAPI Microservice → PyTorch EfficientNet-B0',
    image: '/projects/plant_disease.jpg',
    icon: Leaf,
    badgeColor: '#22c55e',
    description: 'An intelligent end-to-end agricultural diagnostics system that identifies 38 crop disease classes from leaf images. Combines a reactive frontend with a multi-tier backend that preprocesses imagery, runs deep learning inference, and returns actionable symptoms and treatments with an exportable PDF report.',
    features: [
      'Multi-class PyTorch classification across 38 crop & disease classes using fine-tuned EfficientNet-B0.',
      'Robust image preprocessing pipeline: 224 × 224 RGB resizing with standard ImageNet normalization.',
      'Node.js/Express orchestration backend proxying inference requests to a Python FastAPI ML microservice.',
      'Interactive UI featuring live confidence gauges, raw class classification, disease status, and verified symptoms.',
      'Comprehensive clinical-grade treatment protocols and one-click PDF diagnostic report download.'
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'FastAPI', 'PyTorch', 'EfficientNet-B0', 'Python', 'REST APIs'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87',
    featured: true
  },
  {
    id: 'chest-xray',
    title: 'AI-Based Chest X-Ray Disease Prediction System',
    category: 'AI / Medical Imaging',
    tagline: 'Deep Learning Radiograph Analysis & Pathology Probability Estimation',
    architecture: 'React + Vite Frontend → Python FastAPI Backend → PyTorch DenseNet-121 Inference Engine',
    image: '/projects/chest_xray.jpg',
    icon: Activity,
    badgeColor: '#38bdf8',
    description: 'A deep learning clinical research application designed to assist medical practitioners in evaluating frontal chest radiographs. Employs a DenseNet-121 architecture to calculate thoracic pathology probabilities with strict input verification and ephemeral file handling.',
    features: [
      'FastAPI backend managing secure radiograph image upload, format validation, and ephemeral storage.',
      'PyTorch DenseNet-121 inference engine dynamically loading checkpoint weights specified via MODEL_PATH.',
      'Detailed output dashboard rendering pathology likelihoods, confidence thresholds, and multi-label findings.',
      'Asynchronous API architecture ensuring fast inference turnarounds and smooth UI responsiveness.',
      'Ethical AI implementation designed as an assistive diagnostic tool without claiming unverified clinical certification.'
    ],
    tags: ['React.js', 'Vite', 'FastAPI', 'Python', 'PyTorch', 'DenseNet-121', 'Medical AI', 'REST APIs'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87',
    featured: true
  },
  {
    id: 'chatapp',
    title: 'ChatApp — Real-Time Messaging Platform',
    category: 'MERN Stack',
    tagline: 'Modern Web Communication & Media Sharing',
    architecture: 'React.js → Express.js & Node.js → MongoDB Database',
    icon: MessageSquare,
    badgeColor: '#818cf8',
    description: 'A full-stack MERN web application developed for responsive communication, secure user authentication, and photo sharing across desktop and mobile devices.',
    features: [
      'Responsive chat interface designed for seamless real-time style communication.',
      'Photo uploading and sharing capabilities with image preview.',
      'Secure RESTful API routes handling user sessions and conversation persistence.',
      'Clean MERN stack architecture with optimized MongoDB data schemas.'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87',
    featured: false
  },
  {
    id: 'academic-portal',
    title: 'College Academic Management Portal',
    category: 'MERN Stack',
    tagline: 'Centralized Attendance & Coursework Coordination',
    architecture: 'React.js → Express.js & Node.js → MongoDB Database',
    icon: GraduationCap,
    badgeColor: '#f59e0b',
    description: 'A centralized college academic management system designed to streamline attendance tracking, assignment distribution, grading coordination, and student records.',
    features: [
      'Digital attendance management system with historical records logging.',
      'Coursework and assignment upload portal with evaluation status.',
      'Role-based navigation layouts for student and faculty access.',
      'Modular REST APIs built on Node.js and Express connected to MongoDB.'
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'],
    github: 'https://github.com/pride87',
    demo: 'https://github.com/pride87',
    featured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsList 
    : filter === 'AI / ML'
      ? projectsList.filter(p => p.category.includes('AI'))
      : projectsList.filter(p => p.category.includes('MERN'));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Engineering Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production-oriented Full Stack MERN applications and deep learning AI/ML solutions engineered with modern web frameworks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skill-category-filters" style={{ marginBottom: '2.5rem' }}>
          {['All', 'AI / ML', 'MERN Stack'].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'All' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        <div className="featured-projects-list">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <article key={project.id} className="card featured-project-card">
                {/* Project Image Banner if Available */}
                {project.image && (
                  <div className="project-banner-wrapper">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Interface and Prediction Workflow`} 
                      className="project-banner-img"
                      loading="lazy"
                      width="800"
                      height="450"
                    />
                    <div className="project-banner-badge" style={{ borderColor: project.badgeColor }}>
                      <span className="badge-bullet" style={{ background: project.badgeColor }}></span>
                      {project.category}
                    </div>
                  </div>
                )}

                <div className="project-body">
                  <div className="project-meta-row">
                    <div className="skill-icon-wrapper" style={{ width: '42px', height: '42px', color: project.badgeColor }}>
                      <IconComponent size={22} />
                    </div>
                    <div className="project-heading-block">
                      <div className="project-category-sub">{project.tagline}</div>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>

                  {project.architecture && (
                    <div className="project-arch-box">
                      <Cpu size={15} className="arch-icon" />
                      <span className="arch-text">
                        <strong>Architecture:</strong> {project.architecture}
                      </span>
                    </div>
                  )}

                  <p className="project-desc">{project.description}</p>

                  <div className="project-features-block">
                    <h4 className="features-subheading">Key Implemented Features:</h4>
                    <ul className="project-features">
                      {project.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
                      title="View GitHub Repository"
                    >
                      <GitHubIcon size={16} /> GitHub Source
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-sm"
                        title="View Live Demo or Code"
                      >
                        <ExternalLink size={15} /> Project Details
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
