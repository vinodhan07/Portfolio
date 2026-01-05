import { memo } from "react";

export const BackgroundEffects = memo(function BackgroundEffects() {
  // Reduced to 3 shapes for better performance
  const shapes = [
    { size: 300, x: "10%", y: "20%" },
    { size: 200, x: "80%", y: "10%" },
    { size: 250, x: "70%", y: "70%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-15 dark:opacity-10 will-change-auto"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      ))}
      
      {/* Static geometric particles - no animation for performance */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-primary/20 dark:bg-primary/15"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 30}%`,
            borderRadius: i % 2 === 0 ? "50%" : "0%",
          }}
        />
      ))}
    </div>
  );
});
