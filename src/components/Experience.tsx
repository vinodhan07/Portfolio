import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, Workflow, Code } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  duration?: string;
  icon: typeof Briefcase;
}

const experiences: ExperienceItem[] = [
  {
    title: "n8n Automation Experience",
    company: "Freelance / Personal Projects",
    description: "Built AI-powered n8n automation workflows using LLMs for HR and communication use cases, integrating APIs and webhooks to deliver scalable pipelines that reduce manual workload and improve operational efficiency.",
    icon: Workflow,
  },
  {
    title: "Full Stack Developer Intern",
    company: "MEE Technologies",
    description: "Engaged in full-stack development, contributing to both front-end and back-end solutions.",
    icon: Briefcase,
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    description: "Specialized in delivering front-end, back-end, and Automation solutions to clients.",
    icon: Code,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-2"
        >
          My professional journey and contributions to impactful teams.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-12"
        />

        {/* Decorative floating circles */}
        <div className="relative">
          <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-primary" />
          <div className="absolute top-8 left-[55%] w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[9px] top-10 bottom-0 w-0.5 bg-primary/50" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              
              {/* Card */}
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                  
                  {exp.duration && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
