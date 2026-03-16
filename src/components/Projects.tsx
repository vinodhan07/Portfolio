import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staticProjects } from "@/data/projects";
import { ProjectsGrid } from "./ProjectsGrid";
import { ParallaxSection, TextReveal } from "./animations";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.05} className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-4 block">
            SELECTED PROJECTS
          </span>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            <TextReveal variant="slide">Projects.</TextReveal>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl font-medium">
            A showcase of my expertise through real-world applications. Each project represents a bridge between complex problems and elegant, scalable solutions.
          </p>
        </motion.div>

        <ProjectsGrid projects={staticProjects} isInView={isInView} />
      </ParallaxSection>
    </section>
  );
}
