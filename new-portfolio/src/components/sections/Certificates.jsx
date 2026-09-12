import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import Lightbox from '@/components/Lightbox';

export default function Certificates() {
  const { certificates } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = filter === 'All'
    ? certificates
    : certificates.filter((c) => c.type === filter);

  const filters = ['All', 'Technical', 'Other'];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Award size={24} className="text-accent-purple" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Certificates</h2>
          </div>
          <p className="text-secondary text-sm">Explore my achievements — both technical & beyond.</p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white'
                  : 'card-bg border border-base text-secondary hover:text-white hover:border-accent-purple/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setLightboxIndex(certificates.indexOf(cert))}
              className="group rounded-2xl card-bg border border-base overflow-hidden cursor-pointer hover:border-accent-purple/30 transition-colors"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold mb-1">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary">{cert.organization}</span>
                  <span className="text-xs font-mono text-accent-cyan">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={certificates.map((c) => ({ src: c.image, alt: c.title }))}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i - 1 + certificates.length) % certificates.length)}
            onNext={() => setLightboxIndex((i) => (i + 1) % certificates.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
