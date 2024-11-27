import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    locales: ["es", "pt", "en"],
    defaultLocale: "es",
});

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
