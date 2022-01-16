module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['**/*.css'],
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vue/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:vue-scoped-css/recommended',
  ],
  rules: {
    'space-before-function-paren': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    camelcase: 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'require-await': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',

    'no-unused-vars': ['error', { args: 'none' }],
    'vue/no-v-html': 'off',
    'tailwindcss/no-custom-classname': 'off',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@ln-markets/**',
            group: 'internal',
          },
          {
            pattern: '#src/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['#src', './src']],
        extensions: ['.js', '.json', '.vue'],
      },
    },
  },
}
