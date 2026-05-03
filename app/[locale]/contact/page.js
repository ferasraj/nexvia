"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const t = useTranslations("Pages.contact");

  return <PageHeader title={t("title")} description={t("description")} />;
}
