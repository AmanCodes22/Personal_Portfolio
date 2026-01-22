import SectionTitle from '../components/SectionTitle';
import { profile, skills, whoAmI, whatImLearning } from '../data/skills';
import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about">

        <div className="about-title">
          <SectionTitle subtitle="Get to know me better">
            About Me
          </SectionTitle>
        </div>

        <div className="about-content">

          {/* Who I Am */}
          <section className="about-section about-card">
            <h3 className="about-heading">Who I Am</h3>
            <p className="about-text">
              {whoAmI.about}
            </p>
          </section>

          {/* What I'm Learning */}
          <section className="about-section about-card">
            <h3 className="about-heading">What I'm Learning</h3>
            <p className="about-text margin-bottom">
              {whatImLearning.intro}
            </p>

            <ul className="about-list">
              {skills.learning.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Career Goals (highlighted) */}
          <section className="about-section about-highlight">
            <h3 className="about-heading">Career Goals</h3>
            <p className="about-text">
              {profile.goal}
            </p>
          </section>

          {/* Tech Stack */}
          <section className="about-section">
            <h3 className="about-heading">Tech Stack</h3>
            <div className="tech-grid">
              {[...skills.frontend, ...skills.tools].map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;
