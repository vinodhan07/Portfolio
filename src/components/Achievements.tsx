import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Medal, Users, Trophy, FileText } from "lucide-react";

interface AchievementItem {
  title: string;
  description: string;
  icon: typeof Award;
}

const achievements: AchievementItem[] = [
  {
    title: "Certifications",
    description: "Prompt Engineering – Great Learning, Java Programming – Thinkverge, AI for Beginners – HP Foundation 2025",
    icon: Medal,
  },
  {
    title: "AARAM'25 UX Designathon",
    description: "Special Prize (Cybernaut) – Recognized for creativity and innovation in a 24-hour UI/UX design competition",
    icon: Trophy,
  },
  {
    title: "Urban Vision Hackathon 2025",
    description: "Finalist – Competed in the Urban Vision Hackathon 2025",
    icon: Award,
  },
  {
    title: "BNKHUB Finalist",
    description: "Led AI development team delivering production-style GenAI solution",
    icon: Award,
  },
  {
    title: "Research & Publication",
    description: "Published paper in the domain of multimodal AI",
    icon: FileText,
  },
  {
    title: "Leadership",
    description: "Secretary – Rotaract Club, Campus Google Student Ambassador",
    icon: Users,
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Achievements & Certifications</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-2"
        >
          Milestones that mark my journey of learning and excellence.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-12"
        />

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border/30"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-primary">Awards</h3>
            <div className="ml-4 w-3 h-3 rounded-full border-2 border-muted-foreground/30" />
          </div>

          {/* Grid of achievement cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
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
