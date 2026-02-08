import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/landing/hero";
import { FeaturesSection } from "@/components/landing/features";
import { TestimonialsSection } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
