"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { LaserBeam } from "@/components/effects/LaserBeam";

export function VideoShowcase() {
  return (
    <section className="py-24 bg-surface/50 border-y border-border">
      <Container>
        <RevealOnScroll>
          <div className="text-center mb-12">
            <p className="text-spark-orange text-sm font-semibold tracking-widest uppercase mb-4">
              SEE IT IN ACTION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Precision You Can See
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Watch Trotec lasers engrave and cut with incredible speed and accuracy.
              This is what world-class laser technology looks like.
            </p>
            <div className="max-w-xs mx-auto">
              <LaserBeam color="orange" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_#b44dff15]">
              <video
                className="w-full"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/logos/logo-transparent.png"
              >
                <source src="/videos/trotec-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </RevealOnScroll>

        {/* Feature callouts below video */}
        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-laser-blue mb-1">4.3 m/s</div>
              <p className="text-sm text-text-secondary">Maximum Engraving Speed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-spark-orange mb-1">1000 DPI</div>
              <p className="text-sm text-text-secondary">Ultra-Fine Resolution</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple mb-1">Flexx™</div>
              <p className="text-sm text-text-secondary">CO2 + Fiber in One Machine</p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
