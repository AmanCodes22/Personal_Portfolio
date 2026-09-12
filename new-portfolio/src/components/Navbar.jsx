import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const { personal, navItems } = portfolioData;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  const handleNavClick = (id) => {
  console.log("Clicked:", id);

  const element = document.getElementById(id);

  console.log("Element:", element);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    console.error(`Section with id="${id}" not found`);
  }

  setMobileOpen(false);
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-base'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo + Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm shrink-0">
              {personal.initials}

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue blur-md opacity-50 -z-10 group-hover:opacity-80 transition-opacity" />
            </div>

            <div className="text-left hidden sm:block">
              <div className="font-display font-bold text-sm leading-tight">
                {personal.name}
              </div>

              <div className="text-[10px] text-muted leading-tight">
                {personal.subtitle}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
              type="button"
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:hidden glass border-t border-base overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30'
                      : 'text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}