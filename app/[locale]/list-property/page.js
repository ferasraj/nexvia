import { getTranslations } from "next-intl/server";
import CustomSelect from "@/components/CustomSelect";
import Link from "next/link";
import {
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaShieldAlt,
  FaCamera,
  FaUsers,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";

export default async function ListPropertyPage({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ListPropertyPage",
  });

  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050814] text-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed850,transparent_35%),radial-gradient(circle_at_bottom,#312e8150,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur">
              {t("eyebrow")}
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#property-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#050814] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
              >
                {t("primaryButton")}
              </a>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-white/10 hover:text-blue-200"
              >
                {t("secondaryButton")}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-blue-500/20 bg-blue-500/10 p-6">
              <FaHome className="text-4xl text-blue-300" />

              <h2 className="mt-6 text-2xl font-bold">{t("heroCardTitle")}</h2>

              <p className="mt-4 leading-7 text-gray-300">
                {t("heroCardText")}
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  t("heroPointOne"),
                  t("heroPointTwo"),
                  t("heroPointThree"),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="property-form" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t("formEyebrow")}
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("formTitle")}
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              {t("formDescription")}
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: FaShieldAlt,
                  title: t("sideTrustTitle"),
                  text: t("sideTrustText"),
                },
                {
                  icon: FaHandshake,
                  title: t("sideFollowTitle"),
                  text: t("sideFollowText"),
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Owner Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("ownerName")}
                </label>

                <div className="relative">
                  <FaUser className="absolute top-1/2 -translate-y-1/2 text-gray-500 ltr:left-4 rtl:right-4" />

                  <input
                    type="text"
                    placeholder={t("ownerNamePlaceholder")}
                    className="w-full rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-blue-500/40 focus:border-blue-500/50 ltr:pl-11 rtl:pr-11"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("phone")}
                </label>

                <div className="relative">
                  <FaPhoneAlt className="absolute top-1/2 -translate-y-1/2 text-gray-500 ltr:left-4 rtl:right-4" />

                  <input
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                    className="w-full rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-blue-500/40 focus:border-blue-500/50 ltr:pl-11 rtl:pr-11"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("propertyType")}
                </label>

                <div className="relative">
                  <CustomSelect
                    instanceId="property-type-select"
                    isAr={isAr}
                    placeholder={t("selectPropertyType")}
                    options={[
                      { value: "apartment", label: t("apartment") },
                      { value: "villa", label: t("villa") },
                      { value: "office", label: t("office") },
                      { value: "shop", label: t("shop") },
                      { value: "clinic", label: t("clinic") },
                      { value: "land", label: t("land") },
                    ]}
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("purpose")}
                </label>

                <div className="relative">
                  <CustomSelect
                    instanceId="purpose-select"
                    isAr={isAr}
                    placeholder={t("selectPurpose")}
                    options={[
                      { value: "sell", label: t("sell") },
                      { value: "rent", label: t("rent") },
                      { value: "both", label: t("both") },
                    ]}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("location")}
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute top-1/2 -translate-y-1/2 text-gray-500 ltr:left-4 rtl:right-4" />

                  <input
                    type="text"
                    placeholder={t("locationPlaceholder")}
                    className="w-full rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-blue-500/40 focus:border-blue-500/50 ltr:pl-11 rtl:pr-11"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("expectedPrice")}
                </label>

                <div className="relative">
                  <FaMoneyBillWave className="absolute top-1/2 -translate-y-1/2 text-gray-500 ltr:left-4 rtl:right-4" />

                  <input
                    type="text"
                    placeholder={t("expectedPricePlaceholder")}
                    className="w-full rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-blue-500/40 focus:border-blue-500/50 ltr:pl-11 rtl:pr-11"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {t("details")}
                </label>

                <textarea
                  rows={5}
                  placeholder={t("detailsPlaceholder")}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#050814]/70 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-blue-500/40 focus:border-blue-500/50"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#050814] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
            >
              {t("submitButton")}
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-gray-500">
              {t("formNote")}
            </p>
          </form>
        </div>
      </section>

      {/* Why List */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t("whyEyebrow")}
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("whyTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FaCamera,
                title: t("marketingTitle"),
                text: t("marketingText"),
              },
              {
                icon: FaUsers,
                title: t("buyersTitle"),
                text: t("buyersText"),
              },
              {
                icon: FaHandshake,
                title: t("closingTitle"),
                text: t("closingText"),
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
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-900/30 p-10 text-center backdrop-blur">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("ctaTitle")}</h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">{t("ctaText")}</p>

          <a
            href="#property-form"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#050814] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>
    </main>
  );
}
