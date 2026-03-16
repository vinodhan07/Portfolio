import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Project } from "@/data/projects";
import { TiltCard } from "./animations";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      <TiltCard tiltStrength={8} className="h-full">
        <div className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary-rgb),0.2)] transition-all duration-300 flex flex-col h-full transform-gpu overflow-hidden">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')" }} />
          
          <div className="p-7 flex flex-col h-full relative z-10">
            {/* Header with folder icon, title, and action icons */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                  <Folder size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2 rounded-lg hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
                >
                  <Github size={20} />
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} demo`}
                    className="p-2 rounded-lg hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Year badge */}
            <div className="mb-5">
              <span className="text-xs font-semibold text-primary/70 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md">
                {project.featured ? "2026" : "2025"}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-foreground/80 text-xs font-medium px-3 py-1 bg-secondary/30 rounded-full border border-border group-hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}
