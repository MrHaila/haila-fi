module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  ignorePatterns: [
    '/node_modules/*',
    '/dist/*'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['warn', 'error'] }] : 'off', // console.log() not allowed in production code
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // debugger not allowed in production code
    'comma-dangle': ['error', 'only-multiline'], // multiline objects and arrays may use a trailing comma at the end of the line
    'no-unused-vars': 0 // this is handled by the TypeScript compiler
  }
}
