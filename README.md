# pronumjs

A small javascript util library, to convert numbers to their written equivalent, currently only supports Arabic language, but later may support other languages


### Installing

Clone using git 
```
git clone  https://github.com/waelhasan/pronumjs.git  pronumjs
cd pronumjs/
npm install
```
Install with npm
```
npm install --save pronumjs
```

### Testing

```
npm test
```

### Usage

Using it is realy simple, just import the convert function, and use it

```js
const { convert } = require('pronumjs');

console.log(convert(164)); // 'مئة و أربع وستون'
console.log(convert(456295)); // 'أربع مئة و ست وخمسون ألف و مئتان و خمس وتسعون'
console.log(convert(86752985)); // 'ست و ثمانون مليون و سبع مئة و اثنان وخمسون ألف و تسع مئة و خمس وثمانون'
```

But notice that it will throw an error if you:
- didn't pass any value
- passed a non numeric value

So this code:
```js
const { convert } = require('pronumjs');

try {
    const value = convert();
    // or any of the following:
    // const value = convert('test');
    // const value = convert(true);
    // const value = convert({ test: true });
}
catch (error) {
    console.log('[X] ERROR: ', error);
}
```

Will give the following result:
```
[X] ERROR:  Error: Expected a number, but found something else.
    at translate (/home/wael/dev/pronumjs/src/translate.js:6:15)
    at Object.<anonymous> (/home/wael/dev/pronumjs/test.js:5:17)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Function.Module.runMain (module.js:701:10)
    at startup (bootstrap_node.js:193:16)
    at bootstrap_node.js:617:3
```

## Authors

* **Wael Hasan** - [waelhasan](https://github.com/waelhasan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details