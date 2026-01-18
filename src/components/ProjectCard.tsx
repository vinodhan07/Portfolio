import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "./ui/button";

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
      whileHover={{ scale: 1.03, y: -4 }}
      className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col h-full"
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-primary text-xs font-mono px-2 py-1 bg-primary/10 rounded-md border border-primary/20"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          {project.demoUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
