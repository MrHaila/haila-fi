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
  // plugins: eslintConfigLove.plugins,
  // rules: {
  //   ...eslintConfigLove.rules,
  //   // Metaplay's customization to rules coming from ESLint Config Love.
  //   '@typescript-eslint/init-declarations': 'off', // We have cases where it is better to assign variables within conditional logic but have the variable declared in outside scope.
  //   '@typescript-eslint/no-explicit-any': 'off', // We have lots of cases where we need to use any because we don't have types for all data.
  //   '@typescript-eslint/strict-boolean-expressions': 'off', // Non-strict nullable checks are a really common and legible pattern we use. Too much work to refactor.
  //   '@typescript-eslint/consistent-type-imports': 'off', // This is too noisy and doesn't take into consideration Vue templates.
  //   '@typescript-eslint/triple-slash-reference': 'off', // Vite client types don't seem to play ball with project references unless this is used.
  //   '@typescript-eslint/class-methods-use-this': 'off', // We use this pattern.
  //   '@typescript-eslint/explicit-function-return-type': 'warn', // Useful while developing.
  //   '@typescript-eslint/no-unused-vars': 'warn', // Useful while developing.
  // },
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
  ...pluginVue.configs['flat/recommended'],
  tsConfig,
  vueConfigTsParserOverride,
  globalIgnores,
  EslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]
