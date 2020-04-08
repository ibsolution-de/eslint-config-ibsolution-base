# ESLint Base Rules

Based on great work of airbnb

## Add Base ruleset to project

```
npm install @ibsolution/eslint-config-ibsolution-base eslint eslint-plugin-import
```

## Use in project

Create ESLint settings file. Add "ibsolution-base" as extention to "extends" part.
Example: .eslintrc

```
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["import", "prettier"],
  "extends": [
    "eslint:recommended",
    "esnext",
    "esnext/style-guide",
    "typescript",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "@ibsolution/eslint-config-ibsolution-base",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}

```

## DISCLAMER

The IBsolution GmbH Materials may include certain third party free or open source components ("FOSS Components"). You may have additional rights in such FOSS Components that are provided by the third party licensors of those components.

The IBsolution GmbH Materials may require certain third party software dependencies ("Dependencies") for the use or operation of such IBsolution GmbH Materials. These dependencies may be identified by IBsolution GmbH in NPM Package json files, product documentation or by other means. IBsolution GmbH does not grant You any rights in or to such Dependencies under this Developer Agreement. You are solely responsible for the acquisition, installation and use of Dependencies. IBsolution GmbH DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES IN RESPECT OF DEPENDENCIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND OF FITNESS FOR A PARTICULAR PURPOSE. IN PARTICULAR, IBsolution GmbH DOES NOT WARRANT THAT DEPENDENCIES WILL BE AVAILABLE, ERROR FREE, INTEROPERABLE WITH THE IBsolution GmbH MATERIALS, SUITABLE FOR ANY PARTICULAR PURPOSE OR NON-INFRINGING. YOU ASSUME ALL RISKS ASSOCIATED WITH THE USE OF DEPENDENCIES, INCLUDING WITHOUT LIMITATION RISKS RELATING TO QUALITY, AVAILABILITY, PERFORMANCE, DATA LOSS, UTILITY IN A PRODUCTION ENVIRONMENT, AND NON-INFRINGEMENT. IN NO EVENT WILL IBsolution GmbH BE LIABLE DIRECTLY OR INDIRECTLY IN RESPECT OF ANY USE OF DEPENDENCIES BY YOU.
