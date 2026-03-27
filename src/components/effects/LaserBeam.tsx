"use client";

import { motion } from "framer-motion";

interface LaserBeamProps {
  className?: string;
  color?: "blue" | "orange";
  width?: string;
}

export function LaserBeam({ className, color = "blue", width = "100%" }: LaserBeamProps) {
  const colors = {
    blue: { main: "#00e5ff", glow: "#00e5ff40" },
    orange: { main: "#ff2d78", glow: "#ff2d7840" },
  };

  const c = colors[color];

  return (
    <div className={className}>
      <svg width={width} height="4" viewBox="0 0 800 4" preserveAspectRatio="none" className="w-full">
        <defs>
          <linearGradient id={`laser-grad-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={c.main} stopOpacity="0" />
            <stop offset="20%" stopColor={c.main} stopOpacity="1" />
            <stop offset="80%" stopColor={c.main} stopOpacity="1" />
            <stop offset="100%" stopColor={c.main} stopOpacity="0" />
          </linearGradient>
          <filter id={`glow-${color}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.line
          x1="0"
          y1="2"
          x2="800"
          y2="2"
          stroke={`url(#laser-grad-${color})`}
          strokeWidth="2"
          filter={`url(#glow-${color})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
