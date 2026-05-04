"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaBars } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const t = useTranslations("Navbar");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/rent`, label: t("rent") },
    { href: `/${locale}/buy`, label: t("buy") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/list-property`, label: t("listProperty") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <input id="mobile-menu-toggle" type="checkbox" className="peer hidden" />

      <header
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="fixed left-0 top-0 z-[9999] w-full px-4 pt-4 sm:px-6 lg:px-8"
      >
        {/* 🔥 SEO fix هنا */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0B0F19]/60 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6"
        >
          <Link
            href={`/${locale}`}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-black shadow-lg">
              N
            </span>
            <span className="text-xl font-bold tracking-[0.18em]">NEXVIA</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === `/${locale}` ? scrollToTop : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <label
              htmlFor="mobile-menu-toggle"
              aria-label="Open menu"
              className="relative z-[10000] flex h-10 w-10 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md active:scale-95 lg:hidden"
            >
              <FaBars className="pointer-events-none text-sm" />
            </label>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="pointer-events-none fixed inset-0 z-[10000] bg-[#050814]/50 opacity-0 backdrop-blur-xl transition duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 lg:hidden"
      >
        {/* Click outside */}
        <label
          htmlFor="mobile-menu-toggle"
          aria-label="Close menu overlay"
          className="absolute inset-0 z-[10] cursor-pointer"
        />

        {/* Links */}
        <div className="pointer-events-none relative z-[20] flex h-full flex-col items-center justify-center gap-6 text-center">
          {links.map((link) => (
            <label
              key={link.href}
              htmlFor="mobile-menu-toggle"
              className="pointer-events-auto cursor-pointer"
            >
              {/* 🔥 UX FIX هنا */}
              <Link
                href={link.href}
                onClick={scrollToTop}
                className="text-2xl font-semibold text-white transition hover:text-blue-400"
              >
                {link.label}
              </Link>
            </label>
          ))}

          <label
            htmlFor="mobile-menu-toggle"
            className="pointer-events-auto cursor-pointer mt-8"
          >
            <LanguageSwitcher />
          </label>
        </div>
      </div>
    </>
  );
}
