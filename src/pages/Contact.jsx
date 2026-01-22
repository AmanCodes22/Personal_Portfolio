import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import SectionTitle from '../Components/Sectiontitle';
import { profile } from '../data/skills';
import './Contact.css';

function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">

        <SectionTitle subtitle="Let's connect and build something together">
          Get In Touch
        </SectionTitle>

        <div className="contact-grid">

          {/* Contact Info */}
          <div>
            <h3 className="contact-heading">Contact Information</h3>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <Mail size={20} />
                <span>{profile.email}</span>
              </a>

              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={20} />
                <span>GitHub</span>
              </a>

              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="contact-heading">Send a Message</h3>

            {submitted && (
              <div className="contact-success">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme === 'dark' ? 'dark' : 'light'}`}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme === 'dark' ? 'dark' : 'light'}`}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme === 'dark' ? 'dark' : 'light'}`}
                />
              </div>

              <button type="submit" className="contact-btn">
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
