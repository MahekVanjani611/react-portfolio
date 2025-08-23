import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ id, experienceData }) => {
  return (
    <section id={id} className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-content">
          <Card className="experience-card">
            <CardHeader>
              <div className="experience-header">
                <div className="experience-main">
                  <CardTitle className="experience-title">
                    {experienceData.position}
                  </CardTitle>
                  <h3 className="experience-company">
                    {experienceData.company}
                  </h3>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{experienceData.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{experienceData.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="experience-description">
                {experienceData.description}
              </p>

              <div className="achievements-section">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {experienceData.achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <CheckCircle size={16} className="achievement-icon" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h4 className="technologies-title">Technologies Used</h4>
                <div className="technologies-list">
                  {experienceData.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="tech-badge">
                      {tech}
                    </Badge>        
                    ))}

                </div>
              </div>        
            </CardContent>
          </Card>       
        </div>
      </div>
    </section>
    );
}
export default Experience;
