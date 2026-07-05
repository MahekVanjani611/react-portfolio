import React from 'react';
import { MapPin, Calendar, CheckCircle, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useReveal } from '../hooks/useReveal';
import nvidiaLogo from '../assets/nvidia-logo.jpg';
import neuralLogo from '../assets/neural-logo.jpg';

// Map company name -> logo asset. Add an entry here whenever you drop in
// a new logo file under src/assets, and the right badge shows automatically.
const companyLogos = {
  NVIDIA: nvidiaLogo,
  NEURAL: neuralLogo
};

const CompanyLogo = ({ company }) => {
  const logo = companyLogos[company];
  if (logo) {
    return <img src={logo} alt={`${company} logo`} className="company-logo" />;
  }
  // Generic fallback badge for companies without a dedicated logo asset yet.
  return (
    <div className="company-logo company-logo-fallback" aria-label={`${company} logo`}>
      <Building2 size={22} />
    </div>
  );
};

const ExperienceCard = ({ data }) => (
  <Card className="experience-card">
    <CardHeader>
      <div className="experience-header">
        <div className="experience-main">
          <div className="experience-company-row">
            <CompanyLogo company={data.company} />
            <div>
              <CardTitle className="experience-title">
                {data.position}
              </CardTitle>
              <h3 className="experience-company">
                {data.company}
              </h3>
            </div>
          </div>
        </div>
        <div className="experience-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{data.duration}</span>
          </div>
          <div className="meta-item">
            <MapPin size={16} />
            <span>{data.location}</span>
          </div>
        </div>
      </div>
    </CardHeader>

    <CardContent>
      <p className="experience-description">
        {data.description}
      </p>

      <div className="achievements-section">
        <h4 className="achievements-title">Key Achievements</h4>
        <ul className="achievements-list">
          {data.achievements.map((achievement, index) => (
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
          {data.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="tech-badge">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Experience = ({ id, experienceData }) => {
  const [headerRef, headerVisible] = useReveal();
  const [bodyRef, bodyVisible] = useReveal();

  // Support both a single experience object (legacy) and an array of them.
  const experiences = Array.isArray(experienceData) ? experienceData : [experienceData];

  return (
    <section id={id} className="experience-section">
      <div className="section-container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div ref={bodyRef} className={`experience-content reveal ${bodyVisible ? 'reveal-visible' : ''}`}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} data={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
