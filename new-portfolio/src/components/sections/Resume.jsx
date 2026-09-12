import { motion } from 'framer-motion';
import { Download, GraduationCap, MapPin, Mail, Phone, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Resume() {
  const { resume, personal } = portfolioData;

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-3">My <span className="gradient-text">Resume</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl card-bg border border-base glow-card"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-base">
            <div>
              <h3 className="font-display text-2xl font-bold mb-1">{resume.name}</h3>
              <p className="text-accent-purple text-sm font-medium">{resume.degree}</p>
            </div>
            <a
              href={personal.resumeUrl}
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-secondary text-xs">
              <MapPin size={14} className="text-accent-purple shrink-0" />
              {resume.location}
            </div>
            <div className="flex items-center gap-2 text-secondary text-xs">
              <Mail size={14} className="text-accent-purple shrink-0" />
              {resume.contact.split('|')[0].trim()}
            </div>
            <div className="flex items-center gap-2 text-secondary text-xs">
              <Phone size={14} className="text-accent-purple shrink-0" />
              {resume.contact.split('|')[1].trim()}
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-accent-purple" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Professional Summary</h4>
            </div>
            <p className="text-secondary text-sm leading-relaxed">{resume.summary}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
