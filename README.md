# esbuild-plugin-lodash

[![npm](https://img.shields.io/npm/v/esbuild-plugin-lodash.svg)](https://www.npmjs.com/package/esbuild-plugin-lodash)

This plugin is for [esbuild](https://github.com/evanw/esbuild), similar to how [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) works for babel.


## Thoughts

The non-es `lodash` package is not tree-shakeable, this plugin is only for direct import workaround. 

For better coding practices, you can use instead `lodash-es` directly or strictly import the required lodash function manually.


## Installation

```sh
npm install --save-dev esbuild-plugin-lodash
```


## Usage

Define plugin in the `plugins` section of esbuild config like this:

```js
const esbuild = require('esbuild');
const lodashTransformer = require('esbuild-plugin-lodash');

esbuild.build({
  // ...
  plugins: [
    lodashTransformer(),
  ],
})
```

## Result

Having this input file:

```js
import { get, isEmpty }  from 'lodash';

const something = {};

get(something);
isEmpty(something);
```

It will output this following file content:

```js
import get  from 'lodash/get';
import isEmpty  from 'lodash/isEmpty';

const something = {};

get(something);
isEmpty(something);
```

## Options

You can specify your own `filter` as per according to esbuild docs [here](https://esbuild.github.io/plugins/#concepts).

You can specify `outLodashPackage` which by default is `lodash`. An example
of this would be specifying calls to be rewritten to use `lodash-es`.
