import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const locales = ["en", "ar"];

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen flex flex-col ${
        locale === "ar" ? "font-cairo" : "font-inter"
      }`}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />

        {/* المحتوى */}
        <main className="flex-1">
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                name: "Nexvia",
                url: "https://nexvia.com.eg",
                logo: "https://nexvia.com.eg/logo.png",
                image:
                  "https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?q=80",
                description:
                  "Nexvia is a premium real estate platform in Egypt for rentals, property sales, and developer projects.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cairo",
                  addressCountry: "EG",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+201108099414",
                  contactType: "customer service",
                  availableLanguage: ["English", "Arabic"],
                },
                sameAs: [
                  "https://facebook.com/",
                  "https://instagram.com/",
                  "https://youtube.com/",
                  "https://snapchat.com/",
                ],
              }),
            }}
          />
        </main>

        <Footer />
        <WhatsAppButton />
      </NextIntlClientProvider>
    </div>
  );
}
