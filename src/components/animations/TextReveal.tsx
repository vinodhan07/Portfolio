import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** 'words' splits by word, 'chars' splits by character, 'lines' treats as single block */
  splitBy?: "words" | "chars" | "lines";
  /** Animation style: 'blur' fades in with blur, 'slide' slides up, 'scale' scales in, 'typing' reveals char by char */
  variant?: "blur" | "slide" | "scale" | "typing";
}

const variants = {
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 8 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slide: {
    hidden: { opacity: 0, y: 30, rotateX: 40 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  typing: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  splitBy = "words",
  variant = "blur",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  // Extract text content
  const text = typeof children === "string" ? children : "";

  if (!text) {
    // For non-string children, animate as a single block
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={variants[variant].hidden}
        animate={isInView ? variants[variant].visible : variants[variant].hidden}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    );
  }

  if (splitBy === "lines") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ perspective: 400 }}
        initial={variants[variant].hidden}
        animate={isInView ? variants[variant].visible : variants[variant].hidden}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {text}
      </motion.div>
    );
  }

  if (splitBy === "chars") {
    const words = text.split(" ");
    const startIndices: number[] = [0];
    for (let i = 0; i < words.length - 1; i++) {
      startIndices.push(startIndices[i] + words[i].length + 1);
    }

    return (
      <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`} style={{ perspective: 400 }}>
        {words.map((word, wordI) => (
          <span key={`word-${wordI}`} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charI) => {
              const i = startIndices[wordI] + charI;
              return (
                <motion.span
                  key={`${char}-${i}`}
                  className="inline-block"
                  initial={variants[variant].hidden}
                  animate={isInView ? variants[variant].visible : variants[variant].hidden}
                  transition={{
                    duration: variant === "typing" ? 0.01 : duration * 0.8,
                    delay: delay + i * (variant === "typing" ? 0.04 : 0.02),
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    );
  }

  // Handle words mode
  const words = text.split(" ");
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ perspective: 400 }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={variants[variant].hidden}
          animate={isInView ? variants[variant].visible : variants[variant].hidden}
          transition={{
            duration: duration * 0.8,
            delay: delay + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}<span>&nbsp;</span>
        </motion.span>
      ))}
    </span>
  );
}
