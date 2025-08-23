import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ id, personalData, scrollToSection }) => {
  return (
    <section id={id} className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {personalData.name}
            </h1>
            <h2 className="hero-subtitle">
              {personalData.title}
            </h2>
            <p className="hero-description">
              {personalData.tagline}
            </p>
            
            <div className="hero-actions">
              <Button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="hero-social">
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${personalData.email}`}
                className="social-link"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <button       
            className="scroll-button"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll Down"
            >   
            <ChevronDown size={24} />
          </button> 
        </div>
      </div>
    </section>
    );

};
export default Hero;
