import { motion } from 'framer-motion';
import {
  MapPin,
  Brain,
  Mail,
  Linkedin,
  MessageCircle,
  Instagram,
  Facebook,
  Github,
  Code,
  ChevronDown,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const heroIcons = {
  MapPin, Brain, Mail,
  Linkedin, MessageCircle, Instagram, Facebook, Github, Code,
};

export default function Hero() {
  const { personal, heroBadges, heroInfoCards, heroConnectIcons, heroDoingIcons } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary text-lg mb-2"
            >
              {personal.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 gradient-text animate-gradient"
            >
              {personal.name.toUpperCase()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-accent-cyan text-sm sm:text-base font-medium mb-4"
            >
              {personal.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-secondary text-sm sm:text-base mb-6 max-w-md leading-relaxed"
            >
              {personal.description}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-medium card-bg border border-base text-secondary hover:border-accent-purple/40 hover:text-white transition-colors"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid sm:grid-cols-3 gap-3 mb-8"
            >
              {heroInfoCards.map((card) => {
                const Icon = heroIcons[card.icon];
                return (
                  <div
                    key={card.title}
                    className="p-4 rounded-xl card-bg border border-base hover:border-accent-purple/30 transition-colors"
                  >
                    <Icon size={18} className="text-accent-purple mb-2" />
                    <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{card.title}</div>
                    <div className="text-xs font-medium text-white truncate">{card.value}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Connect with me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-2">Connect with me</p>
                <div className="flex gap-2">
                  {heroConnectIcons.map((item) => {
                    const Icon = heroIcons[item.icon];
                    return (
                      <motion.a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full card-bg border border-base flex items-center justify-center text-secondary hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-2">See what I'm doing</p>
                <div className="flex gap-2">
                  {heroDoingIcons.map((item) => {
                    const Icon = heroIcons[item.icon];
                    return (
                      <motion.a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full card-bg border border-base flex items-center justify-center text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 to-accent-blue/30 rounded-[2rem] blur-3xl animate-pulse-glow" />
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-[2rem] overflow-hidden border border-base">
                <img
                  src={personal.heroImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating accent ring */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-accent-purple/30 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-2 border-accent-cyan/20 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
        >
          <span className="text-[10px] text-muted uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-base flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-accent-purple animate-scroll-down" />
          </div>
          <ChevronDown size={14} className="text-muted" />
        </motion.div>
      </div>
    </section>
  );
}
