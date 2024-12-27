/** @type {import("prettier").Config} */
export const config = {
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: ["^react$", "^next$", "<THIRD_PARTY_MODULES>", "^@/"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tabWidth: 4,
    semi: true,
    endOfLine: "auto",
    singleQuote: false,
};

export default config;
