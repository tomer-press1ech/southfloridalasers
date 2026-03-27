"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { LaserBeam } from "@/components/effects/LaserBeam";
import { getFeaturedProducts } from "@/data/products";
import { categoryLabels } from "@/types/product";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-24 bg-background">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Featured Equipment
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Our most popular Trotec laser machines, trusted by businesses across
              South Florida and beyond.
            </p>
            <div className="max-w-xs mx-auto">
              <LaserBeam color="blue" />
            </div>
          </RevealOnScroll>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 0.1}>
              <Link href={`/products/${product.slug}`} className="block h-full">
                <Card className="h-full p-0 overflow-hidden group">
                  {/* Product Image */}
                  <div className="relative h-52 bg-surface-elevated rounded-t-xl overflow-hidden">
                    <Image
                      src={product.images[0]?.src || "/images/logos/logo-transparent.png"}
                      alt={product.images[0]?.alt || product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Badge variant="default">
                        {categoryLabels[product.category]}
                      </Badge>
                      {product.isNew && <Badge variant="new">New</Badge>}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="text-text-primary font-semibold text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-laser-blue font-semibold">
                        {product.priceDisplay}
                      </span>
                      <span className="text-sm text-laser-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <RevealOnScroll>
            <Button variant="outline" size="lg" href="/products">
              View All Products
            </Button>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
