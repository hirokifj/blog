module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  customSyntax: '@stylelint/postcss-css-in-js',
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'no-empty-first-line': null,
  },
}
