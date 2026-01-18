import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import avatarImg from "@/assets/avatar.png";
import { useEffect, useState } from "react";

export function Hero() {
  const fullText = "An architect of intelligent systems combining full-stack development and automation. I build LLM-powered agents, n8n workflows, and data-driven applications that transform complex processes into scalable, secure, and production-ready solutions.";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText]);

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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/10" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-lg mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
            >
              <span className="text-primary">Vinodhan V A</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-2xl md:text-3xl text-muted-foreground">Full-Stack & Automation Engineer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0 mb-8"
            >
              {displayText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
                />
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-white text-black border border-white hover:bg-white/90 rounded-full px-6"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted/50 rounded-full px-6"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm border border-green-500/50 text-green-500 px-3 py-1 rounded-full">
                  Open to work
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                <span>Salem, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center flex-1"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl absolute inset-0" />
              <div className="relative z-10 w-[400px] h-[400px] flex items-center justify-center">
                <img 
                  src={avatarImg} 
                  alt="Vinodhan Avatar" 
                  className="w-[420px] h-[420px] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
