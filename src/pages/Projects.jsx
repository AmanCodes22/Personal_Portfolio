import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../Components/Projectcard';
import { projects } from '../data/projects';
import './Projects.css';

function Projects({ theme }) {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );

  return (
    <div className="projects-wrapper">
      <div className="projects-container">

        <SectionTitle subtitle="Things I've built while learning">
          My Projects
        </SectionTitle>

        {/* Stats */}
        <p className="projects-stats">
          🚀 {projects.length}+ Projects • React • API Integration • Responsive UI
        </p>

        {/* Filters */}
        <div className="projects-filters">
          {['All', 'React', 'API', 'CSS'].map((item) => (
            <button
              key={item}
              className={`filter-btn ${filter === item ? 'active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              theme={theme}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <h3>Interested in my work?</h3>
          <p>Let’s build something meaningful together.</p>
          <a href="/contact" className="cta-btn">Contact Me</a>
        </div>

      </div>
    </div>
  );
}

export default Projects;

