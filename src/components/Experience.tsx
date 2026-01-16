import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Network } from "lucide-react";

const experiences = [
  {
    title: "n8n Automation Experience",
    company: "Workflow Automation",
    duration: "Ongoing",
    description: "Built AI-powered n8n automation workflows using LLMs for HR and communication use cases, integrating APIs and webhooks to deliver scalable pipelines that reduce manual workload and improve operational efficiency.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "MEE Technologies",
    duration: "3 Months",
    description: "Engaged in full-stack development, contributing to both front-end and back-end solutions using modern frameworks.",
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    duration: "Ongoing",
    description: "Specialized in delivering front-end, back-end, and Automation solutions to clients with focus on quality and timely delivery.",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground">My professional journey and contributions to impactful teams.</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
