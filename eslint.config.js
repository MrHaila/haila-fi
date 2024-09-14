import eslintConfigLove from 'eslint-config-love'
import EslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import { parser as tsParser } from 'typescript-eslint'

const tsConfig = {
  files: ['**/*.vue', '**/*.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      projectService: ['tsconfig*.json'],
      extraFileExtensions: ['.vue'], // Holy shit, leaving this out makes the parser flaky on .vue files?!
    },
  },
  plugins: eslintConfigLove.plugins,
  rules: {
    ...eslintConfigLove.rules,
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}

/**
 * Declare that .vue files should use the TS parser.
 */
const vueConfigTsParserOverride = {
  files: ['**/*.vue'],
  languageOptions: {
    // parser: tsParser, <- BAD EXAMPLE: doing this would override the Vue parser and break Vue template parsing.
    parserOptions: {
      parser: tsParser, // <- This is the correct way to set the parser for the <script> block of Vue templates.
      extraFileExtensions: ['.vue'],
      projectService: ['tsconfig*.json'],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // This does not look at Vue templates.
  },
}

const globalIgnores = {
  ignores: [
    'dist/', // We assume that the dist folder is always generated and should not be linted.
    '.vercel/', // We assume that the .vercel folder is always generated and should not be linted.
    '.nuxt/', // We assume that the .nuxt folder is always generated and should not be linted.
    '.nitro/', // We assume that the .nitro folder is always generated and should not be linted.
    '.output/', // We assume that the .output folder is always generated and should not be linted.
  ],
}

export default [
  tsConfig,
  ...pluginVue.configs['flat/recommended'],
  vueConfigTsParserOverride,
  globalIgnores,
  EslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]
