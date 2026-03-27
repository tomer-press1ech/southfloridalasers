import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { LaserBeam } from "@/components/effects/LaserBeam";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about South Florida Lasers — our mission, our team, and why we're the region's trusted laser equipment partner.",
  path: "/about",
});

const differentiators = [
  {
    title: "Industry Expertise",
    description:
      "Over 15 years of hands-on experience with laser technology across dozens of industries.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Curated Selection",
    description:
      "We test and validate every machine we sell. If it doesn't meet our standards, we don't carry it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Full-Service Support",
    description:
      "From pre-sale consultation to installation, training, and ongoing maintenance — we're with you.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "South Florida Based",
    description:
      "Local presence means fast delivery, on-site service, and a team that understands your market.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-laser-blue/5 to-transparent" />
        <Container className="relative">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-spark-orange text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powering Innovation with{" "}
                <span className="text-laser-blue">Laser Precision</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                South Florida Lasers was founded with a simple mission: make
                professional-grade laser technology accessible to businesses of every
                size. From our base in Miami, we serve creators,
                manufacturers, and entrepreneurs across South Florida and beyond.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <LaserBeam color="blue" className="max-w-4xl mx-auto" />

      {/* Mission */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/company-workshop.jpg"
                  alt="South Florida Lasers workshop and facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div>
                <p className="text-spark-orange text-sm font-semibold tracking-widest uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="text-3xl font-bold mb-6">
                  Empowering Businesses Through Technology
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    We believe that the right tools can transform a business. Laser
                    technology opens doors to new products, higher quality, faster
                    turnaround, and better margins — but only if you have the right
                    equipment and the right partner.
                  </p>
                  <p>
                    That&apos;s where we come in. We don&apos;t just sell machines — we
                    build relationships. Every customer gets personalized guidance from
                    our team of laser experts who understand your industry, your
                    materials, and your goals.
                  </p>
                  <p>
                    From your first inquiry to years after your purchase, we&apos;re
                    invested in your success. Because when our customers thrive, so do
                    we.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface/50">
        <Container>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-spark-orange text-sm font-semibold tracking-widest uppercase mb-4">
                Why South Florida Lasers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What Sets Us Apart
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <div className="h-12 w-12 rounded-xl bg-laser-blue/10 flex items-center justify-center mx-auto mb-4 text-laser-blue">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface/50 border-t border-border">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-text-secondary mb-8">
                Whether you&apos;re just starting your laser journey or scaling up your
                production, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/products" size="lg">
                  Explore Equipment
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </div>
  );
}
