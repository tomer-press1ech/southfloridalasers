import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { generatePageMetadata } from "@/lib/metadata";
import { GalleryView } from "@/components/gallery/GalleryView";

export const metadata = generatePageMetadata({
  title: "Our Work",
  description:
    "Browse our portfolio of laser engraving, cutting, and custom fabrication projects. See what South Florida Lasers can create for you.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-laser-blue/5 to-transparent py-20">
        <Container>
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                Our Work
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                Explore our portfolio of laser engraving, cutting, and custom fabrication projects
                across a wide range of materials and industries.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <Container>
          <GalleryView />
        </Container>
      </section>
    </main>
  );
}
