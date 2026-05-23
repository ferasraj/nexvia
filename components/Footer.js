"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const isAr = locale === "ar";

  const quickLinks = [
    { label: isAr ? "الرئيسية" : "Home", href: `/${locale}` },
    { label: isAr ? "الإيجار" : "Rent", href: `/${locale}/rent` },
    { label: isAr ? "الشراء" : "Buy", href: `/${locale}/buy` },
    { label: isAr ? "المشاريع" : "Projects", href: `/${locale}/projects` },
    {
      label: isAr ? "اعرض عقارك" : "List Property",
      href: `/${locale}/list-property`,
    },
    { label: isAr ? "تواصل معنا" : "Contact", href: `/${locale}/contact` },
  ];

  // 🔥 عدلنا الروابط
  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com/", label: "YouTube" },
    { icon: FaSnapchatGhost, href: "https://snapchat.com/", label: "Snapchat" },
    { icon: FaTiktok, href: "https://nexvia.com.eg", label: "TikTok" },
  ];

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden border-t border-white/10 bg-[#050814] px-4 pt-14 text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="pointer-events-none absolute -top-40 end-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.95fr_1.05fr]">
          {/* Logo + Description */}
          <div>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-600 text-lg font-black shadow-lg shadow-blue-600/20">
                N
              </span>

              <span className="text-2xl font-black tracking-[0.28em]">
                NEXVIA
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {isAr
                ? "نكسفيا تقدم حلولًا عقارية حديثة في الإيجار، الشراء، مشاريع المطورين، وتسويق العقارات داخل مصر."
                : "Nexvia delivers modern real estate solutions for rentals, buying, developer projects, and property marketing in Egypt."}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/55 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    <Icon size={17} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
              {isAr ? "روابط" : "Links"}
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-blue-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔥 Contact (معدل) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
              {isAr ? "تواصل" : "Contact"}
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/55">
              <address className="not-italic space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-blue-400" size={18} />
                  <a
                    href="https://maps.google.com/?q=101+Abdulaziz+Al+Saud+Al+Manyal+Old+Cairo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    {isAr
                      ? "101 شارع عبدالعزيز آل سعود، المنيل، القاهرة"
                      : "101 Abdulaziz Al Saud St, Al Manyal, Cairo"}
                  </a>{" "}
                </p>

                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 shrink-0 text-blue-400" size={18} />
                  <a
                    href="tel:+201108099414"
                    className="hover:text-blue-300"
                    dir="ltr"
                  >
                    +20 110 809 9414
                  </a>
                </p>

                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-blue-400" size={18} />
                  <a
                    href="mailto:info@nexvia.com.eg"
                    className="hover:text-blue-300"
                  >
                    info@nexvia.com.eg
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold">
              {isAr ? "اشترك في التحديثات" : "Stay updated"}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              {isAr
                ? "احصل على أحدث الفرص العقارية والمشاريع الجديدة مباشرة."
                : "Get the latest real estate opportunities and project launches directly."}
            </p>

            <form className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder={isAr ? "البريد الإلكتروني" : "Email address"}
                className="w-full rounded-2xl border border-white/10 bg-[#050814]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-500"
              />

              <button
                type="button"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#050814] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
              >
                {isAr ? "اشتراك" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 py-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Nexvia.{" "}
            {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <div className="flex gap-5">
            <Link href="#" className="transition hover:text-blue-300">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>

            <Link href="#" className="transition hover:text-blue-300">
              {isAr ? "الشروط والأحكام" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
