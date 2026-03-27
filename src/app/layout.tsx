import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { generateOrganizationSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "South Florida Lasers | Professional Laser Engraving & Cutting Equipment",
    template: "%s | South Florida Lasers",
  },
  description:
    "Authorized Trotec laser dealer in South Florida. Professional laser engraving and cutting equipment — Speedy series, SP large format cutters, SpeedMarker fiber marking systems, and accessories.",
  keywords: [
    "Trotec laser",
    "laser engraving",
    "laser cutting",
    "Trotec Speedy",
    "South Florida",
    "laser equipment",
    "Trotec dealer",
  ],
  metadataBase: new URL("https://southfloridalasers.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://southfloridalasers.com",
    siteName: "South Florida Lasers",
    title: "South Florida Lasers | Professional Laser Equipment",
    description:
      "Premier laser engraving and cutting equipment supplier in South Florida.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
