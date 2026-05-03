import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function QuickListings({ locale }) {
  const items = properties.slice(0, 6);

  return (
    <section className="bg-[#050814] px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              {locale === "ar" ? "عقارات مختارة" : "Featured Listings"}
            </span>

            <h2 className="text-3xl font-bold md:text-5xl">
              {locale === "ar"
                ? "اكتشف فرص عقارية مميزة"
                : "Explore selected properties"}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              {locale === "ar"
                ? "مجموعة مختارة من العقارات المتاحة للإيجار والشراء في مواقع مهمة داخل مصر."
                : "A curated selection of rental and buying opportunities across key locations in Egypt."}
            </p>
          </div>

          <Link
            href={`/${locale}/`}
            className="inline-flex w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
          >
            {locale === "ar" ? "عرض كل العقارات" : "View all listings"}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((property) => (
            <article
              key={property.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  {property.type === "rent"
                    ? locale === "ar"
                      ? "إيجار"
                      : "Rent"
                    : locale === "ar"
                      ? "شراء"
                      : "Buy"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {" "}
                <h3 className="min-h-[56px] line-clamp-2 text-xl font-bold leading-7 text-white">
                  {" "}
                  {property.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  {property.location[locale]}
                </p>
                <p className="mt-5 text-lg font-bold text-blue-400">
                  {" "}
                  {property.price[locale]}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                  {" "}
                  <Link
                    href={`/${locale}/${property.type}`}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-[#050814] transition hover:bg-blue-500 hover:text-white"
                  >
                    {locale === "ar" ? "عرض التفاصيل" : "View details"}
                  </Link>
                  <Link
                    href={`https://wa.me/201108099414?text=${encodeURIComponent(
                      locale === "ar"
                        ? `مرحبًا، أريد الاستفسار عن ${property.title.ar}`
                        : `Hello, I want to ask about ${property.title.en}`,
                    )}`}
                    target="_blank"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-300"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
