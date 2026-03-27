"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/effects/ParticleField";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { LaserBeam } from "@/components/effects/LaserBeam";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      {/* Particle background */}
      <ParticleField className="z-0" />

      {/* Glow decorations */}
      <GlowEffect color="blue" size="lg" className="top-20 right-10 opacity-60" />
      <GlowEffect color="orange" size="lg" className="bottom-20 left-10 opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/images/logos/logo-transparent.png"
            alt="South Florida Lasers"
            width={500}
            height={300}
            className="mx-auto w-72 sm:w-96 md:w-[28rem] h-auto drop-shadow-[0_0_40px_#b44dff60]"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-spark-orange text-sm font-semibold tracking-widest uppercase mb-6"
        >
          AUTHORIZED TROTEC DEALER &bull; MIAMI, FL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
        >
          Unleash the Power of
          <br />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-laser-blue via-neon-purple to-spark-orange"
            style={{ textShadow: "0 0 60px #b44dff60" }}
          >
            Laser Precision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          Professional-grade Trotec laser engraving and cutting equipment
          for businesses and creators in South Florida and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="/products">
            Explore Equipment
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Get a Quote
          </Button>
        </motion.div>

        {/* Laser beam decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <LaserBeam color="blue" />
        </motion.div>
      </div>
    </section>
  );
}
