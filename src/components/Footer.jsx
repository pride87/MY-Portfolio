import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copy">
          © 2026 Abhishek Rathor. All Rights Reserved.
        </div>

        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/abhishek-rathor-dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Abhishek Rathor on LinkedIn"
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--text-dim)' }}>|</span>
          <a 
            href="https://www.instagram.com/abhishek_rathor849/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Abhishek Rathor on Instagram"
          >
            Instagram
          </a>
          <span style={{ color: 'var(--text-dim)' }}>|</span>
          <a 
            href="https://github.com/pride87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Abhishek Rathor on GitHub"
          >
            GitHub
          </a>
          <span style={{ color: 'var(--text-dim)' }}>|</span>
          <a 
            href="https://www.codechef.com/users/pride_echo_87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Abhishek Rathor on CodeChef"
          >
            CodeChef
          </a>
          <span style={{ color: 'var(--text-dim)' }}>|</span>
          <a 
            href="https://leetcode.com/u/58NiGi24S7/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Abhishek Rathor on LeetCode"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
