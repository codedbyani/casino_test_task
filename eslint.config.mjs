import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/display-name": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "lines-around-comment": [
        "error",
        {
          "beforeLineComment": true,
          "beforeBlockComment": true,
          "allowBlockStart": true,
          "allowClassStart": true,
          "allowObjectStart": true,
          "allowArrayStart": true
        }
      ],
      "newline-before-return": "error",
      "import/newline-after-import": [
        "error",
        {
          "count": 1
        }
      ],
      "@typescript-eslint/ban-types": ["off", {}],
      "prettier/prettier": ["error", { "singleQuote": true, "semi": true }]
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"]
        }
      }
    }
  }
];

export default eslintConfig;
