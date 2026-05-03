"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/projects";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const t = useTranslations("Pages.projects");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <div>
      {/* Header */}
      <PageHeader title={t("title")} description={t("description")} />

      {/* Projects List */}
      <div className="p-6 space-y-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${locale}/projects/${project.slug}`}
            className="block border p-3"
          >
            <h2>{project.name[locale]}</h2>
            <p>{project.location[locale]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
