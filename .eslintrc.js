module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "plugins": [
        "@typescript-eslint",
        "googleappsscript",
        "jest",
    ],
    "parser": "@typescript-eslint/parser",
    "env": {
      "node": true,
      "googleappsscript/googleappsscript": true,
      "jest/globals": true,
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
    }
};