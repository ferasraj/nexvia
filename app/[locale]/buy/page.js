"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function BuyPage() {
  const t = useTranslations("Pages.buy");

  return <PageHeader title={t("title")} description={t("description")} />;
}
