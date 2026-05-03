"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";
  const targetLocale = currentLocale === "ar" ? "en" : "ar";

  const redirectedPathname = pathname.replace(
    `/${currentLocale}`,
    `/${targetLocale}`,
  );

  return (
    <Link
      href={redirectedPathname}
      aria-label={
        currentLocale === "ar" ? "Switch to English" : "التبديل إلى العربية"
      }
      className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white shadow-sm backdrop-blur transition duration-300 hover:bg-white/20 active:scale-95"
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
