import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
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
          A glimpse into who I am and what drives me.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-12"
        />

        {/* Avatar centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center mb-16"
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
              className="relative z-10 w-[300px] h-[300px] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground mb-2"
        >
          Formal academics focusing on core computing foundations.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-1 bg-primary rounded-full mb-8"
        />

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 relative"
        >
          {/* Decorative circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg mt-1">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bachelor of Computer Science and Engineering</h3>
                <p className="text-primary">Knowledge Institute of Technology</p>
                <p className="text-muted-foreground text-sm mt-1">CGPA: 7.5 (Till 4th Sem)</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 ml-14 md:ml-0">
              <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                <Calendar size={14} />
                2023 – 2027
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                <MapPin size={14} />
                Salem, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Additional Education - Smaller cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50"
          >
            <h4 className="font-semibold text-foreground">Higher Secondary Education (12th)</h4>
            <p className="text-primary text-sm">Jayarani Matric Hr. Sec. School</p>
            <p className="text-muted-foreground text-sm">66%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50"
          >
            <h4 className="font-semibold text-foreground">Secondary Education (10th)</h4>
            <p className="text-primary text-sm">Sri Vidya Mandir Hr. Sec. School, Salem</p>
            <p className="text-muted-foreground text-sm">75%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
