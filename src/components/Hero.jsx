import React from 'react';
import { Download, FolderGit2 } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, GitHubIcon, CodeChefIcon, LeetCodeIcon } from './Icons';
import profilePhoto from '../assets/profile.webp';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span>Fresher / CSE Data Science Student</span>
          </div>

          <h3 className="hero-greeting">Hi, I'm</h3>
          <h1 className="hero-name gradient-text">Abhishek Rathor</h1>
          <h2 className="hero-role">Frontend Developer &amp; CSE (Data Science) Student</h2>

          <p className="hero-description">
            I am a Computer Science and Engineering student specializing in Data Science, with a strong interest in frontend development, web technologies, and data analysis. I enjoy building responsive, user-friendly applications and continuously improving my problem-solving and development skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 size={18} /> View Projects
            </a>
            <a href="/resume.pdf" download="Abhishek_Rathor_Resume.pdf" className="btn btn-secondary">
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href="https://www.linkedin.com/in/abhishek-rathor-dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Abhishek Rathor on LinkedIn"
              aria-label="Abhishek Rathor on LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a 
              href="https://www.instagram.com/abhishek_rathor849/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Abhishek Rathor on Instagram"
              aria-label="Abhishek Rathor on Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href="https://github.com/pride87" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Abhishek Rathor on GitHub"
              aria-label="Abhishek Rathor on GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a 
              href="https://www.codechef.com/users/pride_echo_87" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Abhishek Rathor on CodeChef"
              aria-label="Abhishek Rathor on CodeChef"
            >
              <CodeChefIcon size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/58NiGi24S7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Abhishek Rathor on LeetCode"
              aria-label="Abhishek Rathor on LeetCode"
            >
              <LeetCodeIcon size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <div className="hero-photo-container">
            <img 
              src={profilePhoto} 
              alt="Abhishek Rathor - Software Developer Portfolio Profile Photo" 
              className="hero-photo"
              width="400"
              height="400"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
