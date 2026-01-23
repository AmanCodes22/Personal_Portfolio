import { Code } from 'lucide-react';
import Button from '../components/Button';
import { profile } from '../data/skills';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">

        {/* Icon */}
        <div className="home-icon-wrapper">
          <div className="home-icon-bg">
            <Code size={48} className="home-icon" />
          </div>
        </div>

        {/* Name */}
        <h1 className="home-title">
          Hi, I'm <span>{profile.name}</span>
        </h1>

        {/* Value-based role */}
        <p className="home-role">
          Frontend Developer <span>• React • Responsive & API-Driven Apps</span>
        </p>

        {/* Strong intro */}
        <p className="home-intro">
          {profile.intro}
        </p>

        {/* Proof / stats */}
        <p className="home-proof">
          🚀 5+ Projects Built • React • API Integration • Responsive Design
        </p>

        {/* CTA buttons */}
        <div className="home-buttons">
          <Button to="/projects" variant="primary">
            View My Work
          </Button>

          <a
  href="/Aman's_Resume.pdf"
  download
  className="btn btn-secondary"
>
  Download Resume
</a>


        </div>

        {/* Availability note */}
        <p className="home-availability">
          Available for internships & junior frontend roles
        </p>

      </div>
    </div>
  );
}

export default Home;
