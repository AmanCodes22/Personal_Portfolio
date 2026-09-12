import { motion } from 'framer-motion';
import {
  Newspaper,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';

import { portfolioData } from '@/data/portfolioData';

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   BLOG COMPONENT
========================================================= */

export default function Blog() {
  const { blogs } = portfolioData;

  return (
    <section
      id="blog"
      className="
        section-padding
        relative
        overflow-hidden
      "
    >
      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-1/4
          right-0
          w-96
          h-96
          bg-accent-blue/5
          rounded-full
          blur-[100px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-0
          left-0
          w-80
          h-80
          bg-accent-purple/5
          rounded-full
          blur-[100px]
          pointer-events-none
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="
            text-center
            mb-14
          "
        >
          {/* Small label */}

          <motion.div
            variants={headingItem}
            className="
              inline-flex
              items-center
              gap-2
              mb-4
              px-4
              py-2
              rounded-full
              border
              border-base
              card-bg
            "
          >
            <Sparkles
              size={15}
              className="text-accent-purple"
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.3em]
                text-secondary
              "
            >
              My thoughts & knowledge
            </span>
          </motion.div>

          {/* Main heading */}

          <motion.h2
            variants={headingItem}
            className="
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            Latest{' '}
            <span className="gradient-text">
              Articles
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={headingItem}
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              text-secondary
              leading-relaxed
            "
          >
            Exploring ideas, technologies, and lessons
            learned while building projects and improving
            my skills.
          </motion.p>

          {/* Decorative line */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 80,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              h-1
              mx-auto
              mt-6
              rounded-full
              bg-gradient-to-r
              from-accent-purple
              to-accent-blue
            "
          />
        </motion.div>

        {/* =================================================
            BLOG GRID
        ================================================= */}

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              variants={cardItem}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 20,
              }}
              className="
                group
                relative
                rounded-3xl
                card-bg
                border
                border-base
                overflow-hidden
                hover:border-accent-purple/40
                transition-colors
                duration-300
              "
            >
              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-accent-purple/10
                  via-transparent
                  to-accent-blue/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                  z-0
                "
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-52
                  overflow-hidden
                "
              >
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  initial={{
                    scale: 1.05,
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* Image gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--bg-card)]
                    via-black/10
                    to-transparent
                  "
                />

                {/* Category */}

                <motion.span
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                  }}
                  className="
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1.5
                    rounded-full
                    text-[10px]
                    font-bold
                    glass
                    border
                    border-base
                    text-accent-purple
                    backdrop-blur-md
                  "
                >
                  {blog.category}
                </motion.span>

                {/* Number */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    w-9
                    h-9
                    rounded-full
                    glass
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-xs
                    text-white/60
                  "
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  p-6
                "
              >
                {/* Title */}

                <h3
                  className="
                    font-display
                    text-lg
                    font-bold
                    mb-3
                    text-white
                    group-hover:gradient-text
                    transition-all
                    duration-300
                  "
                >
                  {blog.title}
                </h3>

                {/* Excerpt */}

                <p
                  className="
                    text-secondary
                    text-sm
                    leading-relaxed
                    mb-6
                    line-clamp-3
                  "
                >
                  {blog.excerpt}
                </p>

                {/* Divider */}

                <div
                  className="
                    h-px
                    w-full
                    bg-white/5
                    mb-5
                  "
                />

                {/* Meta + Read More */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  {/* Meta */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      text-[10px]
                      text-muted
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {blog.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Read More */}

                  <motion.button
                    whileHover={{
                      x: 3,
                    }}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-accent-purple
                      shrink-0
                    "
                  >
                    Read More

                    <motion.span
                      className="flex"
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.button>
                </div>
              </div>

              {/* =================================================
                  BOTTOM ANIMATED LINE
              ================================================= */}

              <motion.div
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.1,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-0.5
                  bg-gradient-to-r
                  from-accent-purple
                  via-accent-blue
                  to-accent-cyan
                "
              />
            </motion.article>
          ))}
        </motion.div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            text-center
            mt-14
          "
        >
          <p
            className="
              text-xs
              sm:text-sm
              text-muted
            "
          >
            More articles coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}