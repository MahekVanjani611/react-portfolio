import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useReveal } from '../hooks/useReveal';

const Skills = ({ id, skillsData }) => {
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();
  const [summaryRef, summaryVisible] = useReveal();
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: skillsData.frontend,
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      skills: skillsData.backend,
      icon: '⚙️'
    },
    {
      title: 'Database & Storage',
      skills: skillsData.database,
      icon: '🗄️'
    },
    {
      title: 'Tools & Platforms',
      skills: skillsData.tools,
      icon: '🛠️'
    },
    {
      title: 'Concepts & Methodologies',
      skills: skillsData.concepts,
      icon: '💡'
    }
  ];

  return (
    <section id={id} className="skills-section">
      <div className="section-container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div ref={gridRef} className={`skills-grid reveal ${gridVisible ? 'reveal-visible' : ''}`}>
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-category-card">
              <CardHeader>
                <CardTitle className="skill-category-title">
                  <span className="skill-icon">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="skill-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div ref={summaryRef} className={`skills-summary reveal ${summaryVisible ? 'reveal-visible' : ''}`}>
          <Card className="summary-card">
            <CardHeader>
              <CardTitle className="summary-title">Technical Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-number">{skillsData.frontend.length + skillsData.backend.length}</span>
                  <span className="stat-label">Programming Languages & Frameworks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{skillsData.database.length}</span>
                  <span className="stat-label">Database Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{skillsData.tools.length}</span>
                  <span className="stat-label">Development Tools</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{skillsData.concepts.length}</span>
                  <span className="stat-label">Methodologies & Concepts</span>
                </div>
              </div>
            </CardContent>          
            </Card>
            </div>
        </div>
      
    </section>
    );
};
export default Skills;