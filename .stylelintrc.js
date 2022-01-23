module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  customSyntax: '@stylelint/postcss-css-in-js',
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'no-empty-first-line': null,
  },
}
