export type ProductCategory =
  | "flatbed-engravers"
  | "fiber-marking"
  | "accessories";

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  images: ProductImage[];
  price?: number;
  priceDisplay: string;
  specifications: ProductSpecification[];
  features: string[];
  materials: string[];
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
  relatedProductSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const categoryLabels: Record<ProductCategory, string> = {
  "flatbed-engravers": "Flatbed Engravers",
  "fiber-marking": "Fiber Marking",
  "accessories": "Accessories",
};
