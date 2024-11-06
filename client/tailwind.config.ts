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
        header: "url('/images/backgrounds/header-bg.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: PluginAPI) {
      addBase({
        "h1, h2, h3, h4, h5, h6, p, a": {
          color: theme("colors.white"),
        },
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.extrabold"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.semibold"),
        },
        h4: { fontSize: theme("fontSize.xl") },
        h5: { fontSize: theme("fontSize.lg") },
        h6: { fontSize: theme("fontSize.md") },
      });
    }),
  ],
};
export default config;
