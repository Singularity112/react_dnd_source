module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["google", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "object-curly-spacing": "off",
    indent: ["error", 2],
    quotes: "off",
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
    "comma-dangle": "off",
    "linebreak-style": "off",
    "react/prop-types": "off"
  }
};
