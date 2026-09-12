import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import {
  HeartPulse,
  Brain,
  Hand,
  MessageSquare,
  BarChart3,
  Globe,
} from 'lucide-react';

const iconMap = {
  ScanHeart: HeartPulse, Brain, Hand, MessageSquare, BarChart3, Globe,
};

export default function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (index % 3) * 0.15, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-2xl card-bg border overflow-hidden transition-colors ${
        project.featured
          ? 'border-accent-purple/40 glow-purple'
          : 'border-base hover:border-accent-purple/30'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl glass border border-base flex items-center justify-center">
          <Icon size={18} className="text-accent-purple" />
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-accent-purple to-accent-blue text-white">
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
        <p className="text-secondary text-xs leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 border border-base text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium card-bg border border-base hover:border-accent-purple/40 hover:text-accent-purple transition-colors"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
