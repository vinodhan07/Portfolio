import { motion } from "framer-motion";

export function CodeWindow() {
  const codeLines = [
    { text: "const", color: "text-code-keyword" },
    { text: " profile ", color: "text-code-variable" },
    { text: "=", color: "text-primary" },
    { text: " {", color: "text-code-variable" },
    { text: '  name: "Vinodhan V A",', color: "text-code-string", indent: true },
    { text: '  role: "Full-Stack Engineer",', color: "text-code-string", indent: true },
    { text: '  mission: "I build intelligent systems', color: "text-code-number", indent: true },
    { text: '    that scale and secure.",', color: "text-code-number", indent: true, extraIndent: true },
    { text: "  specialties: [", color: "text-code-variable", indent: true },
    { text: '"AI/ML", "Automation", "Full-Stack"', color: "text-primary", indent: true, extraIndent: true },
    { text: "  ],", color: "text-code-variable", indent: true },
    { text: "  status: ", color: "text-code-variable", indent: true },
    { text: '"Engineering what\'s next."', color: "text-code-keyword", indent: false },
    { text: "};", color: "text-code-variable" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-2xl mx-auto lg:mx-0 group"
    >
      {/* Window Decoration */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
      
      <div className="relative bg-[#0d1117]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-auto">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[10px] font-medium text-white/40 uppercase tracking-widest">profile.ts</div>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Code Content */}
        <div className="p-8 font-mono text-xs md:text-sm lg:text-base leading-relaxed overflow-x-auto">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.05 }}
              className={`flex gap-4 ${line.indent ? "pl-4" : ""} ${line.extraIndent ? "pl-8" : ""}`}
            >
              <span className="text-white/20 select-none w-4 text-right">{i + 1}</span>
              <span className={line.color}>{line.text}</span>
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary ml-10 mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
