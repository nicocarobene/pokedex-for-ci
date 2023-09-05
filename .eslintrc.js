module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'version': 'detect' // Puedes especificar la versión de React aquí, o usar 'detect' para que ESLint la detecte automáticamente
    }
  },
  'plugins': [
    'react', 'jest'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 'warn',
    'react/prop-types': 0
  }
}
