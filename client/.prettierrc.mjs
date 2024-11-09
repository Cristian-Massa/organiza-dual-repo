/**
 *
 *  @type (import("prettier").Config)
 */

const config = {
    importOrder: ["^react$", "^next$", "<THIRD_PARTY_MODULES>", "^@/"],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

export default config;
