/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/script-setup-uses-vars': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
