import React from 'react';
import { Briefcase, ExternalLink, CheckCircle2, Globe, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Client Work &amp; Delivery</span>
          <h2 className="section-title">Freelance Experience</h2>
          <p className="section-subtitle">
            Professional freelance web development delivering real-world, responsive client websites and user workflows.
          </p>
        </div>

        <div className="experience-container">
          <div className="card experience-card">
            <div className="experience-grid">
              {/* Left / Top: Client Details & Description */}
              <div className="experience-content">
                <div className="experience-header">
                  <div className="skill-icon-wrapper" style={{ width: '48px', height: '48px' }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <span className="experience-type-badge">Freelance Client Work</span>
                    <h3 className="experience-title">Freelance Web Developer</h3>
                    <h4 className="experience-company">
                      ThePhysiFit 
                      <span className="experience-domain"> / thephysifit.com</span>
                    </h4>
                  </div>
                </div>

                <div className="experience-meta">
                  <span className="meta-item">
                    <MapPin size={15} /> Noida, Greater Noida &amp; Ghaziabad (Target Audience)
                  </span>
                  <span className="meta-item">
                    <Calendar size={15} /> Client Project Delivery
                  </span>
                </div>

                <p className="experience-desc">
                  Contributed to the development, responsive interface design, and maintenance of the official website for <strong>ThePhysiFit</strong>, a dedicated physiotherapy clinic serving patients across Delhi NCR. Focused on delivering a seamless patient-facing experience for discovering rehabilitation services and scheduling consultations.
                </p>

                <div className="experience-highlights">
                  <h5 className="highlights-heading">Key Implemented Features &amp; Contributions:</h5>
                  <ul className="highlights-list">
                    <li>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span><strong>Responsive UI/UX:</strong> Built and refined modern, mobile-friendly layouts ensuring consistent visual appeal across smartphones, tablets, and desktops.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span><strong>Service Presentation:</strong> Structured clear service discovery sections highlighting specialized physiotherapy treatments (sports rehabilitation, pain management, post-op rehab).</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span><strong>Appointment Booking Flow:</strong> Supported the online consultation and appointment-booking user experience for local patients.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span><strong>Performance &amp; Usability:</strong> Optimized page load assets, navigation flow, and user-facing accessibility.</span>
                    </li>
                  </ul>
                </div>

                <div className="experience-tags">
                  <span className="tag">Web Development</span>
                  <span className="tag">Responsive Design</span>
                  <span className="tag">Service Discovery</span>
                  <span className="tag">Appointment Booking UI</span>
                  <span className="tag">UI/UX Usability</span>
                </div>

                <div className="experience-actions">
                  <a
                    href="https://thephysifit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Globe size={16} /> Visit ThePhysiFit Live Site <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Right: Client Website Preview Showcase */}
              <div className="experience-visual">
                <a 
                  href="https://thephysifit.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="preview-image-link"
                  title="View ThePhysiFit Live Website"
                >
                  <img
                    src="/projects/thephysifit.jpg"
                    alt="ThePhysiFit Physiotherapy Clinic Website - Freelance Project by Abhishek Rathor"
                    className="experience-preview-img"
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                  <div className="preview-overlay">
                    <span className="preview-badge">
                      <ExternalLink size={16} /> Visit thephysifit.com
                    </span>
                  </div>
                </a>
                <span className="preview-caption">
                  Live client deployment: ThePhysiFit healthcare &amp; physiotherapy portal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
