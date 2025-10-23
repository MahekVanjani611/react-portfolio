// import React, { useState } from 'react';
// import { ExternalLink, Github, Eye } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';

// const Projects = ({ id, projectsData }) => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openProjectModal = (project) => setSelectedProject(project);
//   const closeProjectModal = () => setSelectedProject(null);

//   // ✅ Separate projects with and without demo links
//   const projectsWithDemo = projectsData.filter((p) => p.liveUrl && p.liveUrl.trim() !== "");
//   const projectsWithoutDemo = projectsData.filter((p) => !p.liveUrl || p.liveUrl.trim() === "");

//   return (
//     <section id={id} className="projects-section">
//       <div className="section-container">
        
//         {/* Header */}
//         <div className="section-header">
//           <h2 className="section-title">Projects</h2>
//           <div className="section-divider"></div>
//           <p className="section-subtitle">
//             A collection of my works — some live, some on GitHub for you to explore.
//           </p>
//         </div>

//         {/* 🔸 Projects with Demo */}
//         {projectsWithDemo.length > 0 && (
//           <div className="projects-category">
//             <h3 className="projects-category-title">💡 Projects with Live Demo</h3>
//             <div className="projects-grid">
//               {projectsWithDemo.map((project) => (
//                 <Card key={project.id} className="project-card">
//                   <div className="project-image">
//                     <img src={project.image} alt={project.title} className="project-img" />
//                     <div className="project-overlay">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="overlay-btn"
//                         onClick={() => openProjectModal(project)}
//                       >
//                         <Eye size={16} />
//                         View Details
//                       </Button>
//                     </div>
//                   </div>

//                   <CardHeader>
//                     <CardTitle className="project-title">{project.title}</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="project-description">{project.description}</p>

//                     <div className="project-technologies">
//                       {project.technologies.slice(0, 3).map((tech, i) => (
//                         <Badge key={i} variant="outline" className="tech-badge">
//                           {tech}
//                         </Badge>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <Badge variant="outline" className="tech-badge-more">
//                           +{project.technologies.length - 3} more
//                         </Badge>
//                       )}
//                     </div>

//                     <div className="project-actions">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="project-btn"
//                         onClick={() => window.open(project.githubUrl, '_blank')}
//                       >
//                         <Github size={16} />
//                         Code
//                       </Button>
//                       <Button
//                         size="sm"
//                         className="project-btn project-btn-primary"
//                         onClick={() => window.open(project.liveUrl, '_blank')}
//                       >
//                         <ExternalLink size={16} />
//                         Live Demo
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* 🔹 Projects without Demo */}
//         {projectsWithoutDemo.length > 0 && (
//           <div className="projects-category">
//             <h3 className="projects-category-title">🧠 Projects (Code Only)</h3>
//             <div className="projects-grid">
//               {projectsWithoutDemo.map((project) => (
//                 <Card key={project.id} className="project-card">
//                   <div className="project-image">
//                     <img src={project.image} alt={project.title} className="project-img" />
//                     <div className="project-overlay">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="overlay-btn"
//                         onClick={() => openProjectModal(project)}
//                       >
//                         <Eye size={16} />
//                         View Details
//                       </Button>
//                     </div>
//                   </div>

//                   <CardHeader>
//                     <CardTitle className="project-title">{project.title}</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="project-description">{project.description}</p>

//                     <div className="project-technologies">
//                       {project.technologies.slice(0, 3).map((tech, i) => (
//                         <Badge key={i} variant="outline" className="tech-badge">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>

//                     <div className="project-actions">
//                       <Button
//                         size="sm"
//                         className="project-btn"
//                         onClick={() => window.open(project.githubUrl, '_blank')}
//                       >
//                         <Github size={16} />
//                         View Code
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* 🪄 Modal (same as before) */}
//         {selectedProject && (
//           <div className="project-modal-overlay" onClick={closeProjectModal}>
//             <div className="project-modal" onClick={(e) => e.stopPropagation()}>
//               <div className="modal-header">
//                 <h3 className="modal-title">{selectedProject.title}</h3>
//                 <button className="modal-close" onClick={closeProjectModal}>×</button>
//               </div>

//               <div className="modal-content">
//                 <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
//                 <div className="modal-details">
//                   <p className="modal-description">{selectedProject.description}</p>

//                   {selectedProject.highlights?.length > 0 && (
//                     <div className="modal-highlights">
//                       <h4>Key Features</h4>
//                       <ul>
//                         {selectedProject.highlights.map((h, i) => (
//                           <li key={i}>{h}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <div className="modal-technologies">
//                     <h4>Technologies</h4>
//                     <div className="modal-tech-list">
//                       {selectedProject.technologies.map((tech, i) => (
//                         <Badge key={i} variant="secondary" className="modal-tech-badge">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="modal-actions">
//                     <Button
//                       variant="outline"
//                       onClick={() => window.open(selectedProject.githubUrl, '_blank')}
//                     >
//                       <Github size={16} />
//                       View Code
//                     </Button>
//                     {selectedProject.liveUrl && (
//                       <Button
//                         className="btn-primary"
//                         onClick={() => window.open(selectedProject.liveUrl, '_blank')}
//                       >
//                         <ExternalLink size={16} />
//                         Live Demo
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Projects = ({ id, projectsData }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <section id={id} className="projects-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A collection of my works — ranging from ML research to full-stack tools and visualizations.
          </p>
        </div>

        {/* All Projects */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image || "/placeholder.png"}
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
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="outline" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="tech-badge-more">
                      +{project.techStack.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="project-actions">
                  <Button
                    variant="outline"
                    size="sm"
                    className="project-btn"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} />
                    Code
                  </Button>

                  {project.demo && project.demo.trim() !== "" && (
                    <Button
                      size="sm"
                      className="project-btn project-btn-primary"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <button className="modal-close" onClick={closeProjectModal}>
                  ×
                </button>
              </div>

              <div className="modal-content">
                <img
                  src={selectedProject.image || "/placeholder.png"}
                  alt={selectedProject.title}
                  className="modal-image"
                />
                <div className="modal-details">
                  <p className="modal-description">
                    {selectedProject.description}
                  </p>

                  {selectedProject.highlights?.length > 0 && (
                    <div className="modal-highlights">
                      <h4>Key Features</h4>
                      <ul>
                        {selectedProject.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-technologies">
                    <h4>Technologies</h4>
                    <div className="modal-tech-list">
                      {selectedProject.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="modal-tech-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(selectedProject.github, "_blank")
                      }
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                    {selectedProject.demo && (
                      <Button
                        className="btn-primary"
                        onClick={() =>
                          window.open(selectedProject.demo, "_blank")
                        }
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}
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
