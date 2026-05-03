"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function ListPropertyPage() {
  const t = useTranslations("Pages.listProperty");

  return <PageHeader title={t("title")} description={t("description")} />;
}
