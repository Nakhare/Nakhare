import React from "react";
import { motion } from "motion/react";

interface DotGridProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  rows?: number;
  cols?: number;
}

export default function DotGrid({ 
  className = "", 
  dotSize = 2, 
  gap = 20, 
  rows = 10, 
  cols = 10 
}: DotGridProps) {
  return (
    <div 
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
        width: "fit-content"
      }}
    >
      {[...Array(rows * cols)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ 
            delay: (i % cols) * 0.05 + Math.floor(i / cols) * 0.05,
            duration: 0.5 
          }}
          className="bg-brand-maroon rounded-full"
          style={{ width: dotSize, height: dotSize }}
        />
      ))}
    </div>
  );
}
