import { Hero } from "@/components/sections/Hero";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { MaterialsGrid } from "@/components/sections/MaterialsGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropositions />
      <FeaturedProducts />
      <VideoShowcase />
      <MaterialsGrid />
      <StatsSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
