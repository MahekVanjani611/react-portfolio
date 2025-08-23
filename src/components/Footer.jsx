import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ personalData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">{personalData.name}</h3>
              <p className="footer-tagline">
                Building the future, one line of code at a time
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-section-title">Quick Links</h4>
                <ul className="footer-nav">
                  <li><a href="#home" className="footer-link">Home</a></li>
                  <li><a href="#about" className="footer-link">About</a></li>
                  <li><a href="#experience" className="footer-link">Experience</a></li>
                  <li><a href="#projects" className="footer-link">Projects</a></li>
                  <li><a href="#skills" className="footer-link">Skills</a></li>
                  <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Contact Info</h4>
                <div className="footer-contact">
                  <p className="footer-contact-item">{personalData.location}</p>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="footer-contact-item footer-link"
                  >
                    {personalData.email}
                  </a>
                  <p className="footer-contact-item">{personalData.phone}</p>
                </div>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Follow Me</h4>
                <div className="footer-social">
                  <a 
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="footer-social-link"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} {personalData.name}. All rights reserved.
              </p>
            </div>
            <div className="footer-made-with">
              <p className="made-with-text">
                Made with <Heart size={16} className="heart-icon" /> using React 
              </p>      
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
