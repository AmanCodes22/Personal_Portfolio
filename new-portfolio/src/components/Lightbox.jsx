import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const image = images[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full card-bg border border-base flex items-center justify-center text-white hover:text-accent-purple transition-colors"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full card-bg border border-base flex items-center justify-center text-white hover:text-accent-purple transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full card-bg border border-base flex items-center justify-center text-white hover:text-accent-purple transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <motion.img
        key={index}
        src={image.src || image.image}
        alt={image.alt || image.title}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain"
      />
    </motion.div>
  );
}
