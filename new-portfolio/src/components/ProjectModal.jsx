import { motion } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Database,
  Brain,
  Workflow,
  Target,
  Lightbulb,
  Code2,
  AlertTriangle,
  Rocket,
} from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const details = project.details || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md overflow-y-auto p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 25 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl mx-auto my-4 sm:my-8 card-bg border border-base rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            {project.featured && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white text-xs font-semibold mb-3">
                <Rocket size={13} />
                Featured Project
              </span>
            )}

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 sm:px-10 py-8 space-y-10">

          {/* Description */}
          <section>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Technologies */}
          <section>
            <SectionTitle
              icon={<Code2 size={19} />}
              title="Technologies & Tools"
            />

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-base text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Overview */}
          {details.overview && (
            <DetailSection
              icon={<Lightbulb size={19} />}
              title="Project Overview"
            >
              <p>{details.overview}</p>
            </DetailSection>
          )}

          {/* Problem */}
          {details.problem && (
            <DetailSection
              icon={<Target size={19} />}
              title="Problem Statement"
            >
              <p>{details.problem}</p>
            </DetailSection>
          )}

          {/* Objective */}
          {details.objective?.length > 0 && (
            <ListSection
              icon={<Target size={19} />}
              title="Objectives"
              items={details.objective}
            />
          )}

          {/* Dataset */}
          {details.dataset && (
            <DetailSection
              icon={<Database size={19} />}
              title="Dataset"
            >
              <p>{details.dataset}</p>
            </DetailSection>
          )}

          {/* Preprocessing */}
          {details.preprocessing?.length > 0 && (
            <ListSection
              icon={<Brain size={19} />}
              title="Data Preprocessing"
              items={details.preprocessing}
            />
          )}

          {/* ML / NLP */}
          {details.approach && (
            <DetailSection
              icon={<Brain size={19} />}
              title="ML / NLP Approach"
            >
              <p>{details.approach}</p>
            </DetailSection>
          )}

          {/* Workflow */}
          {details.workflow?.length > 0 && (
            <section>
              <SectionTitle
                icon={<Workflow size={19} />}
                title="Project Workflow"
              />

              <div className="mt-5 space-y-3">
                {details.workflow.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-purple/15 border border-accent-purple/20 flex items-center justify-center text-accent-purple text-xs font-bold">
                      {index + 1}
                    </div>

                    <div className="text-sm text-secondary">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {details.features?.length > 0 && (
            <ListSection
              icon={<CheckCircle2 size={19} />}
              title="Key Features"
              items={details.features}
            />
          )}

          {/* Results */}
          {details.results && (
            <DetailSection
              icon={<CheckCircle2 size={19} />}
              title="Results & Performance"
            >
              <p>{details.results}</p>
            </DetailSection>
          )}

          {/* Challenges */}
          {details.challenges?.length > 0 && (
            <ListSection
              icon={<AlertTriangle size={19} />}
              title="Challenges"
              items={details.challenges}
            />
          )}

          {/* Future Scope */}
          {details.futureScope?.length > 0 && (
            <ListSection
              icon={<Rocket size={19} />}
              title="Future Scope"
              items={details.futureScope}
            />
          )}

          {/* Bottom Links */}
          <div className="pt-6 border-t border-base flex flex-col sm:flex-row gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-base text-secondary hover:text-white hover:border-accent-purple/40 transition-colors"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


/* =========================
   Reusable Components
========================= */

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-accent-purple">
        {icon}
      </div>

      <h2 className="font-display text-lg sm:text-xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}


function DetailSection({ icon, title, children }) {
  return (
    <section>
      <SectionTitle
        icon={icon}
        title={title}
      />

      <div className="mt-4 text-secondary text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}


function ListSection({ icon, title, items }) {
  return (
    <section>
      <SectionTitle
        icon={icon}
        title={title}
      />

      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-base"
          >
            <CheckCircle2
              size={16}
              className="text-accent-purple mt-0.5 flex-shrink-0"
            />

            <span className="text-sm text-secondary leading-relaxed">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}