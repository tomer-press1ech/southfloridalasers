import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { LaserBeam } from "@/components/effects/LaserBeam";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "laser-engraving": "/images/services/laser-engraving.jpg",
  "laser-cutting": "/images/services/laser-cutting.jpg",
  "custom-solutions": "/images/services/custom-solutions.jpg",
  "maintenance-support": "/images/services/maintenance.jpg",
};
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Professional laser engraving, cutting, custom solutions, and maintenance services in South Florida. Precision work on any material.",
  path: "/services",
});

const iconMap: Record<string, React.ReactNode> = {
  engrave: (
    <svg className="h-12 w-12 text-laser-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  cut: (
    <svg className="h-12 w-12 text-laser-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
    </svg>
  ),
  custom: (
    <svg className="h-12 w-12 text-laser-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743" />
    </svg>
  ),
  support: (
    <svg className="h-12 w-12 text-laser-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
};

const processSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "We discuss your project requirements, materials, and timeline to understand your exact needs.",
  },
  {
    number: 2,
    title: "Configuration",
    description: "Our team designs the optimal laser setup and workflow for your specific application.",
  },
  {
    number: 3,
    title: "Installation",
    description: "Professional setup and calibration ensuring peak performance from day one.",
  },
  {
    number: 4,
    title: "Support",
    description: "Ongoing maintenance, training, and technical support to keep you running smoothly.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-laser-blue/5 to-transparent py-20">
        <Container>
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                From precision engraving to full production lines, we deliver laser solutions
                tailored to your business. Explore what we can do for you.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.id}>
                <RevealOnScroll>
                  <div
                    className={`flex flex-col gap-8 md:gap-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center`}
                  >
                    {/* Service Image */}
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-video rounded-2xl border border-border bg-surface-elevated overflow-hidden">
                        <Image
                          src={serviceImages[service.id] || "/images/logos/logo-transparent.png"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2">
                      <h2 className="text-2xl font-bold text-text-primary">{service.title}</h2>
                      <p className="mt-3 text-text-secondary">{service.description}</p>
                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <svg
                              className="mt-0.5 h-5 w-5 shrink-0 text-laser-blue"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Divider between services (not after last) */}
                {index < services.length - 1 && (
                  <div className="my-12">
                    <LaserBeam />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface py-20">
        <Container>
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Our Process</h2>
              <p className="mt-4 text-text-secondary">
                A streamlined approach that takes you from idea to execution with expert guidance at every step.
              </p>
            </div>
          </RevealOnScroll>

          <div className="relative mt-16">
            {/* Connecting line (desktop only) */}
            <div className="absolute top-6 right-12 left-12 hidden md:block">
              <LaserBeam />
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
              {processSteps.map((step) => (
                <RevealOnScroll key={step.number} delay={step.number * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-laser-blue text-lg font-bold text-black">
                      {step.number}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-text-secondary">
                Contact us today for a free consultation and discover how our laser solutions can
                transform your business.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get a Free Quote
                </Button>
                <Button href="/products" variant="outline" size="lg">
                  Browse Products
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
