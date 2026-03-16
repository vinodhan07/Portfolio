import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import avatarImg from "@/assets/avatar.png";
import { useEffect, useState } from "react";
import { TextReveal, MagneticButton } from "./animations";

export function Hero() {
  const fullText = "An architect of intelligent systems combining full-stack development and automation. I build LLM-powered agents, n8n workflows, and data-driven applications that transform complex processes into scalable, secure, and production-ready solutions.";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Delay typing effect until entrance animation finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1500); // Wait 1.5s before typing
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;
    
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 25); // Slightly faster typing
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText, startTyping]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background gradient - depth layered over BackgroundEffects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background/50 z-[1] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left z-20">
            <div className="mb-4">
              <TextReveal delay={0.2} variant="blur" className="text-primary text-lg font-medium tracking-wide">
                HELLO, I'M
              </TextReveal>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
              <TextReveal delay={0.4} splitBy="chars" variant="slide" className="text-foreground">
                VINODHAN
              </TextReveal>
              <br />
              <TextReveal delay={0.8} splitBy="chars" variant="slide" className="text-primary">
                V. A.
              </TextReveal>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <div className="h-[1px] w-12 bg-primary/50 hidden md:block" />
              <span className="text-xl md:text-2xl text-muted-foreground tracking-wide uppercase font-light">
                Full-Stack & Automation Engineer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0 mb-10 text-lg h-[120px]"
            >
              {displayText}
              {!isTypingComplete && startTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-5 bg-primary ml-1 align-middle"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-10"
            >
              <MagneticButton strength={0.4}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] rounded-full px-8 h-14 text-base transition-all"
                  onClick={() => scrollToSection("#projects")}
                >
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted bg-background/50 backdrop-blur-sm rounded-full px-8 h-14 text-base"
                  asChild
                >
                  <a href="/VInodhan FINAL 1.pdf" download>
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex items-center gap-8 justify-center lg:justify-start border-t border-border/50 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </div>
                <span className="text-sm font-medium tracking-wide">
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <MapPin size={16} className="text-primary" />
                <span>Salem, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Avatar with epic reveal */}
          <div className="hidden lg:flex justify-center items-center flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[450px] h-[450px] bg-primary/20 rounded-full blur-[100px] absolute inset-0 -z-10" 
              />
              
              {/* Particle ring effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] border border-primary/20 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20%] border border-secondary/20 rounded-full border-dashed"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[420px] h-[420px] flex items-center justify-center p-8 bg-gradient-to-br from-card/40 to-background/20 backdrop-blur-md rounded-full border border-primary/10 shadow-2xl"
              >
                <img
                  src={avatarImg}
                  alt="Vinodhan Avatar"
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
