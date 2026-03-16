import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, School } from "lucide-react";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1} className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <TextReveal variant="slide">Education</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          My academic journey and milestones.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-16"
        />

        {/* Education Cards */}
        <div className="space-y-8">
          {/* Bachelor's Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TiltCard tiltStrength={2}>
              <div className="bg-card/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-border/40 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={160} />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight">Bachelor of Computer Science and Engineering</h3>
                      <p className="text-primary text-lg font-bold">Knowledge Institute of Technology</p>
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-widest">
                        CGPA: 7.7 (Till 5th Sem)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 min-w-[180px]">
                    <span className="flex items-center gap-3 px-5 py-2.5 bg-secondary/30 border border-border/40 rounded-xl text-sm font-bold text-foreground/80">
                      <Calendar size={18} className="text-primary" />
                      2023 – 2027
                    </span>
                    <span className="flex items-center gap-3 px-5 py-2.5 bg-secondary/30 border border-border/40 rounded-xl text-sm font-bold text-foreground/80">
                      <MapPin size={18} className="text-primary" />
                      Salem, India
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Secondary Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <TiltCard tiltStrength={4} className="h-full">
                <div className="bg-card/20 backdrop-blur-xl p-8 rounded-[2rem] border border-border/40 hover:border-primary/40 transition-all duration-500 h-full group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <School size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-foreground mb-1">Higher Secondary</h4>
                      <p className="text-primary font-bold text-sm mb-2">Jayarani Matric Hr. Sec. School</p>
                      <p className="text-muted-foreground text-sm font-medium mb-6 italic">Score: 66%</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-background/40 border border-border/40 rounded-lg text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                          <Calendar size={12} />
                          2023
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-background/40 border border-border/40 rounded-lg text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                          <MapPin size={12} />
                          Salem
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <TiltCard tiltStrength={4} className="h-full">
                <div className="bg-card/20 backdrop-blur-xl p-8 rounded-[2rem] border border-border/40 hover:border-primary/40 transition-all duration-500 h-full group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <School size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-foreground mb-1">Secondary School</h4>
                      <p className="text-primary font-bold text-sm mb-2">Sri Vidya Mandir Hr. Sec. School</p>
                      <p className="text-muted-foreground text-sm font-medium mb-6 italic">Score: 75%</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-background/40 border border-border/40 rounded-lg text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                          <Calendar size={12} />
                          2021
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-background/40 border border-border/40 rounded-lg text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                          <MapPin size={12} />
                          Salem
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
