import React, { useState } from 'react';
import { 
  Code2, FileCode, Cpu, Terminal, Layout, Globe, Server, 
  Database, LineChart, Brain, GitBranch, Wrench, BookOpen, Layers, CheckCircle2 
} from 'lucide-react';
import { GitHubIcon } from './Icons';

const skillsData = [
  // Programming
  { name: 'Java', category: 'Programming', icon: Code2 },
  { name: 'Python', category: 'Programming', icon: Terminal },
  { name: 'C', category: 'Programming', icon: Cpu },
  { name: 'C++', category: 'Programming', icon: FileCode },

  // Web Development
  { name: 'HTML', category: 'Web Dev', icon: Layout },
  { name: 'CSS', category: 'Web Dev', icon: Globe },
  { name: 'JavaScript', category: 'Web Dev', icon: FileCode },
  { name: 'React.js', category: 'Web Dev', icon: Layers },
  { name: 'Node.js', category: 'Web Dev', icon: Server },
  { name: 'Express.js', category: 'Web Dev', icon: Server },

  // Databases
  { name: 'MongoDB', category: 'Databases', icon: Database },
  { name: 'MySQL', category: 'Databases', icon: Database },

  // Data Science / ML
  { name: 'Pandas', category: 'Data Science', icon: LineChart },
  { name: 'NumPy', category: 'Data Science', icon: Brain },
  { name: 'Matplotlib', category: 'Data Science', icon: LineChart },
  { name: 'Scikit-learn', category: 'Data Science', icon: Brain },
  { name: 'Data Analysis', category: 'Data Science', icon: LineChart },

  // Tools
  { name: 'Git', category: 'Tools', icon: GitBranch },
  { name: 'GitHub', category: 'Tools', icon: GitHubIcon },
  { name: 'VS Code', category: 'Tools', icon: Wrench },
  { name: 'Jupyter Notebook', category: 'Tools', icon: BookOpen },

  // Other
  { name: 'REST APIs', category: 'Other', icon: Layers },
  { name: 'Problem Solving', category: 'Other', icon: CheckCircle2 },
];

const categories = ['All', 'Web Dev', 'Programming', 'Data Science', 'Databases', 'Tools'];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab || (activeTab === 'Tools' && s.category === 'Other'));

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Core programming languages, modern web frameworks, data analysis toolkits, and developer tools.
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
              <div key={skill.name} className="skill-card">
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
