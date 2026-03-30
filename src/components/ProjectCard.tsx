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
        <div className="bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary-rgb),0.2)] transition-all duration-300 flex flex-col h-full transform-gpu overflow-hidden relative">
          
          {/* GitHub Icon in Absolute Top Right Corner */}
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
            <Github size={22} />
          </div>

          {/* Subtle noise texture overlay and gradient hover preview */}
          <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
          
          <div className="p-7 flex flex-col h-full relative z-10">
            {/* Header with folder icon, title, and action icons */}
            <div className="flex items-start justify-between mb-5 pr-12">
              <div className="flex flex-col gap-3">
                <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                  <Folder size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300">
                  <span
                    role="link"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (project.repoUrl) window.open(project.repoUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="text-foreground group-hover:text-primary hover:underline decoration-primary/50 underline-offset-[6px] cursor-pointer transition-all"
                  >
                    {project.title}
                  </span>
                </h3>
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
