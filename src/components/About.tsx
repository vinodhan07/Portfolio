import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Terminal } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"about" | "education">("about");

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
          className="h-1 bg-primary rounded-full mb-8"
        />

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-8 mb-8"
        >
          <button
            onClick={() => setActiveTab("about")}
            className={`relative pb-2 transition-colors ${
              activeTab === "about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2" />
            {activeTab === "about" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`relative pb-2 transition-colors ${
              activeTab === "education" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className={`w-2 h-2 rounded-full border-2 inline-block mr-2 ${
              activeTab === "education" ? "border-primary bg-primary" : "border-muted-foreground"
            }`} />
            {activeTab === "education" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        </motion.div>

        {/* About Tab Content */}
        {activeTab === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/50 relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Software Developer from Salem, India, crafting scalable, secure, and user-centric digital experiences.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in building system architectures that perform under real-world load—whether it's distributed backends, cloud-native apps, or{" "}
                  <span className="text-primary">intelligent tools powered by AI</span>.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I thrive at the intersection of engineering, problem-solving, and product thinking. Every project I build is driven by clarity, precision, and a relentless commitment to grow beyond yesterday's limits.
                </p>

                {/* Quote */}
                <div className="border-l-4 border-primary pl-6 py-2 my-6">
                  <p className="text-foreground font-medium text-lg italic">
                    "Turning ideas into systems. Turning systems into impact."
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
        )}

        {/* Education Tab Content */}
        {activeTab === "education" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Bachelor's Degree Card */}
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 relative">
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
            </div>

            {/* Secondary Education Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Higher Secondary Education (12th)</h4>
                    <p className="text-primary text-sm">Jayarani Matric Hr. Sec. School</p>
                    <p className="text-muted-foreground text-sm">66%</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <Calendar size={12} />
                        2023
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <MapPin size={12} />
                        Salem, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Secondary Education (10th)</h4>
                    <p className="text-primary text-sm">Sri Vidya Mandir Hr. Sec. School</p>
                    <p className="text-muted-foreground text-sm">75%</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <Calendar size={12} />
                        2021
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <MapPin size={12} />
                        Salem, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
