import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { TextReveal, MagneticButton } from "./animations";
import { CodeWindow } from "./CodeWindow";

export function Hero() {
  const fullText = "An architect of the web, blending systems engineering with creative design. I don't just build applications; I craft resilient digital ecosystems that thrive under pressure.";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 25);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-30 dark:opacity-20" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 flex items-center gap-2"
            >
              <Sparkles size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground text-lg md:text-xl font-medium">Hello, I'm</span>
            </motion.div>

            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black mb-4 tracking-[-0.05em] leading-[0.9] flex flex-col">
              <TextReveal delay={0.4} splitBy="chars" variant="slide" className="text-foreground">
                VINODHAN
              </TextReveal>
              <TextReveal delay={0.8} splitBy="chars" variant="slide" className="text-primary/95">
                V. A.
              </TextReveal>
            </h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground/80 mb-8 font-medium tracking-tight"
            >
              Full-Stack & Automation Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-muted-foreground/70 max-w-xl leading-relaxed mb-10 text-lg md:text-xl"
            >
              {displayText}
              {!isTypingComplete && startTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-6 bg-primary ml-1 align-middle"
                />
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5 mb-16"
            >
              <MagneticButton strength={0.4}>
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 h-16 text-lg font-bold transition-all shadow-xl"
                  onClick={() => scrollToSection("#projects")}
                >
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 hover:bg-white/5 bg-white/5 backdrop-blur-sm rounded-full px-10 h-16 text-lg font-bold text-foreground"
                  asChild
                >
                  <a href="/VInodhan FINAL 1.pdf" download>
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5"
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-success/10 border border-success/20 rounded-full">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-success">
                  Open to work
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground/60 text-xs font-black uppercase tracking-widest">
                <MapPin size={14} className="text-primary/60" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Code Window illustration */}
          <div className="hidden lg:flex flex-1 justify-end items-center z-10 perspective-1000">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
