import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useIsMobile, useReducedMotion } from "../../hooks/use-mobile";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** How much the content moves relative to scroll. 0 = no parallax, 0.5 = strong */
  speed?: number;
  /** Direction of parallax movement */
  direction?: "up" | "down";
  /** Add a fade-in effect as the section enters view */
  fadeIn?: boolean;
  /** Scale effect range */
  scale?: [number, number];
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.15,
  direction = "up",
  fadeIn = true,
  scale,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const speedMultiplier = direction === "up" ? -1 : 1;
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [speed * 200 * speedMultiplier, -speed * 200 * speedMultiplier]
  );
  const y = useSpring(rawY, { damping: 30, stiffness: 100 });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scaleValue = scale
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [scale[0], 1, 1, scale[1]])
    : undefined;

  if (isMobile || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        ...(fadeIn ? { opacity } : {}),
        ...(scaleValue ? { scale: scaleValue } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
