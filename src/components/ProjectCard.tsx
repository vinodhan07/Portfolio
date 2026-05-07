import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Folder, X, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const GithubSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sweepKey, setSweepKey] = useState(0);

  useEffect(() => {
    if (!isExpanded) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="group h-full"
        role="article"
        aria-label={`Project: ${project.title}`}
      >
        {/* Stable card — no tilt, glow shadow on hover */}
        <motion.div
          className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
          whileHover={{
            boxShadow:
              "0 0 0 1px rgba(var(--primary-rgb), 0.35), 0 8px 48px -8px rgba(var(--primary-rgb), 0.45)",
          }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsExpanded(true)}
          onHoverStart={() => setSweepKey((k) => k + 1)}
        >
          {/* Card body */}
          <div className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 group-hover:border-primary/30 transition-colors duration-300 flex flex-col h-full relative overflow-hidden">

            {/* Light sweep — fires once per hover-enter */}
            <AnimatePresence>
              <motion.div
                key={sweepKey}
                className="absolute inset-0 pointer-events-none z-10 rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 h-full w-[45%]"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)",
                    filter: "blur(4px)",
                  }}
                  initial={{ left: "-50%" }}
                  animate={{ left: "160%" }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Hover gradient tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0" />

            {/* GitHub button — top right, stops propagation */}
            <div
              role="link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (project.repoUrl) window.open(project.repoUrl, "_blank", "noopener,noreferrer");
              }}
              className="absolute top-5 right-5 z-[50] p-2.5 rounded-full bg-background/60 backdrop-blur-md border border-border/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubSVG size={22} />
            </div>

            {/* Expand hint */}
            <div className="absolute bottom-2 right-4 translate-y-full pt-2 z-[40] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-[10px] font-semibold text-primary/70 bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5 tracking-wider uppercase">
                Click to expand
              </span>
            </div>

            <div className="p-7 pb-14 flex flex-col h-full relative z-10">
              <div className="flex items-start justify-between mb-5 pr-12">
                <div className="flex flex-col gap-3">
                  <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                    <Folder size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="mb-5">
                <span className="text-xs font-semibold text-primary/70 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md">
                  {project.featured ? "2026" : "2025"}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-foreground/80 text-xs font-medium px-3 py-1 bg-secondary/30 rounded-full border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-primary/60 text-xs font-medium px-3 py-1 bg-primary/5 rounded-full border border-primary/20">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>

      {/* Expanded modal portal */}
      {createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsExpanded(false)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

              <motion.div
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.88, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-background rounded-2xl border border-primary/20 shadow-[0_0_80px_rgba(var(--primary-rgb),0.15)] overflow-hidden">
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-5 right-5 z-10 p-2 rounded-full bg-background/80 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>

                  <div className="p-8 pt-7">
                    <div className="flex items-start gap-4 mb-6 pr-10">
                      <div className="text-primary mt-1 shrink-0">
                        <Folder size={32} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">
                          {project.title}
                        </h2>
                        <span className="inline-block mt-2 text-xs font-semibold text-primary/70 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md">
                          {project.featured ? "2026" : "2025"}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-foreground/90 text-xs font-semibold px-3 py-1.5 bg-primary/10 rounded-full border border-primary/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-xl font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg"
                      >
                        <GithubSVG size={18} />
                        View on GitHub
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/30 rounded-xl font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
