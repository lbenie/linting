/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const tsRules = {
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports'}],
  '@typescript-eslint/prefer-readonly': ['error'],
  '@typescript-eslint/prefer-readonly-parameter-types': ['error'],
}

/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const functionalrules = {
  'functional/prefer-tacit': ['error'],
  'functional/prefer-readonly-type': ['error'],
  'functional/readonly-type': ['error'],
  'functional/prefer-property-signatures': ['error'],
}

/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const prettierRules = {
  'prettier/prettier': [
    'error',
    { singleQuote: true, semi: false, trailingComma: 'all' },
  ]
}

/**
 * @type {import('eslint').Linter.Config['extends']}
 */
const a11yExtends = [
  'plugin:jsx-a11y/recommended',
  'plugin:lit-a11y/recommended',
]

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'functional', 'jsx-a11y', 'lit-a11y'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    experimentalObjectRestSpread: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mjs', '*.cjs'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ...a11yExtends,
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        }
      },
      parser: '@typescript-eslint/parser',
      rules: {
        ...prettierRules,
        ...tsRules,
        ...functionalrules
      },
      env: {
        browser: true,
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: [
        ...a11yExtends,
        'plugin:astro/recommended'
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.astro'],
      },
      rules: {
        ...tsRules,
        ...functionalrules
      },
      env: {
        browser: true,
      },
    },
  ],
}
