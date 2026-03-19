import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import { useTheme } from "next-themes";

export function MouseFollower() {
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the trailing ring
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (isMobile) return;

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="hidden md:block">
      {/* Center dot (8px) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference"
        }}
        animate={{
          scale: isHovering ? 0 : 1, // Shrink dot on hover
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Trailing ring (16px base, 40px expanded) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] border border-primary/50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering 
            ? (isLight ? "hsl(var(--secondary) / 0.1)" : "hsl(var(--primary) / 0.1)") 
            : (isLight ? "hsl(var(--secondary) / 0)" : "hsl(var(--primary) / 0)"),
          borderColor: isHovering 
            ? (isLight ? "hsl(var(--secondary) / 0.8)" : "hsl(var(--primary) / 0.8)") 
            : (isLight ? "hsl(var(--secondary) / 0.5)" : "hsl(var(--primary) / 0.5)"),
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
