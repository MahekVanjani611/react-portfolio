
import React from 'react';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import profileImg from '../assets/Mahek.jpg';
import { useReveal } from '../hooks/useReveal';

const About = ({ id, aboutData, personalData }) => {
  const [headerRef, headerVisible] = useReveal();
  const [bodyRef, bodyVisible] = useReveal();

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = aboutData.resumeUrl;
    link.download = 'Mahek-Vanjani-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id={id} className="about-section">
      <div className="section-container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div ref={bodyRef} className={`about-content flex flex-col md:flex-row gap-8 reveal ${bodyVisible ? 'reveal-visible' : ''}`}>
          {/* Text Card */}
          <div className="about-text md:w-1/2">
            <Card className="about-card">
              <CardHeader>
                {/* <CardTitle className="about-card-title">Who I Am</CardTitle> */}
              </CardHeader>
              <CardContent>
                <p className="about-description text-left">{aboutData.summary}</p>

                <div className="about-details flex flex-col gap-2 mt-4">
                  <div className="detail-item flex  gap-2">
                    <MapPin size={18} />
                    <span>{personalData.location}</span>
                  </div>
                  <div className="detail-item flex gap-2">
                    <Mail size={18} />
                    <span>{personalData.email}</span>
                  </div>
                 
                </div>

                <div className="mt-4">
                  <Button
                    onClick={handleResumeDownload}
                    className="btn-primary flex  gap-2"
                    aria-label="Download Resume"
                  >
                    <Download size={18} />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image */}
          <div className="about-image md:w-1/2 flex justify-center ">
            <div className="profile-image-container rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt={`Profile of ${personalData.name}`}
                className="profile-image w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
