import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, FileText, Users } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certifications",
    items: [
      "Prompt Engineering – Great Learning",
      "Java Programming – Thinkverge",
      "AI for Beginners – HP Foundation 2025",
    ],
  },
  {
    icon: Trophy,
    title: "Hackathon Excellence",
    items: [
      "Special Prize – AARAM'25 UX Designathon (Cybernaut)",
      "Finalist in Urban Vision Hackathon 2025",
      "Finalist in BNKHUB – Led AI development team",
    ],
  },
  {
    icon: FileText,
    title: "Research & Publication",
    items: [
      "Published paper in the domain of multimodal AI",
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    items: [
      "Secretary – Rotaract Club",
      "Campus Google Student Ambassador",
    ],
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
                    <h4 className="font-bold text-foreground mb-3">{achievement.title}</h4>
                    <ul className="space-y-1.5">
                      {achievement.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
