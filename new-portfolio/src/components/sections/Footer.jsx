import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const icons = { Github, Linkedin, Twitter, Instagram, Mail };

export default function Footer() {
  const { personal, socialLinks, navItems } = portfolioData;

  const socials = [
    { icon: 'Github', url: socialLinks.github, label: 'GitHub' },
    { icon: 'Linkedin', url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: 'Twitter', url: socialLinks.twitter, label: 'Twitter' },
    { icon: 'Instagram', url: socialLinks.instagram, label: 'Instagram' },
    { icon: 'Mail', url: socialLinks.email, label: 'Email' },
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-base pt-12 pb-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-lg mb-3">
            {personal.initials}
          </div>
          <h3 className="font-display text-xl font-bold mb-1">{personal.name}</h3>
          <p className="text-secondary text-xs">{personal.subtitle}</p>
        </motion.div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xs text-secondary hover:text-accent-purple transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-2 mb-8">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full card-bg border border-base flex items-center justify-center text-secondary hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
              >
                <Icon size={15} />
              </motion.a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-base text-center">
          <p className="text-xs text-muted">© 2026 Aman Singhal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
