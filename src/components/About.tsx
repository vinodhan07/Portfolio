import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <TextReveal splitBy="chars" variant="slide">About Me.</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          Get to know me better.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-12"
        />

        {/* About Content */}
        <TiltCard tiltStrength={3} perspective={1000}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="bg-card/20 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/40 relative overflow-hidden shadow-2xl"
          >
            {/* Minimalist glow behind the card content */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-3 gap-12 items-center relative z-10">
              {/* Content */}
              <div className="lg:col-span-2 space-y-8">
                <TextReveal variant="blur" delay={0.6} className="text-muted-foreground leading-relaxed text-lg" splitBy="lines">
                  I'm a pre-final year Computer Science student from Salem, India, building AI-driven and automation-focused software systems.
                </TextReveal>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  From LLM agents and n8n workflows to full-stack and{" "}
                  <span className="text-primary font-semibold">computer vision solutions</span>, I turn ideas into scalable, real-world products.
                </p>

                {/* Quote */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="border-l-4 border-primary pl-8 py-4 my-8 bg-primary/5 rounded-r-xl"
                >
                  <p className="text-foreground font-medium text-xl md:text-2xl italic leading-snug">
                    "Turning intelligence into automation.<br/>
                    <span className="text-primary">Turning automation into impact.</span>"
                  </p>
                </motion.div>

                {/* Tagline */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-widest bg-background/50 w-fit px-6 py-3 rounded-full border border-border/50"
                >
                  <Terminal size={18} className="text-muted-foreground" />
                  <span className="text-muted-foreground">CODE.</span>
                  <span className="text-primary">SCALE.</span>
                  <span className="text-primary">SECURE.</span>
                  <span className="text-primary hover:text-foreground transition-colors cursor-default">REPEAT.</span>
                </motion.div>
              </div>

              {/* Avatar */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-110" />
                  <img 
                    src={profileImg} 
                    alt="Vinodhan - Full Stack Developer" 
                    className="relative z-10 w-[300px] h-[300px] object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </ParallaxSection>
    </section>
  );
}
