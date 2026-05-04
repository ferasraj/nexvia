"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const t = useTranslations("Pages.projects");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-[#050814] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            {isAr ? "مشاريع مختارة" : "Selected Projects"}
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/projects/${project.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <div className="relative h-56 overflow-hidden bg-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/30 to-transparent" />

                <div className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white">
                  {project.name?.[locale]}
                </h2>

                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-white/55">
                  <MapPin size={17} className="mt-1 shrink-0 text-blue-400" />
                  <span>{project.location?.[locale]}</span>
                </p>

                <div className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition group-hover:border-blue-500/40 group-hover:text-blue-300">
                  {isAr ? "عرض التفاصيل" : "View Details"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
