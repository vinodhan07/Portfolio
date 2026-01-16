import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Network } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Vertical accent line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-1 bg-primary rounded-full hidden md:block flex-shrink-0"
          />

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                INTRODUCTION
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mt-2">About.</h2>
            </motion.div>

            <div className="space-y-12">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
                  <img 
                    src={profileImg} 
                    alt="Vinodhan - Full Stack Developer" 
                    className="relative z-10 w-[350px] h-[350px] object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Education and Achievements - Side by Side */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Education Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.25)] transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Bachelor of Computer Science and Engineering</h4>
                      <p className="text-muted-foreground text-sm">
                        Knowledge Institute of Technology (Up to 4th Semester)
                      </p>
                      <p className="text-muted-foreground text-sm">7.5 CGPA</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Higher Secondary Education (12th)</h4>
                      <p className="text-muted-foreground text-sm">
                        Jayarani Matric Hr. Sec. School
                      </p>
                      <p className="text-muted-foreground text-sm">66%</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Secondary Education (10th)</h4>
                      <p className="text-muted-foreground text-sm">
                        Sri Vidya Mandir Hr. Sec. School, Salem
                      </p>
                      <p className="text-muted-foreground text-sm">75%</p>
                    </div>
                  </div>
                </motion.div>

                {/* Achievements Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.25)] transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Certifications</h4>
                      <p className="text-muted-foreground text-sm">• Prompt Engineering – Great Learning</p>
                      <p className="text-muted-foreground text-sm">• Java Programming – Thinkverge</p>
                      <p className="text-muted-foreground text-sm">• AI for Beginners – HP Foundation 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hackathon Excellence</h4>
                      <p className="text-muted-foreground text-sm">• Special Prize – AARAM'25 UX Designathon (Cybernaut) – Recognized for creativity and innovation in a 24-hour UI/UX design competition</p>
                      <p className="text-muted-foreground text-sm">• Finalist in Urban Vision Hackathon 2025</p>
                      <p className="text-muted-foreground text-sm">• Finalist in BNKHUB – Led AI development team delivering production-style GenAI solution</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Research & Publication</h4>
                      <p className="text-muted-foreground text-sm">• Published paper in the domain of multimodal AI</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Leadership</h4>
                      <p className="text-muted-foreground text-sm">• Secretary – Rotaract Club</p>
                      <p className="text-muted-foreground text-sm">• Campus Google Student Ambassador</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Experience Card - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.25)] transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Network className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">n8n Automation Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Built AI-powered n8n automation workflows using LLMs for HR and communication use cases, integrating APIs and webhooks to deliver scalable pipelines that reduce manual workload and improve operational efficiency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Full Stack Developer Intern</h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      MEE Technologies
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Engaged in full-stack development, contributing to both front-end and back-end solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Freelance Developer</h4>
                    <p className="text-muted-foreground text-sm">
                      Specialized in delivering front-end, back-end, and Automation solutions to clients.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
