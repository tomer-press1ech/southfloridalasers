import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllProducts } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import type { Product } from "@/types/product";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Equipment",
  description:
    "Browse our full catalog of professional laser engraving and cutting equipment. Fiber lasers, CO2 lasers, diode lasers, and accessories for every business.",
  path: "/products",
});

export default function ProductsPage() {
  const products: Product[] = getAllProducts();

  return (
    <main className="min-h-screen bg-background py-20">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Equipment
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional-grade laser machines for engraving, cutting, and
            marking. Find the perfect system for your business.
          </p>
        </div>

        <ProductCatalog products={products} />
      </Container>
    </main>
  );
}
