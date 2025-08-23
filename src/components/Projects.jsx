import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = ({ id, projectsData }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id={id} className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="overlay-btn"
                    onClick={() => openProjectModal(project)}
                  >
                    <Eye size={16} />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="project-title">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="tech-badge-more">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="project-actions">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="project-btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="project-btn project-btn-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <button className="modal-close" onClick={closeProjectModal}>×</button>
              </div>
              
              <div className="modal-content">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
                
                <div className="modal-details">
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-highlights">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-technologies">
                    <h4>Technologies</h4>
                    <div className="modal-tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="modal-tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                    <Button 
                      className="btn-primary"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;