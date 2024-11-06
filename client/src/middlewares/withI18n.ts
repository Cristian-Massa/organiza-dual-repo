import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";
export function withI18n() {
  const i18n = createMiddleware(routing);
  return i18n;
}
