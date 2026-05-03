"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero({ locale }) {
  const t = useTranslations("Hero");
  const isRTL = locale === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F19]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?q=80&w=1174&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay (RTL / LTR) */}
      <div
        className={`absolute inset-0 ${
          isRTL
            ? "bg-gradient-to-l from-[#0B0F19]/95 via-[#0B0F19]/80 to-transparent"
            : "bg-gradient-to-r from-[#0B0F19]/95 via-[#0B0F19]/80 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur">
            {t("eyebrow")}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/projects`}
              className="w-full sm:w-auto rounded-2xl bg-blue-600 px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:scale-[1.02] hover:bg-blue-500"
            >
              {t("primaryCta")}
            </Link>

            <Link
              href={`/${locale}/list-property`}
              className="w-full sm:w-auto rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.02] hover:bg-white/20"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
