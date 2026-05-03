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
  title: "Nexvia",
  description: "Real estate marketing company",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.variable} ${cairo.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
