import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'
import tsElint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import functional from 'eslint-plugin-functional'
import prettier from 'eslint-plugin-prettier'
import astroParser from 'astro-eslint-parser'
import astro from 'eslint-plugin-astro'
import litA11y from 'eslint-plugin-lit-a11y'

/**
 * @type {Pick<import('eslint').Linter.FlatConfig, 'parserOptions' | 'ignores' | 'languageOptions'>}
 */
const defaultOptions = {
  ignores: ['node_modules/*'],
  languageOptions: {
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      experimentalObjectRestSpread: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
}

/**
 * @type {import('eslint').Linter.FlatConfig['plugins']}
 */
const defaultPlugins = {
  functional,
  jsdoc,
  'jsx-a11y': jsxA11y,
  '@typescript-eslint': tsElint,
  prettier,
  'lit-a11y': litA11y,
}

/**
 * @type {import('eslint').Linter.FlatConfig['rules']}
 */
const functionalrules = {
  'functional/prefer-tacit': ['error'],
  'functional/prefer-readonly-type': ['error'],
  'functional/readonly-type': ['error', 'keyword'],
  'functional/prefer-property-signatures': ['error'],
}

/**
 * @type {import('eslint').Linter.FlatConfig['rules']}
 */
const prettierRules = {
  'prettier/prettier': [
    'error',
    { singleQuote: true, semi: false, trailingComma: 'all' },
  ],
}

/**
 * @type {import('eslint').Linter.FlatConfig['rules']}
 */
const tsRules = {
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/prefer-readonly': ['error'],
  '@typescript-eslint/prefer-readonly-parameter-types': [
    'error',
    { ignoreInferredTypes: true },
  ],
}

/**
 * @type {import('eslint').Linter.FlatConfig['rules']}
 */
const defaultRules = {
  ...functionalrules,
  ...prettierRules,
  ...jsxA11y.configs.recommended.rules,
  ...litA11y.configs.recommended.rules,
}

const defaultTsProjects = ['./tsconfig.json', './tsconfig.spec.json']

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
  jsdoc.configs['flat/recommended'],
  {
    ...defaultOptions,
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    rules: {
      ...js.configs.recommended.rules,
      ...defaultRules,
    },
    plugins: {
      ...defaultPlugins,
    },
  },
  {
    ...defaultOptions,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...defaultRules,
      ...tsElint.configs.recommended.rules,
      ...tsElint.configs['recommended-requiring-type-checking'].rules,
      ...tsRules,
    },
    languageOptions: {
      ...defaultOptions.languageOptions,
      parser: typescriptParser,
      parserOptions: {
        ...defaultOptions.languageOptions.parserOptions,
        parser: typescriptParser,
        project: [...defaultTsProjects],
      },
    },
    plugins: {
      ...defaultPlugins,
    },
  },
  {
    ...defaultOptions,
    files: ['**/*.astro', '**/*.astro/*.js', '*.astro/*.js'],
    languageOptions: {
      ...defaultOptions.languageOptions,
      globals: {
        ...defaultOptions.languageOptions.globals,
        'astro/astro': true,
      },
      parser: astroParser,
      parserOptions: {
        ...defaultOptions.languageOptions.parserOptions,
        parser: typescriptParser,
        project: [...defaultTsProjects],
      },
    },
    rules: {
      ...defaultRules,
      ...tsElint.configs.recommended.rules,
      ...tsElint.configs['recommended-requiring-type-checking'].rules,
      ...tsRules,
      ...astro.configs.recommended.rules,
      'prettier/prettier': 'off',
    },
    plugins: {
      ...defaultPlugins,
      astro,
    },
  },
]

export default config
