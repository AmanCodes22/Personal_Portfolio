import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../Components/Skillbadge';
import { skills } from '../data/skills';
import './Skills.css';

function Skills({ theme }) {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">

        <SectionTitle subtitle="Technologies and tools I work with">
          My Skills
        </SectionTitle>

        <div className="skills-content">

          {/* Frontend */}
          <section className="skills-section skills-card">
            <h3 className="skills-heading">Frontend Development</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <SkillBadge key={index} skill={skill} theme={theme} />
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="skills-section skills-card">
            <h3 className="skills-heading">Tools & Technologies</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <SkillBadge key={index} skill={skill} theme={theme} />
              ))}
            </div>
          </section>

          {/* Learning (highlighted) */}
          <section className="skills-section skills-highlight">
            <h3 className="skills-heading">Currently Learning</h3>
            <div className="skills-grid">
              {skills.learning.map((skill, index) => (
                <SkillBadge key={index} skill={skill} theme={theme} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Skills;
