import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-var": "error",
      "semi": ["error", "always"],
    },
  },

  // Configuration spécifique pour les fichiers de tests Jest
  {
    files: ["test/**/*.test.js", "src/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Autorise describe, test, expect, beforeEach...
      },
    },
  },
];