"use client";

import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function StatsCounter({ value, suffix = "", prefix = "", label, duration = 2 }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration });
      return () => controls.stop();
    }
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <div ref={ref} className="text-center">
      <span
        ref={displayRef}
        className="block text-4xl md:text-5xl font-bold text-laser-blue"
      >
        {prefix}0{suffix}
      </span>
      <span className="mt-2 block text-sm text-text-secondary uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
