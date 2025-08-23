import React from 'react';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import profileImg from '../assets/Mahek.jpg';
const About = ({ id, aboutData, personalData }) => {
  const handleResumeDownload = () => {
    // Mock download functionality
    console.log('Downloading resume...');
    alert('Resume download started! (This is a demo)');
  };

  return (
    <section id={id} className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <Card className="about-card">
              <CardHeader>
                <CardTitle className="about-card-title">Who I Am</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="about-description">{aboutData.summary}</p>
                
                <div className="about-details">
                  <div className="detail-item">
                    <MapPin size={18} />
                    <span>{personalData.location}</span>
                  </div>
                  <div className="detail-item">
                    <Mail size={18} />
                    <span>{personalData.email}</span>
                  </div>
                  <div className="detail-item">
                    <Phone size={18} />
                    <span>{personalData.phone}</span>
                  </div>
                </div>

               <a
  href={aboutData.resumeUrl}
  className="btn-primary resume-btn"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Download size={18} />
  Download Resume
</a>
              </CardContent>
            </Card>
          </div>

          <div className="about-image">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                           <img
                src={profileImg}
                alt={personalData.name}
                className="profile-image"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
