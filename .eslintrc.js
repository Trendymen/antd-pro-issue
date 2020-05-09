module.exports = {
  extends: [
    "react-app", //已经加载了ts插件和启用了ts parser
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  rules: {
    "prettier/prettier": "warn",
    "react-hooks/exhaustive-deps": "error",
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
