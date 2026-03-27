import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/structured-data";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with South Florida Lasers. Request a quote, ask about our laser engraving and cutting equipment, or schedule a demonstration.",
  path: "/contact",
});

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
                  Get in{" "}
                  <span className="text-laser-blue">Touch</span>
                </h1>
                <p className="text-lg text-text-secondary">
                  Have questions about our laser equipment or need a custom
                  quote? Our team of experts is ready to help you find the
                  perfect solution for your business.
                </p>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

        {/* Contact Form + Info Section */}
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left: Contact Form */}
              <RevealOnScroll direction="left" className="lg:col-span-3">
                <ContactForm />
              </RevealOnScroll>

              {/* Right: Contact Info */}
              <RevealOnScroll direction="right" delay={0.2} className="lg:col-span-2">
                <ContactInfo />
              </RevealOnScroll>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
