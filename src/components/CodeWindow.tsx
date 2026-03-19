import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export function CodeWindow() {
  const codeLines = [
    { text: "const", color: "text-code-keyword" },
    { text: " profile ", color: "text-code-variable" },
    { text: "=", color: "text-primary" },
    { text: " {", color: "text-code-variable" },
    { text: '  name: "Vinodhan V A",', color: "text-code-string", indent: true },
    { text: '  role: "AI Engineer & Full Stack Developer",', color: "text-code-string", indent: true },
    { text: '  mission: "I build intelligent systems', color: "text-code-number", indent: true },
    { text: '    that scale and secure.",', color: "text-code-number", indent: true, extraIndent: true },
    { text: "  specialties: [", color: "text-code-variable", indent: true },
    { text: '"AI/ML", "Automation", "Full-Stack"', color: "text-primary", indent: true, extraIndent: true },
    { text: "  ],", color: "text-code-variable", indent: true },
    { text: "  status: ", color: "text-code-variable", indent: true },
    { text: '"Engineering what\'s next."', color: "text-code-keyword", indent: false },
    { text: "};", color: "text-code-variable" },
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(Array(codeLines.length).fill(""));

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const currentLineText = codeLines[currentLineIndex].text;

    if (currentCharIndex < currentLineText.length) {
      const timeout = setTimeout(() => {
        const newLines = [...displayedLines];
        newLines[currentLineIndex] = currentLineText.slice(0, currentCharIndex + 1);
        setDisplayedLines(newLines);
        setCurrentCharIndex(currentCharIndex + 1);
      }, 30 + Math.random() * 40); // Randomized typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 200); // Delay between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-2xl mx-auto lg:mx-0 group"
    >
      {/* Window Decoration */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />

      <div className="relative bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-auto">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-muted/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest px-2 py-0.5 rounded bg-foreground/5">profile.ts</div>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Code Content */}
        <div className="p-8 font-mono text-xs md:text-sm lg:text-base leading-relaxed overflow-x-auto min-h-[350px]">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`flex gap-4 ${line.indent ? "pl-4" : ""} ${line.extraIndent ? "pl-8" : ""} ${i > currentLineIndex && displayedLines[i] === "" ? "invisible" : ""}`}
            >
              <span className="text-muted-foreground/30 select-none w-4 text-right">{i + 1}</span>
              <span className={line.color}>
                {displayedLines[i]}
                {i === currentLineIndex && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
