module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [".eslintrc*"],
  plugins: ["@typescript-eslint", "prettier", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "all",
        semi: true,
        singleQuote: true,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      { selector: "variableLike", format: ["camelCase"] },
      { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
    ],
    "import/order": ["error"],
    "import/newline-after-import": [
      "error",
      {
        count: 1,
      },
    ],
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-prototype-builtins": 1,
    "no-restricted-syntax": [2, "LabeledStatement", "WithStatement"],
    "no-unused-vars": [
      1,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "prefer-const": [
      2,
      {
        destructuring: "all",
      },
    ],
    "arrow-body-style": [1, "as-needed"],
    "no-unused-expressions": [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-param-reassign": [
      1,
      {
        props: false,
      },
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    import: 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    radix: 0,
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"],
      },
    ],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "no-dupe-keys": 2,
    "import/no-duplicates": 2,
    "no-continue": 0,
  },
};

