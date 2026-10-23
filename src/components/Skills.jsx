import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Cpu, 
  Terminal, 
  Layout, 
  Globe, 
  Server, 
  Database, 
  LineChart, 
  Brain, 
  GitBranch, 
  Wrench, 
  BookOpen, 
  Layers, 
  Send,
  Sparkles,
  Binary
} from 'lucide-react';
import { GitHubIcon } from './Icons';

const skillsData = [
  // 1. Frontend
  { name: 'React.js', category: 'Frontend', icon: Layers, highlight: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: FileCode, highlight: true },
  { name: 'HTML5', category: 'Frontend', icon: Layout },
  { name: 'CSS3 / Vanilla CSS', category: 'Frontend', icon: Globe },
  { name: 'Responsive Web Design', category: 'Frontend', icon: Layout },
  { name: 'Vite', category: 'Frontend', icon: Sparkles },

  // 2. Backend
  { name: 'Node.js', category: 'Backend', icon: Server, highlight: true },
  { name: 'Express.js', category: 'Backend', icon: Server, highlight: true },
  { name: 'RESTful APIs', category: 'Backend', icon: Layers, highlight: true },
  { name: 'FastAPI (Python)', category: 'Backend', icon: Terminal, highlight: true },
  { name: 'API Middleware & Routing', category: 'Backend', icon: Server },

  // 3. Databases
  { name: 'MongoDB', category: 'Databases', icon: Database, highlight: true },
  { name: 'MySQL', category: 'Databases', icon: Database },
  { name: 'Mongoose ODM', category: 'Databases', icon: Database },

  // 4. Programming Languages
  { name: 'Java & DSA', category: 'Programming', icon: Code2, highlight: true },
  { name: 'Python', category: 'Programming', icon: Terminal, highlight: true },
  { name: 'C', category: 'Programming', icon: Cpu },
  { name: 'C++', category: 'Programming', icon: Binary },
  { name: 'JavaScript', category: 'Programming', icon: FileCode },

  // 5. AI / Machine Learning
  { name: 'PyTorch', category: 'AI / ML', icon: Brain, highlight: true },
  { name: 'EfficientNet-B0', category: 'AI / ML', icon: Sparkles },
  { name: 'DenseNet-121', category: 'AI / ML', icon: Sparkles },
  { name: 'Scikit-learn', category: 'AI / ML', icon: Brain },
  { name: 'Pandas', category: 'AI / ML', icon: LineChart },
  { name: 'NumPy', category: 'AI / ML', icon: LineChart },
  { name: 'Image Preprocessing', category: 'AI / ML', icon: Brain },

  // 6. Tools & Platforms
  { name: 'Git', category: 'Tools', icon: GitBranch },
  { name: 'GitHub', category: 'Tools', icon: GitHubIcon },
  { name: 'VS Code', category: 'Tools', icon: Wrench },
  { name: 'Postman', category: 'Tools', icon: Send },
  { name: 'Jupyter Notebook', category: 'Tools', icon: BookOpen }
];

const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Programming', 'AI / ML', 'Tools'];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Core full-stack engineering stack, backend frameworks, relational and NoSQL databases, AI/ML architectures, and developer tooling.
          </p>
        </div>

        <div className="skill-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className={`skill-card ${skill.highlight ? 'skill-card-highlight' : ''}`}>
                <div className="skill-icon-wrapper">
                  <IconComponent size={20} />
                </div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-cat">{skill.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
