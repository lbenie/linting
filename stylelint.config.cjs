/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ['stylelint-order'],
  plugins: ['stylelint-stylus', 'stylelint-order'],
  overrides: [
    {
      files: ['*.styl', '*.stylus'],
      extends: ['stylelint-stylus/standard'],
      customSyntax: 'postcss-styl',
    },
    {
      files: ['*.scss', '*.sass'],
      customSyntax: 'postcss-scss',
    },
  ],
}
