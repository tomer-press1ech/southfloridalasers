"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { categoryLabels, type ProductCategory } from "@/types/product";
import type { Product } from "@/types/product";

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories = Object.entries(categoryLabels) as [ProductCategory, string][];

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeCategory === "all"
              ? "bg-laser-blue text-black"
              : "bg-surface-elevated text-text-secondary hover:text-text-primary"
          }`}
        >
          All
        </button>
        {categories.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === key
                ? "bg-laser-blue text-black"
                : "bg-surface-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <RevealOnScroll key={product.id} delay={index * 0.1}>
            <Link href={`/products/${product.slug}`} className="block h-full">
              <Card className="h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-48 bg-surface-elevated rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.images[0]?.src || "/images/logos/logo-transparent.png"}
                    alt={product.images[0]?.alt || product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.isNew && <Badge variant="new">New</Badge>}
                  {product.isFeatured && (
                    <Badge variant="featured">Featured</Badge>
                  )}
                  <Badge>{categoryLabels[product.category]}</Badge>
                </div>

                {/* Product Info */}
                <h3 className="font-semibold text-text-primary mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-grow">
                  {product.shortDescription}
                </p>

                {/* Price */}
                <p className="text-laser-blue font-semibold">
                  {product.priceDisplay}
                </p>
              </Card>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-secondary text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
