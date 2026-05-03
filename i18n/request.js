import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = ["en", "ar"].includes(requested) ? requested : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
