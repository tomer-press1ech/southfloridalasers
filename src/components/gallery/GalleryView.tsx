"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories, galleryMaterials } from "@/data/gallery";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";

export function GalleryView() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMaterial, setActiveMaterial] = useState("All");

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const materialMatch = activeMaterial === "All" || item.material === activeMaterial;
    return categoryMatch && materialMatch;
  });

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === category
                ? "bg-laser-blue text-black"
                : "bg-surface-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Material filters */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {galleryMaterials.map((material) => (
          <button
            key={material}
            onClick={() => setActiveMaterial(material)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              activeMaterial === material
                ? "bg-spark-orange text-white"
                : "bg-surface-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            {material}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <RevealOnScroll key={item.id}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg font-semibold text-text-primary px-4 text-center">{item.title}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.material}</p>
                  <Badge variant="new" className="mt-3">
                    {item.category}
                  </Badge>
                </div>
              </div>

              {/* Info below */}
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-text-primary">{item.title}</p>
                <Badge>{item.material}</Badge>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-text-secondary">No items match the selected filters.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setActiveMaterial("All");
            }}
            className="mt-4 text-sm font-medium text-laser-blue hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
