module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  // 0忽略，1warn，2error
  rules: {
    'no-console': 0,
    'no-alert': 0,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
