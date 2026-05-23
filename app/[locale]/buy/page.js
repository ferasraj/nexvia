import { getTranslations } from "next-intl/server";
import CustomSelect from "@/components/CustomSelect";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaSearch,
  FaShieldAlt,
  FaClock,
  FaKey,
} from "react-icons/fa";

export default async function BuyPage({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "BuyPage",
  });

  const isAr = locale === "ar";

  const properties = [
    {
      title: isAr
        ? "شقة فاخرة للبيع في القاهرة الجديدة"
        : "Luxury Apartment for Sale in New Cairo",
      location: isAr ? "القاهرة الجديدة" : "New Cairo",
      typeLabel: isAr ? "سكني" : "Residential",
      price: isAr ? "يبدأ من 4,500,000 جنيه" : "Starting from EGP 4,500,000",
      beds: 3,
      baths: 2,
      area: "180 m²",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: isAr
        ? "بنتهاوس مميز في الشيخ زايد"
        : "Premium Penthouse in Sheikh Zayed",
      location: isAr ? "الشيخ زايد" : "Sheikh Zayed",
      typeLabel: isAr ? "سكني" : "Residential",
      price: isAr ? "يبدأ من 8,200,000 جنيه" : "Starting from EGP 8,200,000",
      beds: 4,
      baths: 3,
      area: "260 m²",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: isAr
        ? "فيلا مستقلة للبيع في التجمع الخامس"
        : "Standalone Villa for Sale in Fifth Settlement",
      location: isAr ? "التجمع الخامس" : "Fifth Settlement",
      typeLabel: isAr ? "فيلا" : "Villa",
      price: isAr ? "يبدأ من 18,000,000 جنيه" : "Starting from EGP 18,000,000",
      beds: 5,
      baths: 5,
      area: "520 m²",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: isAr
        ? "مكتب إداري للبيع في العاصمة الإدارية"
        : "Administrative Office for Sale in New Capital",
      location: isAr ? "العاصمة الإدارية" : "New Capital",
      typeLabel: isAr ? "إداري" : "Administrative",
      price: isAr ? "يبدأ من 3,200,000 جنيه" : "Starting from EGP 3,200,000",
      beds: null,
      baths: 1,
      area: "110 m²",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: isAr
        ? "محل تجاري للبيع في الشيخ زايد"
        : "Retail Shop for Sale in Sheikh Zayed",
      location: isAr ? "الشيخ زايد" : "Sheikh Zayed",
      typeLabel: isAr ? "تجاري" : "Commercial",
      price: isAr ? "يبدأ من 6,800,000 جنيه" : "Starting from EGP 6,800,000",
      beds: null,
      baths: null,
      area: "95 m²",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: isAr
        ? "عيادة طبية للبيع في المهندسين"
        : "Medical Clinic for Sale in Mohandessin",
      location: isAr ? "المهندسين" : "Mohandessin",
      typeLabel: isAr ? "طبي" : "Medical",
      price: isAr ? "يبدأ من 5,500,000 جنيه" : "Starting from EGP 5,500,000",
      beds: null,
      baths: 1,
      area: "85 m²",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050814] text-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed850,transparent_35%),radial-gradient(circle_at_bottom,#312e8150,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur">
            {t("eyebrow")}
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            {t("description")}
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 text-start backdrop-blur-xl md:grid-cols-[1.2fr_1fr_1fr_auto]">
            <input
              placeholder={t("searchLocation")}
              className="rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-400"
            />
            <CustomSelect
              instanceId="buy-property-type"
              isAr={isAr}
              placeholder={t("propertyType")}
              options={[
                { value: "residential", label: isAr ? "سكني" : "Residential" },
                {
                  value: "administrative",
                  label: isAr ? "إداري" : "Administrative",
                },
                { value: "commercial", label: isAr ? "تجاري" : "Commercial" },
                { value: "medical", label: isAr ? "طبي" : "Medical" },
                {
                  value: "serviced",
                  label: isAr ? "فندقي" : "Serviced / Hotel",
                },
              ]}
            />

            <CustomSelect
              instanceId="buy-budget"
              isAr={isAr}
              placeholder={t("budget")}
              options={[
                { value: "10k-25k", label: "10k - 25k" },
                { value: "25k-50k", label: "25k - 50k" },
                { value: "50k-plus", label: "50k+" },
              ]}
            />

            <button className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500">
              <FaSearch />
              {t("search")}
            </button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                {t("featured")}
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {t("featuredTitle")}
              </h2>
            </div>

            <p className="max-w-xl text-gray-400">{t("featuredDescription")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/85 via-[#050814]/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold shadow-lg">
                    {item.price}
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    {item.typeLabel}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="min-h-[56px] text-xl font-bold line-clamp-2 transition group-hover:text-blue-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                    <FaMapMarkerAlt className="text-blue-400" />
                    {item.location}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5 text-sm text-gray-300">
                    {item.beds && (
                      <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                        <FaBed className="text-blue-400" />
                        {item.beds}
                      </span>
                    )}

                    {item.baths && (
                      <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                        <FaBath className="text-blue-400" />
                        {item.baths}
                      </span>
                    )}

                    <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                      <FaRulerCombined className="text-blue-400" />
                      {item.area}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexvia */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              icon: FaShieldAlt,
              title: t("trustTitle"),
              text: t("trustText"),
            },
            {
              icon: FaClock,
              title: t("fastTitle"),
              text: t("fastText"),
            },
            {
              icon: FaKey,
              title: t("easyTitle"),
              text: t("easyText"),
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-500/25 group-hover:text-blue-200 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-white transition group-hover:text-blue-300">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400 transition group-hover:text-white/75">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-900/30 p-10 text-center backdrop-blur">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ctaTitle")}</h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">{t("ctaText")}</p>

          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#050814] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}
