# pronumjs

A small javascript util library, to convert numbers to their written equivalent, currently only supports Arabic language, but later may support other languages


### Installing

Install dependencies

```
cd /pronumjs
npm install
```

### Testing it

```
npm test
```

### Usage

Using it is realy simple, just import the convert function, and use it

```js
const { convert } = require('../pronumjs');

console.log(convert(164)); // 'مئة و أربع وستون'
console.log(convert(456295)); // 'أربع مئة و ست وخمسون ألف و مئتان و خمس وتسعون'
console.log(convert(86752985)); // 'ست و ثمانون مليون و سبع مئة و اثنان وخمسون ألف و تسع مئة و خمس وثمانون'
```

## Authors

* **Wael Hasan** - [waelhasan](https://github.com/waelhasan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details