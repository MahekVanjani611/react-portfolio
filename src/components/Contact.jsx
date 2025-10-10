import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = ({ id, contactData = {} }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyp35fPsEGLPqcGAvomzm2Z_L-smczsSQflW1KxDCWshI9-TXed6wRQCH9XTdWlX0H4Rg/exec";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formBody = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    const response = await fetch(scriptURL, {
      method: "POST",
      body: formBody,
    });

    const result = await response.json();
    console.log("Response from Google Apps Script:", result);

    if (result?.result === "success") {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // Social buttons config
  const socialIcons = {
    linkedin: { icon: Linkedin, label: "LinkedIn", fallback: "https://www.linkedin.com/in/mahek-vanjani-93477a253/" },
    github: { icon: Github, label: "GitHub", fallback: "https://github.com/MahekVanjani611" }
  };

  return (
    <section id={id} className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <Card className="contact-info-card">
              <CardHeader>
                <CardTitle className="contact-info-title">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="contact-details">
                  <div className="contact-item">
                    <Mail className="contact-icon" size={20} />
                    <div>
                      <span className="contact-label">Email</span>
                      <a href={`mailto:${contactData?.email || ""}`} className="contact-value">
                        {contactData?.email || "b22ee088@iitj.ac.in"}
                      </a>
                    </div>
                  </div>

                  {/* <div className="contact-item">
                    <Phone className="contact-icon" size={20} />
                    <div>
                      <span className="contact-label">Phone</span>
                      {/* <a href={`tel:${contactData?.phone || ""}`} className="contact-value">
                        {contactData?.phone || "+91 9512080717"}
                      </a> 
                    </div>
                  </div> */}

                  <div className="contact-item">
                    <MapPin className="contact-icon" size={20} />
                    <div>
                      <span className="contact-label">Location</span>
                      <span className="contact-value">
                        {contactData?.location || "Gujarat, India"}
                      </span>
                    </div>
                  </div>

                  <div className="social-links">
                    <h4 className="social-title">Follow Me</h4>
                    <div className="social-buttons">
                      {Object.entries(socialIcons).map(([key, { icon: Icon, label, fallback }]) =>
                        (contactData?.social?.[key] || fallback) && (
                          <Button
                            key={key}
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(contactData?.social?.[key] || fallback, "_blank")}
                          >
                            <Icon size={16} />
                            {label}
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="contact-form-title">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form-inner">
                  <div className="form-row">
                    <div className="form-group">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
