import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { MagneticButton, TextReveal } from "./animations";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-xl border-b border-border/40 py-3" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-black text-foreground cursor-pointer tracking-tighter"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollToSection("#home")}
          >
            <span className="text-primary font-black">V</span>INODHAN<span className="text-primary">.ai</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <MagneticButton key={link.name} strength={0.2} className="px-3">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-1 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </MagneticButton>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <ThemeToggle />
              <MagneticButton strength={0.3}>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all shadow-[0_5px_15px_-5px_rgba(var(--primary-rgb),0.4)]"
                >
                  Contact
                </Button>
              </MagneticButton>
            </div>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm h-screen"
                style={{ top: 0, left: 0, right: 0, bottom: 0 }}
              />

              {/* Drawer */}
              <motion.nav
                className="md:hidden fixed top-0 right-0 h-screen z-50 w-[80%] max-w-sm bg-card/95 backdrop-blur-xl border-l border-border/40 shadow-2xl flex flex-col pt-6 px-6 gap-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <div className="flex justify-end items-center gap-4 mb-8">
                  <ThemeToggle />
                  <button
                    className="p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center bg-muted/50 rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-2xl font-black text-foreground hover:text-primary transition-colors text-left py-3 border-b border-border/20"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto mb-10"
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-2xl h-14 text-lg font-bold shadow-lg shadow-primary/25 min-h-[44px]"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
