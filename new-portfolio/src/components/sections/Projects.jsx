import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Rocket size={24} className="text-accent-purple" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">My Projects</h2>
          </div>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            A collection of my major works — blending research, AI innovation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
