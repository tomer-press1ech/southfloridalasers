import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

const materials = [
  { name: "Wood", image: "/images/materials/wood.jpg" },
  { name: "Acrylic", image: "/images/materials/acrylic.jpg" },
  { name: "Stainless Steel", image: "/images/materials/steel.jpg" },
  { name: "Leather", image: "/images/materials/leather.jpg" },
  { name: "Glass", image: "/images/materials/glass.jpg" },
  { name: "Aluminum", image: "/images/materials/aluminum.jpg" },
  { name: "Paper & Card", image: "/images/materials/paper.jpg" },
  { name: "Fabric", image: "/images/materials/fabric.jpg" },
  { name: "Brass", image: "/images/materials/brass.jpg" },
  { name: "Rubber", image: "/images/materials/rubber.jpg" },
  { name: "MDF", image: "/images/materials/mdf.jpg" },
  { name: "Stone", image: "/images/materials/stone.jpg" },
];

export function MaterialsGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Materials We Work With
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our Trotec laser systems handle a wide range of materials with
              precision and consistency, delivering exceptional results every time.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {materials.map((material, index) => (
            <RevealOnScroll key={material.name} delay={index * 0.05}>
              <div className="group bg-surface-elevated rounded-xl overflow-hidden border border-border hover:border-neon-purple/30 transition-all hover:shadow-[0_0_20px_#b44dff10]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={material.image}
                    alt={`${material.name} laser engraving material`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <p className="text-sm text-text-primary font-medium text-center py-3 px-2">
                  {material.name}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
