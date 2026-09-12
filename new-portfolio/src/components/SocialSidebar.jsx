import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Code,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Code,
};

export default function SocialSidebar() {
  const { sidebarIcons } = portfolioData;

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 p-2 rounded-2xl card-bg border border-base backdrop-blur-sm"
    >
      {sidebarIcons.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <motion.a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl text-secondary hover:text-accent-purple transition-colors group"
          >
            <Icon size={18} />
            <div className="absolute right-full mr-2 px-2 py-1 rounded-md card-bg border border-base text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
