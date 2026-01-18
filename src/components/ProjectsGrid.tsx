import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  isInView: boolean;
}

export function ProjectsGrid({ projects, isInView }: ProjectsGridProps) {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
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
    </div>
  );
}
