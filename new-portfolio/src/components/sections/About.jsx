import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Music,
  Trophy,
  Plane,
  Lightbulb,
  FolderGit2,
  Calendar,
  Cpu,
  Code,
  ArrowDown,
  Sparkles,
} from 'lucide-react';

import { portfolioData } from '@/data/portfolioData';

const statIcons = {
  FolderGit2,
  Calendar,
  Cpu,
  Code,
};

const hobbyIcons = {
  Music,
  Trophy,
  Plane,
  Lightbulb,
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const titleWord = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.92,
    rotate: -3,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ stat, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [count, setCount] = useState(0);

  const Icon = statIcons[stat.icon];

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = 1500;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth easing
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * stat.value)
      );

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        p-6
        rounded-2xl
        card-bg
        border
        border-base
        text-center
        overflow-hidden
        group
        hover:border-accent-purple/40
        transition-colors
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-accent-purple/10
          to-accent-blue/10
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          className="
            w-14
            h-14
            mx-auto
            rounded-2xl
            bg-gradient-to-br
            from-accent-purple/20
            to-accent-blue/20
            flex
            items-center
            justify-center
            mb-4
          "
        >
          {Icon && (
            <Icon
              size={24}
              className="text-accent-purple"
            />
          )}
        </motion.div>

        {/* Number */}
        <div
          className="
            font-display
            text-4xl
            sm:text-5xl
            font-bold
            gradient-text
            mb-2
          "
        >
          {count}
          {stat.suffix}
        </div>

        {/* Label */}
        <div className="text-sm text-secondary">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN ABOUT COMPONENT
========================================================= */

