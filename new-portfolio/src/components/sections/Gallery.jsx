import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import Lightbox from '@/components/Lightbox';

export default function Gallery() {
  const { gallery } = portfolioData;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % gallery.length);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Images size={24} className="text-accent-purple" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Gallery</h2>
          </div>
          <p className="text-secondary text-sm">A visual collection of projects, certificates, and AI explorations.</p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(i)}
              className="relative break-inside-avoid rounded-xl overflow-hidden border border-base cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white font-medium">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={gallery}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
