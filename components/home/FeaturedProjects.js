import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects({ locale }) {
  const items = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#050814] px-4 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1d4ed840,transparent_35%),radial-gradient(circle_at_bottom_right,#312e8140,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl">
              {locale === "ar" ? "مشاريع مختارة" : "Featured Projects"}
            </span>

            <h2 className="text-3xl font-bold md:text-5xl">
              {locale === "ar"
                ? "فرص استثمارية من مشاريع المطورين"
                : "Investment opportunities from developers"}
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              {locale === "ar"
                ? "استكشف مشاريع مختارة بمواقع قوية وأنظمة سداد مرنة تناسب السكن أو الاستثمار."
                : "Explore selected projects with strategic locations and flexible payment plans for living or investment."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="inline-flex w-fit rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-300"
          >
            {locale === "ar" ? "عرض كل المشاريع" : "View all projects"}
          </Link>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {items.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <div className="relative h-56 shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  {project.type[locale]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-blue-300">
                  {project.location[locale]}
                </p>

                <h3 className="mt-2 min-h-[64px] line-clamp-2 text-2xl font-bold leading-8 text-white">
                  {project.name[locale]}
                </h3>

                <p className="mt-3 min-h-[72px] line-clamp-3 text-sm leading-6 text-white/55">
                  {project.description[locale]}
                </p>

                <div className="mb-6 mt-5 min-h-[92px] rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                  <p className="text-xs text-white/40">
                    {locale === "ar" ? "يبدأ من" : "Starting from"}
                  </p>

                  <p className="mt-1 font-bold text-blue-400">
                    {project.startingPrice[locale]}
                  </p>
                </div>

                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="mt-auto inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#050814] transition hover:bg-blue-500 hover:text-white"
                >
                  {locale === "ar"
                    ? "عرض تفاصيل المشروع"
                    : "View project details"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
