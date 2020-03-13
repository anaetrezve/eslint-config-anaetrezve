# Eslint Prettier Typescript Config for Node.js

## Installing

### Local Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.
2. Then install everything needed by the config:

```bash
npx install-peerdeps --dev eslint-config-ts-anaet
```

3. If you have successfully installed. Then create a `.eslintrc` or `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` or `.eslintrc.js` file should look like this:

```json
{
  "extends": ["ts-anaet"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

or

```js
module.exports = {
  extends: ['ts-anaet'],
  parserOptions: {
    project: './tsconfig.json'
  }
};
```

4. You can add two scripts to your `package.json` to lint and/or fix:

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts",
  "lint:fix": "eslint . --fix"
},
```
