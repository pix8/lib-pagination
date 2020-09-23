# @pix8/lib-pagination


[![npm (scoped)](https://img.shields.io/npm/v/@pix8/lib-pagination.svg)](https://www.npmjs.com/package/@pix8/lib-pagination)
[![CircleCI](https://circleci.com/bb/pix8/npm.lib-pagination.svg?style=svg&circle-token=1087e02408bd932a6ad3430268cc484bd6735ba5)](https://circleci.com/bb/pix8/npm.lib-pagination)

## About

Assistive utility library for returning an Array of paginated indices from the current page extrapolated from the total number of pages and the range of pages you wish to display. Indices are augmented with the addition of the first and last page of the collection and an ellipsis separator when applicable.

This is useful for the creation of passive pagination user interfaces on the client when you are requesting paginated sets from an endpoint exposing the collection as a whole and was conceived as a solution to rendering such an interface in Adonis.js but could just as very easily be applied to a client-side MV* library such as Vue.js or React.

## Install
Install package from NPM into your project dependencies.

#### NPM
```bash
npm install @pix8/lib-pagination --save
```

#### Yarn
```bash
yarn add @pix8/lib-pagination
```

## Usage
Pagination module is available as a javascript module. `import`, instantiate and consume.

```javascript
import Paginate from "@pix8/lib-pagination"; // ES6
```

Or if consuming in Node in the absence of Babel transpilation.

```javascript
const Paginate = require("@pix8/lib-pagination"); //CommonJS
```

You must pass the current page, the total pages in the collection and the range/spread of pages you want available either side of the current page(default is 5). Note: Odd numbers tend to work better with this treatment but it will accept any value.

```javascript
const currentPage = 5;
const totalPages = 10;
const range = 5;

var pagination = Paginate(currentPage, totalPages, range);

console.log(pagination); // returns [1,"...",3,4,5,6,7,"...",20]
```

Return will be Array containing integer values with the exception of when an entry is an ellipsis then it will be a string type with the value "...".

## License

All I ask in return for publishing and maintaining this module is kudos and respect(alternatively I will settle for hoes of the non-garden variety). 🤘 Peace out.
