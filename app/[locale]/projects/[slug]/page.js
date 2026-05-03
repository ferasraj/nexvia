import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title:
        locale === "ar"
          ? "المشروع غير موجود | Nexvia"
          : "Project Not Found | Nexvia",
    };
  }

  const projectName = project.name?.[locale] || "Nexvia Project";
  const projectLocation = project.location?.[locale] || "";
  const pageTitle =
    locale === "ar"
      ? `${projectName} في ${projectLocation} | Nexvia`
      : `${projectName} in ${projectLocation} | Nexvia`;

  const description =
    project.description?.[locale] ||
    (locale === "ar"
      ? `${projectName} في ${projectLocation} من Nexvia. اكتشف تفاصيل المشروع، الموقع، الأسعار، وأنظمة الدفع.`
      : `${projectName} in ${projectLocation} by Nexvia. Explore project details, location, prices, and payment plans.`);

  return {
    title: pageTitle,
    description,
    keywords:
      locale === "ar"
        ? [
            projectName,
            projectLocation,
            "عقارات مصر",
            "شقق للبيع في مصر",
            "مشاريع عقارية في مصر",
          ]
        : [
            projectName,
            projectLocation,
            "Egypt real estate",
            "apartments for sale in Egypt",
            "real estate projects in Egypt",
          ],
    alternates: {
      languages: {
        en: `/en/projects/${slug}`,
        ar: `/ar/projects/${slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { locale, slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "ProjectDetails",
  });

  const projectName = project.name?.[locale] || "";
  const projectLocation = project.location?.[locale] || "";
  const description =
    project.description?.[locale] ||
    (locale === "ar"
      ? `${projectName} في ${projectLocation} من Nexvia.`
      : `${projectName} in ${projectLocation} by Nexvia.`);

  const siteUrl = "https://nexvia.com.eg";
  const pageUrl = `${siteUrl}/${locale}/projects/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: projectName,
    description,
    url: pageUrl,
    areaServed: {
      "@type": "Place",
      name: projectLocation,
    },
    provider: {
      "@type": "RealEstateAgent",
      name: "Nexvia Real Estate Solutions",
      url: siteUrl,
      areaServed: {
        "@type": "Country",
        name: "Egypt",
      },
    },
    offers: project.startingPrice?.[locale]
      ? {
          "@type": "Offer",
          priceCurrency: "EGP",
          offers: project.startingPrice?.[locale]
            ? {
                "@type": "Offer",
                priceCurrency: "EGP",
                price: project.startingPrice[locale],
                availability: "https://schema.org/InStock",
              }
            : undefined,
        }
      : undefined,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHeader title={projectName} description={projectLocation} />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        {/* Description */}
        {project.description?.[locale] && (
          <div>
            <h2 className="mb-2 text-2xl font-bold">
              {locale === "ar" ? "وصف المشروع" : "About the Project"}
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-gray-700">
              {project.description[locale]}
            </p>
          </div>
        )}

        {/* Info Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <p>
            <strong>{t("developer")}:</strong>{" "}
            {project.developer?.[locale] || "-"}
          </p>

          <p>
            <strong>{t("location")}:</strong>{" "}
            {project.location?.[locale] || "-"}
          </p>

          <p>
            <strong>{t("type")}:</strong> {project.type?.[locale] || "-"}
          </p>

          <p>
            <strong>{t("startingPrice")}:</strong>{" "}
            {project.startingPrice?.[locale] || "-"}
          </p>

          <p>
            <strong>{t("area")}:</strong> {project.area?.[locale] || "-"}
          </p>
        </div>

        {/* Features */}
        {project.features?.length > 0 && (
          <div>
            <h2 className="mb-2 text-2xl font-bold">{t("features")}</h2>

            <ul className="list-disc space-y-2 ps-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature?.[locale]}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Payment Plans */}
        {project.paymentPlans?.length > 0 && (
          <div>
            <h2 className="mb-2 text-2xl font-bold">{t("paymentPlans")}</h2>

            <ul className="list-disc space-y-2 ps-6">
              {project.paymentPlans.map((plan, index) => (
                <li key={index}>{plan?.[locale]}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
