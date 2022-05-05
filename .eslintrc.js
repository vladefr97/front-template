const path = require('path')
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: 'babel-eslint',
  extends: ['standard', 'standard-jsx', 'standard-react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'import/no-relative-parent-imports': 'off',
    'import/order': 'error',
    'max-len': [
      'error',
      140, // max-len in chars
      2, // default tab width
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
    camelcase: [2, { properties: 'always' }]

  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, './src')],
          ['@components', path.resolve(__dirname, './src/components')],
          ['@landing', path.resolve(__dirname, './src/pages/landing')],
          ['@static', path.resolve(__dirname, './src/static')]

        ],
        extensions: ['.js', '.scss', '.json']
      }
    }
  }
}
