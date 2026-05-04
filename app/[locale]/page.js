import Hero from "@/components/Hero";
import QuickListings from "@/components/home/QuickListings";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LeadSection from "@/components/home/LeadSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "Nexvia | عقارات في مصر"
      : "Nexvia | Real Estate in Egypt",

    description: isArabic
      ? "اكتشف أفضل العقارات للإيجار والشراء ومشاريع المطورين في مصر مع Nexvia."
      : "Find the best properties for rent, sale, and developer projects in Egypt with Nexvia.",

    openGraph: {
      title: isArabic
        ? "Nexvia | عقارات في مصر"
        : "Nexvia | Real Estate in Egypt",
      description: isArabic
        ? "اكتشف أفضل العقارات للإيجار والشراء ومشاريع المطورين في مصر مع Nexvia."
        : "Find the best properties for rent, sale, and developer projects in Egypt with Nexvia.",
      url: `https://nexvia.com.eg/${locale}`,
      siteName: "Nexvia",
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "Nexvia | عقارات في مصر"
        : "Nexvia | Real Estate in Egypt",
      description: isArabic
        ? "اكتشف أفضل العقارات للإيجار والشراء ومشاريع المطورين في مصر مع Nexvia."
        : "Find the best properties for rent, sale, and developer projects in Egypt with Nexvia.",
    },
  };
}

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
