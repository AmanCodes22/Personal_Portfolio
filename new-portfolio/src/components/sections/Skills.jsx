import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  FileCode, Coffee, Code2, Palette, Braces, Atom, GitBranch, Database, Eye, Brain, Globe, Boxes, Users,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const techIconMap = {
  FileCode, Coffee, Code2, Palette, Braces, Atom, GitBranch, Database, Eye, Brain, Globe, Boxes, Users,
};

const categoryIconMap = { Code2, Globe, Database, Boxes, Brain, Users };

function ProgressBar({ skill, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-white font-medium">{skill.name}</span>
        <span className="text-xs text-accent-purple font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-blue"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-3">My <span className="gradient-text">Skills</span></h2>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            Technical expertise blended with creativity — explore my core competencies below.
          </p>
        </motion.div>

        {/* Tech showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-12"
        >
          {skills.techIcons.map((tech, i) => {
            const Icon = techIconMap[tech.icon] || Code2;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="relative flex flex-col items-center gap-2 p-4 rounded-xl card-bg border border-base hover:border-accent-purple/40 transition-colors group"
              >
                <Icon size={24} className="text-secondary group-hover:text-accent-purple transition-colors" />
                <span className="text-[10px] text-muted group-hover:text-white transition-colors">{tech.name}</span>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, ci) => {
            const Icon = categoryIconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="p-6 rounded-2xl card-bg border border-base hover:border-accent-purple/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                    <Icon size={18} className="text-accent-purple" />
                  </div>
                  <h3 className="font-display text-base font-bold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, si) => (
                    <ProgressBar key={skill.name} skill={skill} delay={si * 0.1} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
