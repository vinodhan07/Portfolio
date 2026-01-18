import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectsGridProps {
  projects: Project[];
  isInView: boolean;
}

export function ProjectsGrid({ projects, isInView }: ProjectsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      role="list"
      aria-label="Projects grid"
    >
      {projects.map((project, index) => (
        <div role="listitem" key={project.title}>
          <ProjectCard
            project={project}
            index={index}
            isInView={isInView}
          />
        </div>
      ))}
    </motion.div>
  );
}
