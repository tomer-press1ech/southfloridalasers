import type { Metadata } from "next";

export function generatePageMetadata(page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `https://southfloridalasers.com${page.path}`;
  return {
    title: `${page.title} | South Florida Lasers`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "South Florida Lasers",
      images: [
        {
          url: page.image || "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: url,
    },
  };
}
