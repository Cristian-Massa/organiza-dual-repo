/** @type {import("prettier").Config} */
const config = {
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: ["^react$", "^next$", "<THIRD_PARTY_MODULES>", "^@/"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

module.exports = config;
