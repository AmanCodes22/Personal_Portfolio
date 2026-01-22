import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project, theme }) {
  return (
    <div className={`project-card ${theme === 'dark' ? 'dark' : 'light'}`}>
      
      <h3 className="project-title">{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className={`tech-badge ${theme === 'dark' ? 'dark' : 'light'}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-link ${theme === 'dark' ? 'dark' : 'light'}`}
        >
          <Github size={18} />
          <span>Code</span>
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link demo"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;
