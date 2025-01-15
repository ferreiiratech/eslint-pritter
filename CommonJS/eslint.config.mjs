export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      semi: ['error', 'never'],
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      quotes: ['error', 'single'],
      eqeqeq: ['error', 'always'],
    },
  },
]
