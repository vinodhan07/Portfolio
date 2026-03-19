import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, Workflow, Code } from "lucide-react";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";

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
  const isInView = useInView(ref, { amount: 0.2, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.12} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <TextReveal splitBy="chars" variant="slide">Experience.</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          My professional journey and contributions to impactful teams.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-16"
        />

        {/* Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical line with gradient */}
          <div className="absolute left-[20px] top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-30" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
              className="relative pl-16 pb-16 last:pb-0"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.8 + index * 0.15 }}
                  className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
                >
                  <exp.icon size={20} />
                </motion.div>
                <div className="absolute inset-0 bg-primary blur-lg opacity-40 rounded-2xl -z-10" />
              </div>
              
              {/* Card */}
              <TiltCard tiltStrength={3} perspective={1200}>
                <div className="bg-card/20 backdrop-blur-xl p-8 rounded-3xl border border-border/40 hover:border-primary/40 transition-all duration-500 group shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="mb-2">
                        {exp.duration && (
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-primary/70 font-bold tracking-wide uppercase text-sm mb-4">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
}
