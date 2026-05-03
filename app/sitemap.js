import { projects } from "@/data/projects";

export default function sitemap() {
  const siteUrl = "https://nexvia.com.eg";

  // الصفحات الثابتة
  const staticPages = [
    "",
    "/rent",
    "/buy",
    "/projects",
    "/list-property",
    "/contact",
  ];

  const locales = ["en", "ar"];

  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
    })),
  );

  // صفحات المشاريع
  const projectUrls = projects.flatMap((project) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  );

  return [...staticUrls, ...projectUrls];
}
