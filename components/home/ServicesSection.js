import Link from "next/link";
import { Home, Key, Building2, UploadCloud } from "lucide-react";

const services = [
  {
    key: "rent",
    href: "rent",
    icon: Key,

    en: {
      title: "Rent Properties",
      desc: "Find furnished and unfurnished rental homes in key areas across Egypt.",
    },
    ar: {
      title: "تأجير العقارات",
      desc: "نوفر شقق مفروشة وغير مفروشة في أهم المناطق داخل مصر.",
    },
  },
  {
    key: "buy",
    href: "buy",
    icon: Home,

    en: {
      title: "Buy & Resale",
      desc: "Explore resale opportunities and suitable homes for living or investment.",
    },
    ar: {
      title: "الشراء والريسيل",
      desc: "فرص شراء وريسيل مناسبة للسكن أو الاستثمار.",
    },
  },
  {
    key: "projects",
    href: "projects",
    icon: Building2,

    en: {
      title: "Developer Projects",
      desc: "Access selected developer projects with flexible payment plans.",
    },
    ar: {
      title: "مشاريع المطورين",
      desc: "مشاريع مختارة من المطورين بأنظمة سداد مرنة.",
    },
  },
  {
    key: "list",
    href: "list-property",
    icon: UploadCloud,

    en: {
      title: "List Your Property",
      desc: "Market your property professionally and reach serious buyers or tenants.",
    },
    ar: {
      title: "اعرض عقارك",
      desc: "سوّق عقارك باحترافية للوصول إلى مشترين أو مستأجرين جادين.",
    },
  },
];

export default function ServicesSection({ locale }) {
  return (
    <section className="bg-[#050814] px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            {locale === "ar" ? "خدمات نكسفيا" : "Nexvia Services"}
          </span>

          <h2 className="text-3xl font-bold md:text-5xl">
            {locale === "ar"
              ? "حلول عقارية واضحة من أول خطوة"
              : "Clear real estate solutions from the first step"}
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60">
            {locale === "ar"
              ? "نساعدك في الإيجار، الشراء، مشاريع المطورين، وتسويق عقارك بطريقة احترافية."
              : "We help with rentals, buying, developer projects, and professional property marketing."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.key}
              href={`/${locale}/${service.href}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                <service.icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-bold text-white">
                {service[locale].title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {service[locale].desc}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-blue-400">
                {locale === "ar" ? "اعرف المزيد" : "Learn more"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
