import "./globals.css";
import { Inter, Cairo } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata = {
  title: {
    default: "Nexvia | Real Estate in Egypt",
    template: "%s | Nexvia",
  },
  description:
    "Nexvia is a premium real estate platform in Egypt for rentals, property sales, and developer projects.",
  keywords: [
    "Nexvia",
    "real estate Egypt",
    "buy property Egypt",
    "rent apartments Egypt",
    "developer projects Egypt",
    "عقارات مصر",
    "إيجار شقق",
    "شراء عقار",
    "مشاريع عقارية",
  ],
  authors: [{ name: "Nexvia" }],
  creator: "Nexvia",
  publisher: "Nexvia",

  metadataBase: new URL("https://nexvia.com.eg"),

  openGraph: {
    title: "Nexvia | Real Estate in Egypt",
    description:
      "Find the best properties for rent, sale, and developer projects in Egypt with Nexvia.",
    url: "https://nexvia.com.eg",
    siteName: "Nexvia",
    locale: "en_US", // هنغيرها ديناميك بعدين مع locale
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexvia | Real Estate in Egypt",
    description:
      "Find the best properties for rent, sale, and developer projects in Egypt with Nexvia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schema = {
    sameAs: ["https://facebook.com/yourpage", "https://instagram.com/yourpage"],
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nexvia",
    url: "https://nexvia.com.eg",
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
  };
  return (
    <html>
      <body className={`${inter.variable} ${cairo.variable} overflow-x-hidden`}>
        {children}
        {/* 🔥 Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
