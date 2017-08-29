# Dynamic imports and unit testing with AVA and Avoriaz

This is a simple example setup to unit tests Vue components containing dynamic imports with AVA and Avoriaz. It is based on the [avoriaz-ava-example](https://github.com/eddyerburgh/avoriaz-ava-example) repo.


## Installation

```sh
yarn # Or npm i
```

## Usage

```sh
yarn test # Or npm run test
```

## Info

Basically, we added the [dynamic-import-webpack](https://github.com/airbnb/babel-plugin-dynamic-import-webpack) plugin to our Babel config:

```json
// .babelrc

{
  "presets": ["es2015", "stage-2"],
  "plugins": ["dynamic-import-webpack"]
}

```

In our package.json, we made sure AVA uses our `.babelrc` when running the tests:

```json
// package.json

"ava": {
  "babel": "inherit",
  "require": [
    "./test/.setup.js"
  ]
},
```

In AVA setup file, we also force `NODE_ENV` to `production` to prevent Vue from logging warnings about failed async component resolving in the console:

```js
// test/.setup.js

process.env.NODE_ENV = 'production'
```

The `Foo` component dynamically imports `Bar`:

```js
// src/components/Foo.vue

// ...
const Bar = () => import('./Bar.vue')
// ...
```

This setup prevents AVA from crashing with this kind of error when running the tests:

> SyntaxError: Unexpected token import
