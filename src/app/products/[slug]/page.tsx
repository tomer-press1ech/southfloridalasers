import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { LaserBeam } from "@/components/effects/LaserBeam";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { categoryLabels } from "@/types/product";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return generatePageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
    image: product.images[0]?.src,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = product.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: product.name, href: `/products/${product.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-background py-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-laser-blue transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-laser-blue transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>

        {/* Product Hero: 2-col desktop, stacked mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left: Product Image */}
          <div className="relative aspect-video bg-surface-elevated rounded-xl overflow-hidden">
            <Image
              src={product.images[0]?.src || "/images/logos/logo-transparent.png"}
              alt={product.images[0]?.alt || product.name}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col gap-5">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.isNew && <Badge variant="new">New</Badge>}
              {product.isFeatured && (
                <Badge variant="featured">Featured</Badge>
              )}
              <Badge>{categoryLabels[product.category]}</Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-text-primary">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-text-secondary">{product.shortDescription}</p>

            {/* Price */}
            <p className="text-2xl text-laser-blue font-bold">
              {product.priceDisplay}
            </p>

            {/* Stock Status */}
            {product.inStock ? (
              <p className="flex items-center gap-2 text-sm font-medium text-green-500">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                In Stock
              </p>
            ) : (
              <p className="flex items-center gap-2 text-sm font-medium text-red-500">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                Out of Stock
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="tel:+17868591930" variant="outline" size="lg">
                Call Us
              </Button>
            </div>

            {/* Divider */}
            <LaserBeam className="my-2" />
          </div>
        </div>

        {/* Features Section */}
        {product.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <svg
                    className="w-5 h-5 text-laser-blue mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specifications Table */}
        {product.specifications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Specifications
            </h2>
            <div className="rounded-xl border border-border overflow-hidden">
              {product.specifications.map((spec, i) => (
                <div
                  key={i}
                  className={`flex justify-between px-6 py-3 ${
                    i % 2 === 0 ? "bg-surface" : "bg-surface-elevated"
                  }`}
                >
                  <span className="text-text-secondary font-medium">
                    {spec.label}
                  </span>
                  <span className="text-text-primary">
                    {spec.value}
                    {spec.unit ? ` ${spec.unit}` : ""}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compatible Materials */}
        {product.materials.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Compatible Materials
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.materials.map((material) => (
                <Badge key={material}>{material}</Badge>
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => {
                if (!related) return null;
                return (
                  <Link
                    key={related.id}
                    href={`/products/${related.slug}`}
                    className="block"
                  >
                    <Card className="flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-36 bg-surface-elevated rounded-lg overflow-hidden mb-3">
                        <Image
                          src={related.images[0]?.src || "/images/logos/logo-transparent.png"}
                          alt={related.images[0]?.alt || related.name}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {related.name}
                      </h3>
                      <p className="text-sm text-text-secondary line-clamp-2 mb-2">
                        {related.shortDescription}
                      </p>
                      <p className="text-laser-blue font-semibold">
                        {related.priceDisplay}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
