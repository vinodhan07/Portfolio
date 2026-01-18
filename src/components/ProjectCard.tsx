import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Folder className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.demoUrl || project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Open project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Year Badge */}
      {project.year && (
        <div className="mb-4">
          <Badge 
            variant="outline" 
            className="text-xs font-normal border-border text-muted-foreground"
          >
            {project.year}
          </Badge>
        </div>
      )}

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary/10 text-primary border-0 text-xs font-normal px-3 py-1 hover:bg-primary/20 transition-colors"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
