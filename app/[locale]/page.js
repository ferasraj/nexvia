import Hero from "@/components/Hero";
import QuickListings from "@/components/home/QuickListings";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LeadSection from "@/components/home/LeadSection";

export default async function HomePage({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <QuickListings locale={locale} />
      <ServicesSection locale={locale} />
      <FeaturedProjects locale={locale} />
      <TestimonialsSection locale={locale} />
      <TrustSection locale={locale} />
      <LeadSection locale={locale} />
    </>
  );
}
