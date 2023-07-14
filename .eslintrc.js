/*
 * @Author: wang shuo
 * @Date: 2023-05-06 00:19:21
 * @LastEditors: W·S
 * @LastEditTime: 2023-07-14 16:42:55
 * @Description: Description
 */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    // "prettier/prettier": ["error", {}],
  },
};
