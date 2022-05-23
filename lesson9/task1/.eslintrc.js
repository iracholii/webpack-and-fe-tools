module.exports = {
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 2,
  },
  env: {
    browser: true,
  },
};
