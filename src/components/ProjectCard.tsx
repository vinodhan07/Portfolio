import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header with folder icon, title, and action icons */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <Folder size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github size={18} />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} demo`}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Year badge */}
        <div className="mb-4">
          <span className="text-xs font-medium text-muted-foreground px-2 py-1 border border-border rounded">
            {project.featured ? "2026" : "2025"}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-primary text-xs font-medium px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
