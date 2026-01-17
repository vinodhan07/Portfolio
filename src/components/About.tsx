import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-2"
        >
          Get to know me better.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-12"
        />

        {/* About Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/50 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a pre-final year Computer Science student from Salem, India, building AI-driven and automation-focused software systems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                From LLM agents and n8n workflows to full-stack and{" "}
                <span className="text-primary">computer vision solutions</span>, I turn ideas into scalable, real-world products.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-primary pl-6 py-2 my-6">
                <p className="text-foreground font-medium text-lg italic">
                  "Turning intelligence into automation. Turning automation into impact."
                </p>
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-3 text-sm">
                <Terminal size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">CODE.</span>
                <span className="text-primary">SCALE.</span>
                <span className="text-primary">SECURE.</span>
                <span className="text-primary">REPEAT.</span>
              </div>
            </div>

            {/* Avatar */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
                <img 
                  src={profileImg} 
                  alt="Vinodhan - Full Stack Developer" 
                  className="relative z-10 w-[250px] h-[250px] object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
