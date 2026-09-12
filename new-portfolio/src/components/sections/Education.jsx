import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-transparent sm:-translate-x-1/2" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} mb-8`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-accent-purple -translate-x-1/2 mt-6 z-10 ring-4 ring-[var(--bg)]" />

              {/* Card */}
              <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] p-5 rounded-2xl card-bg border border-base hover:border-accent-purple/30 transition-colors`}>
                <div className="flex items-center gap-2 mb-2">
                  {i === 0 ? <GraduationCap size={16} className="text-accent-purple" /> : <School size={16} className="text-accent-purple" />}
                  <span className="text-xs font-mono text-accent-cyan">{edu.period}</span>
                </div>
                <h3 className="font-display text-base font-bold mb-1">{edu.degree}</h3>
                <p className="text-secondary text-xs mb-2">{edu.institution}</p>
                <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                  {edu.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
