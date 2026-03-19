import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Medal, Users, Trophy, FileText, Zap } from "lucide-react";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";

interface AchievementItem {
  title: string;
  description: string | string[];
  icon: typeof Award;
  link?: string;
}

const achievements: AchievementItem[] = [
  {
    title: "Certifications",
    description: [
      "Prompt Engineering – Great Learning",
      "Java Programming – Thinkverge",
      "AI for Beginners – HP Foundation 2025",
      "Master n8n AI Agents: Build & Sell AI Agents and Automations - Udemy",
      "Claude Code in Action - Anthropic"
    ],
    icon: Medal,
    link: "https://www.linkedin.com/in/vavinodhan/details/certifications/",
  },
   {
    title: "Code Sangram secured  3rd Place and INR 30,000 Prize",
    description: "Alliance One Code Sangram, a 36-hour national-level hackathon, competing against 40+teams across India in AI and software development",
    icon: Zap,
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
    description:["Secretary – Rotaract Club", 
    "Campus Google Student Ambassador"],
    icon: Users,
  },
];

export function Achievements() {
  const ref = useRef(null);
  // Using once: true and removing amount: 0.2 because on mobile, the stacked section
  // is so tall that 20% of it is taller than the screen itself, preventing it from ever firing!
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.08} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <TextReveal splitBy="chars" variant="slide">Achievements.</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          Milestones that mark my journey of learning and excellence.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-16"
        />

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/20 backdrop-blur-xl p-10 md:p-16 rounded-[2rem] border border-border/40 relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Trophy className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Featured Recognitions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <TiltCard tiltStrength={8} className="h-full">
                  <div className="bg-background/40 backdrop-blur-md p-7 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 h-full group">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <div className="flex gap-2">
                        {achievement.link && (
                          <a 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-foreground/5 hover:bg-primary/20 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                          >
                            <FileText size={16} />
                          </a>
                        )}
                        <Award size={16} className="text-muted-foreground opacity-30 mt-2" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">{achievement.title}</h4>
                      {Array.isArray(achievement.description) ? (
                        <ul className="space-y-2">
                          {achievement.description.map((point, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ParallaxSection>
    </section>
  );
}
