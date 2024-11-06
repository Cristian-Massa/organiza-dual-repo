import { getRequestConfig } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { Locales } from "@/src/types/locales";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locales)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      ...(await import(`@/src/locales/${locale}/home.json`)),
    },
  };
});
