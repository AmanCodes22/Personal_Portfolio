import { motion } from 'framer-motion';
import { X, Calendar, Clock, BookOpen, Share2, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

// Generates rich content if the article doesn't already have a full body
function getArticleContent(article) {
  if (article.content) {
    return Array.isArray(article.content)
      ? article.content
      : [article.content];
  }

  return [
    {
      heading: "Article Overview",
      body: article.excerpt,
    },
  ];
}

export default function ArticleModal({ article, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!article) return null;

  const contentSections = getArticleContent(article);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl card-bg border border-base rounded-2xl overflow-hidden shadow-2xl my-8 glow-card max-h-[90vh] flex flex-col"
      >
        {/* Sticky Header / Close Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 card-bg/90 backdrop-blur-md border-b border-base">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-purple/15 text-accent-purple border border-accent-purple/20">
              {article.category}
            </span>
            <div className="hidden sm:flex items-center gap-3 text-xs text-muted">
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {article.readTime}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Share article link"
              className="w-9 h-9 rounded-full card-bg border border-base flex items-center justify-center text-secondary hover:text-white hover:border-accent-purple/40 transition-colors"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close article"
              className="w-9 h-9 rounded-full card-bg border border-base flex items-center justify-center text-white hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 space-y-6">
          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-base bg-black/40">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
          </div>

          {/* Article Title */}
          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 py-3 border-y border-base">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm">
                AS
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Aman Singhal</p>
                <p className="text-xs text-muted">Author • {article.date} • {article.readTime}</p>
              </div>
            </div>
          </div>

          {/* Lead Excerpt */}
          <p className="text-base sm:text-lg text-secondary leading-relaxed font-medium bg-white/5 p-4 rounded-xl border border-base italic">
            "{article.excerpt}"
          </p>

          {/* Sections */}
          <div className="space-y-6 pt-2">
            {contentSections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                {section.heading && (
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-purple" />
                    {section.heading}
                  </h2>
                )}
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {section.body || section}
                </p>
              </div>
            ))}
          </div>

          {/* Article Footer */}
          <div className="pt-8 mt-8 border-t border-base flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <BookOpen size={16} className="text-accent-purple" />
              <span>Thanks for reading! More articles coming soon.</span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:opacity-90 transition-opacity"
            >
              Close Article
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
