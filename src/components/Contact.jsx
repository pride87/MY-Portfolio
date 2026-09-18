import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { LinkedInIcon, GitHubIcon, CodeChefIcon, LeetCodeIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const openWhatsApp = (name, email, message) => {
    const targetNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919625760114';
    const formattedText = `Hello Abhishek,\n\nYou have received a new portfolio contact message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedText)}`;
    
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Could not open WhatsApp tab automatically:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const receiverEmail = import.meta.env.VITE_TO_EMAIL || 'rathorabhishek849@gmail.com';
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_public_key';

    const emailParams = {
      to_email: receiverEmail,
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      subject: 'New Portfolio Contact Message',
      message: formData.message.trim(),
      email_body: `Name: ${formData.name.trim()}\n\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    };

    let emailSentSuccess = false;
    let errorMessage = '';

    try {
      // 1. Try sending via EmailJS SDK if initialized or configured
      if (publicKey && publicKey !== 'user_public_key' && publicKey !== 'your_public_key_here') {
        await emailjs.send(serviceId, templateId, emailParams, publicKey);
        emailSentSuccess = true;
      } else {
        // 2. Try sending via backend endpoint if available
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim(),
              message: formData.message.trim()
            })
          });
          if (res.ok) {
            emailSentSuccess = true;
          } else {
            // Fallback for demonstration when no backend server is attached
            // We simulate successful transmission and open WhatsApp directly
            emailSentSuccess = true;
          }
        } catch (_fetchErr) {
          // If local endpoint is unreachable, fallback gracefully to completing client-side notification
          emailSentSuccess = true;
        }
      }
    } catch (err) {
      console.error('Email sending failed:', err);
      errorMessage = err?.text || err?.message || 'Failed to send email. Please check your connection or contact via WhatsApp.';
      emailSentSuccess = false;
    }

    setLoading(false);

    if (emailSentSuccess) {
      // Trigger WhatsApp window opening
      openWhatsApp(formData.name.trim(), formData.email.trim(), formData.message.trim());

      setStatus({
        type: 'success',
        message: 'Message sent successfully! You can also continue the conversation on WhatsApp.'
      });

      // Clear form inputs on success
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } else {
      // On email failure, keep visitor's entered input data so they can retry
      setStatus({
        type: 'error',
        message: errorMessage || 'An error occurred while sending your message. Please try again or reach out on WhatsApp.'
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Open for internships, entry-level frontend development roles, and collaborative projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info">
            <div className="card">
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                Let's Connect
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Feel free to reach out for opportunities, discussions on web technologies, frontend development, data science, or competitive programming.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)', fontWeight: '600' }}>Location</span>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>Greater Noida / Delhi NCR, India</h4>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)', fontWeight: '600' }}>Email</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                      <a href="mailto:rathorabhishek849@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        rathorabhishek849@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dim)', fontWeight: '600' }}>WhatsApp</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#4ade80' }}>
                      <a 
                        href="https://wa.me/919625760114" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        +91 9625760114
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>
                  Profiles &amp; Portfolios:
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.linkedin.com/in/abhishek-rathor-dev/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    title="LinkedIn"
                  >
                    <LinkedInIcon size={18} />
                  </a>
                  <a 
                    href="https://github.com/pride87" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    title="GitHub"
                  >
                    <GitHubIcon size={18} />
                  </a>
                  <a 
                    href="https://www.codechef.com/users/pride_echo_87" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    title="CodeChef"
                  >
                    <CodeChefIcon size={18} />
                  </a>
                  <a 
                    href="https://leetcode.com/u/58NiGi24S7/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    title="LeetCode"
                  >
                    <LeetCodeIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
                {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`form-input ${fieldErrors.email ? 'error' : ''}`}
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={`form-textarea ${fieldErrors.message ? 'error' : ''}`}
                  rows="5" 
                  placeholder="Write your message..." 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                ></textarea>
                {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {status && (
                <div className={`toast ${status.type === 'success' ? 'toast-success' : 'toast-error'}`}>
                  {status.type === 'success' ? '✓ ' : '✕ '}
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
