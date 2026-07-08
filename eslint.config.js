import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["js/main.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        IntersectionObserver: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { args: "none" }],
      "no-var": "error",
      "prefer-const": "warn",
    },
  },
];
