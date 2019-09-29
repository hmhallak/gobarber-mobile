module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "import",
    "jsx-a11y"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      { extensions : [".jsx", ".js"]}
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^ " }],
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "prefer-object-spread" : "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
