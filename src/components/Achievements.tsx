import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, FileText, Github, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "SIH 2024 & 2025",
    description: "Consecutively nominated after clearing prelims to represent the institution with innovative solutions.",
  },
  {
    icon: Trophy,
    title: "Futurepreneur 2024 (StartupTN)",
    description: "Secured 3rd place (Coimbatore zone) for developing a high-impact startup idea.",
  },
  {
    icon: FileText,
    title: "Patent Publication",
    description: "BioKey: A Biometric Authentication-Based Application for Secure Data Access (202541051836A).",
  },
  {
    icon: FileText,
    title: "Paper Publication",
    description: "Lurnix: An Intelligent Ecosystem for Neurodiverse Learning through AI and Multimodal Content.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Built RouteLens (VS Code) & Code Tracer CLI (NPM) for enhanced developer productivity.",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "14+ Real-World Projects (8+ Solo Projects) with 1000+ Contributions; LeetCode: 110+ problems.",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Achievements & Certifications</h2>
          <p className="text-muted-foreground">Milestones that mark my journey of learning and excellence.</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-primary" size={24} />
            <h3 className="text-2xl font-bold">Awards</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <achievement.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
