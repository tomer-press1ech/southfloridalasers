import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { LaserBeam } from "@/components/effects/LaserBeam";

export function CTABanner() {
  return (
    <section className="relative py-24 bg-surface border-y border-border overflow-hidden">
      <GlowEffect />

      <LaserBeam color="blue" />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Discover our full range of industrial laser equipment and find the
            perfect solution for your production needs. Our team is ready to
            help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/products">
              Browse Equipment
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Contact Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
