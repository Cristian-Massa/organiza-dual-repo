import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                landingBG: "url('@/public/images/landing-bg.jpg')",
            },
            backgroundColor: {
                primaryBG: "#e0e0e0",
                secondaryBG: "FFFFFF",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".clip-triangle": {
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                },
            });
        }),
        plugin(function ({ addBase, theme }: PluginAPI) {
            addBase({
                "h1, h2, h3, h4, h5, h6": {
                    color: theme("colors.slate.800"),
                    fontWeight: theme("fontWeight.bold"),
                },
                "p, a": {
                    color: theme("colors.slate.500"),
                },
                h1: {
                    fontSize: theme("fontSize.4xl"),
                },
                h2: {
                    fontSize: theme("fontSize.3xl"),
                },
                h3: {
                    fontSize: theme("fontSize.2xl"),
                },
                h4: { fontSize: theme("fontSize.xl") },
                h5: { fontSize: theme("fontSize.lg") },
                h6: { fontSize: theme("fontSize.md") },
            });
        }),
    ],
};
export default config;
