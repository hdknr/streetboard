module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: 'standard',
  globals: {
    __static: true,
  },
  plugins: [
    'html',
  ],
  'rules': {
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        'arrays': 'ignore',
        'objects': 'ignore',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore',
      }],
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 0,
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 0,
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
