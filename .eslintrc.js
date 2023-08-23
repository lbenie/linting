/**
 * @type {import('eslint').CLIEngine.Options}
 */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      parser: '@typescript-eslint/parser',
      rules: {
        'prettier/prettier': [
          'error',
          { singleQuote: true, semi: false, trailingComma: 'all' },
        ],
        '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports'}],
        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/prefer-readonly-parameter-types': ['error'],
        'functional/prefer-tacit': ['error'],
        'functional/prefer-readonly-type': ['error'],
        'functional/readonly-type': ['error'],
        'functional/prefer-property-signatures': ['error'],
      },
      env: {
        browser: true,
        node: true,
      },
      plugins: ['prettier', '@typescript-eslint', 'functional'],
    },
  ],
}
