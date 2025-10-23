import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
    const allProjects = [
    ...(mockData.projectsWithDemo || []),
    ...(mockData.projectsWithoutDemo || [])
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio-container">
      <Header 
        scrollToSection={scrollToSection} 
        activeSection={activeSection}
        personalData={mockData.personal}
      />
      
      <main>
        <Hero 
          id="home"
          personalData={mockData.personal}
          scrollToSection={scrollToSection}
        />
        
        <About 
          id="about"
          aboutData={mockData.about}
          personalData={mockData.personal}
        />
        
        <Experience 
          id="experience"
          experienceData={mockData.experience}
        />
        
        <Projects 
          id="projects"
          projectsData={mockData.projectsData}      
    />      
        <Skills 
          id="skills"
          skillsData={mockData.skills}
        />
        
        <Contact 
          id="contact"
          personalData={mockData.personal}
        />
      </main>
      
      <Footer 
        personalData={mockData.personal}
      />        
    </div>
  );        
}

export default Portfolio;