export default function About() {
  const {
    personal,
    stats,
    hobbies,
  } = portfolioData;

  const aboutText = personal.aboutText;

  /* Screen 1 ref */
  const introRef = useRef(null);

  const introInView = useInView(introRef, {
    once: true,
    amount: 0.5,
  });

  /* Screen 2 ref */
  const contentRef = useRef(null);

  const contentInView = useInView(contentRef, {
    once: true,
    amount: 0.25,
  });

  /* Screen 3 ref */
  const statsRef = useRef(null);

  const statsInView = useInView(statsRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-base
      "
    >
      {/* =================================================
          GLOBAL BACKGROUND EFFECTS
      ================================================= */}

      <div
        className="
          fixed
          top-1/3
          left-0
          w-[500px]
          h-[500px]
          bg-accent-purple/5
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[35%]
          right-0
          w-[500px]
          h-[500px]
          bg-accent-blue/5
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =================================================
          SCREEN 1 — ABOUT ME
      ================================================= */}

      <div
        ref={introRef}
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          overflow-hidden
        "
      >
        {/* Background circles */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={
            introInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1.5,
          }}
          className="
            absolute
            w-[400px]
            h-[400px]
            md:w-[650px]
            md:h-[650px]
            rounded-full
            bg-accent-purple/5
            blur-[120px]
            pointer-events-none
          "
        />

        {/* Small top text */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            introInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            absolute
            top-[30%]
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.4em]
            text-secondary
          "
        >
          Get to know me
        </motion.div>

        {/* Main title */}

        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          className="
            relative
            z-10
            text-center
          "
        >
          <motion.h2
            variants={titleWord}
            className="
              font-display
              font-bold
              leading-none
              tracking-tight
              text-[18vw]
              sm:text-[14vw]
              md:text-[11vw]
              lg:text-[10vw]
              whitespace-nowrap
            "
          >
            <span className="text-white">
              ABOUT{' '}
            </span>

            <span className="gradient-text">
              ME?
            </span>
          </motion.h2>

          {/* Bottom subtitle */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              introInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="
              mt-8
              text-sm
              sm:text-base
              text-secondary
            "
          >
            Scroll down to discover my journey
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            introInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 1.2,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            gap-3
            text-secondary
          "
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* =================================================
          SCREEN 2 — PHOTO + WHO AM I
      ================================================= */}

      <div
        ref={contentRef}
        className="
          relative
          min-h-screen
          flex
          items-center
          px-6
          py-24
        "
      >
        <div
          className="
            relative
            max-w-7xl
            mx-auto
            w-full
          "
        >
          {/* Section label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              contentInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              items-center
              gap-3
              mb-10
            "
          >
            <Sparkles
              size={18}
              className="text-accent-purple"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-secondary
              "
            >
              A little about me
            </span>
          </motion.div>

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >
            {/* ================= IMAGE ================= */}

            <motion.div
              variants={imageAnimation}
              initial="hidden"
              animate={
                contentInView
                  ? 'visible'
                  : 'hidden'
              }
              className="
                relative
                flex
                justify-center
              "
            >
              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  inset-5
                  bg-gradient-to-br
                  from-accent-purple/30
                  to-accent-blue/20
                  rounded-[2rem]
                  blur-3xl
                "
              />

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  relative
                  w-full
                  max-w-[650px]
                  aspect-[4/5]
                  rounded-[2rem]
                  overflow-hidden
                  border
                  border-white/10
                  shadow-2xl
                "
              >
                <img
                  src={personal.aboutImage}
                  alt={personal.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                  style={{
                    filter:
                      'grayscale(15%) contrast(1.08)',
                  }}
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                  "
                />

                {/* Floating name */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    contentInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.8,
                    duration: 0.6,
                  }}
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                  "
                >
                  <p className="text-white font-display text-2xl font-bold">
                    {personal.name}
                  </p>

                  <p className="text-white/60 text-sm mt-1">
                    Developer • AI/ML Enthusiast
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ================= DESCRIPTION ================= */}

            <motion.div
              variants={cardAnimation}
              initial="hidden"
              animate={
                contentInView
                  ? 'visible'
                  : 'hidden'
              }
              className="relative"
            >
              {/* Card */}

              <div
                className="
                  relative
                  p-8
                  sm:p-10
                  rounded-3xl
                  card-bg
                  border
                  border-base
                  glow-card
                  overflow-hidden
                "
              >
                {/* Animated accent line */}

                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={
                    contentInView
                      ? {
                          height: '75%',
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-1
                    rounded-full
                    bg-gradient-to-b
                    from-accent-purple
                    via-accent-blue
                    to-accent-cyan
                  "
                />

                {/* Heading */}

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    contentInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                  }}
                  className="
                    font-display
                    text-3xl
                    sm:text-4xl
                    font-bold
                    gradient-text
                    mb-8
                  "
                >
                  Who am I?
                </motion.h3>

                {/* Paragraphs */}

                <div className="space-y-6">
                  {aboutText.map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={
                        contentInView
                          ? {
                              opacity: 1,
                              y: 0,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.6,
                        delay:
                          0.5 + i * 0.15,
                      }}
                      className="
                        text-secondary
                        text-base
                        sm:text-lg
                        leading-relaxed
                      "
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Bottom decoration */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={
                    contentInView
                      ? {
                          width: '100%',
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  className="
                    mt-8
                    h-px
                    bg-gradient-to-r
                    from-accent-purple
                    via-accent-blue
                    to-transparent
                  "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =================================================
          SCREEN 3 — STATS + HOBBIES
      ================================================= */}

      <div
        ref={statsRef}
        className="
          relative
          min-h-screen
          flex
          items-center
          px-6
          py-24
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            w-full
          "
        >
          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={
              statsInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-14"
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-secondary
                mb-4
              "
            >
              Beyond the code
            </p>

            <h3
              className="
                font-display
                text-4xl
                sm:text-5xl
                font-bold
              "
            >
              My <span className="gradient-text">Journey</span>
            </h3>
          </motion.div>

          {/* ================= STATS ================= */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={
              statsInView
                ? 'visible'
                : 'hidden'
            }
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-4
              sm:gap-6
            "
          >
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={i}
              />
            ))}
          </motion.div>

          {/* ================= HOBBIES ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={
              statsInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              text-center
              mt-20
              mb-8
            "
          >
            <h3
              className="
                font-display
                text-3xl
                sm:text-4xl
                font-bold
              "
            >
              Things I <span className="gradient-text">Love</span>
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={
              statsInView
                ? 'visible'
                : 'hidden'
            }
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-4
              sm:gap-6
            "
          >
            {hobbies.map((hobby) => {
              const Icon =
                hobbyIcons[hobby.icon];

              return (
                <motion.div
                  key={hobby.label}
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="
                    relative
                    p-5
                    sm:p-6
                    rounded-2xl
                    card-bg
                    border
                    border-base
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                    sm:justify-start
                    gap-4
                    text-center
                    sm:text-left
                    group
                    overflow-hidden
                    hover:border-accent-purple/40
                    transition-colors
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-accent-purple/10
                      to-accent-blue/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      pointer-events-none
                    "
                  />

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15,
                    }}
                    className="
                      relative
                      z-10
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-accent-purple/20
                      to-accent-blue/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-accent-purple"
                      />
                    )}
                  </motion.div>

                  {/* Label */}

                  <span
                    className="
                      relative
                      z-10
                      text-sm
                      sm:text-base
                      font-medium
                      text-white
                    "
                  >
                    {hobby.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}