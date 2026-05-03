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
        <main className="flex-1">{children}</main>

        <Footer />
        <WhatsAppButton />
      </NextIntlClientProvider>
    </div>
  );
}
