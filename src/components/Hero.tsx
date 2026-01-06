import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import avatarImg from "@/assets/avatar.png";
import { useEffect, useState } from "react";

export function Hero() {
  const fullText = "I'm a full-stack developer passionate about building scalable web applications and creating seamless user experiences that drive innovation and deliver tangible impact.";
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

  const socialLinks = [
    { icon: Github, href: "https://github.com/vinodhan07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vavinodhan/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vino__v21/", label: "Instagram" },
    { icon: Mail, href: "mailto:vinovb21@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Organic blob backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 20, -20],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [20, -20, 20],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex gap-8 text-center lg:text-left"
          >
            {/* Vertical accent line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-1 bg-primary rounded-full hidden lg:block"
            />

            <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  Hi,
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:whitespace-nowrap">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                    VINODHAN V A
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    className="inline-block origin-[70%_70%] ml-2"
                  >
                    👋🏻
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0"
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
                <Button
                  variant="outline"
                  size="lg"
                  className="ml-4 border-muted-foreground/30 hover:bg-muted/50"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center flex-1"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl absolute inset-0 animate-glow" />
              <div className="relative z-10 w-[500px] h-[500px] flex items-center justify-center">
                <img 
                  src={avatarImg} 
                  alt="Vinodhan Avatar" 
                  className="w-[520px] h-[520px] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
