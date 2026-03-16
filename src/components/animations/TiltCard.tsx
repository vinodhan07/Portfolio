import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glowColor?: string;
  perspective?: number;
}

export function TiltCard({
  children,
  className = "",
  tiltStrength = 10,
  glowColor = "var(--primary)",
  perspective = 800,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation (center = 0, edges = ±tiltStrength)
  const rotateX = useTransform(smoothY, [0, 1], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltStrength, tiltStrength]);

  // Glow follows cursor position
  const glowPosX = useTransform(smoothX, [0, 1], [0, 100]);
  const glowPosY = useTransform(smoothY, [0, 1], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normalX = (e.clientX - rect.left) / rect.width;
    const normalY = (e.clientY - rect.top) / rect.height;
    mouseX.set(normalX);
    mouseY.set(normalY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}

        {/* Dynamic glow overlay */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover-parent:opacity-100 transition-opacity"
          style={{
            background: useTransform(
              [glowPosX, glowPosY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, hsl(${glowColor} / 0.12), transparent 60%)`
            ),
          }}
        />
      </motion.div>
    </motion.div>
  );
}
