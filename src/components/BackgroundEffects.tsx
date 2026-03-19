import { memo } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

export const BackgroundEffects = memo(function BackgroundEffects() {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--background)),hsl(var(--background)_/_0.8))]" />

      {/* Animated gradient orbs (Desktop only for max performance) */}
      {!isMobile && (
        <>
          <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full opacity-20 dark:opacity-15 blur-[100px]"
        style={{ background: 'hsl(var(--primary))' }}
      />
      
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-full opacity-10 dark:opacity-10 blur-[120px]"
        style={{ background: 'hsl(var(--secondary))' }}
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 50, -100, 0],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] left-[40%] w-[30vw] h-[30vh] rounded-full opacity-10 dark:opacity-5 blur-[80px]"
        style={{ background: 'hsl(var(--primary))' }}
      />
        </>
      )}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
    </div>
  );
});
