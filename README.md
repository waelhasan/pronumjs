# pronumjs (pronounce number js)

A small javascript util library, to convert integer numbers to their written equivalent, currently supports Arabic and English language, and may support other languages

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

- Using it is realy simple, just import the convert function, and use it, by passing the number as a number or a string:

```js
const { convert } = require('pronumjs');

console.log(convert(164)); // 'مئة و أربع وستون'
console.log(convert(456295)); // 'أربع مئة و ست وخمسون ألف و مئتان و خمس وتسعون'
console.log(convert(86752985)); // 'ست و ثمانون مليون و سبع مئة و اثنان وخمسون ألف و تسع مئة و خمس وثمانون'
console.log(convert('123456789123')); //'مئة و ثلاث وعشرون بليون و أربع مئة و ست وخمسون مليون و سبع مئة و تسع وثمانون ألف و مئة و ثلاث وعشرون'
```
Notice that we use the string form of the numbers in the situations where the numbers will change the format in the runtime, e.g. the number 123456789123123876983273 will be converted to the form "1.2345678912312388e+23", which will be a problem for the algorithm (at least currently)
```js
console.log(123456789123123876983273); // logs: 1.2345678912312388e+23
```
#### YOU ARE ENCOURAGED TO USE THE STRING FORMAT ALL THE TIME

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
[X] ERROR:  Error: Expected a number or a stringified number, but found something else.
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
- Also you can pass an options object as a second parameter, which can have the following attributes:
1. language: to choose from the available supported languages (currently "ar" for Arabic, and "en" for English)
```js
console.log(convert(1245, {
    language: 'ar',
}));
// ألف و مئتان و خمس وأربعون

console.log(convert(1245, {
    language: 'en'
}));
// one thousand and two hundred and forty five
```
2. unitsSeparator: the string that will be used to separate the different units of the number (each 3 digits are a unit)
```js
console.log(convert(84958, {
    language: 'ar',
    unitsSeparator: '،'
}));
// أربع و ثمانون ألف ، تسع مئة و ثمان وخمسون

console.log(convert(84958, {
    language: 'en',
    unitsSeparator: ', '
}));
// eighty four thousand ,  nine hundred and fifty eight
```
3. separator: the string that will be used to separate the digits in the same unit of the number
```js
console.log(convert(456295, {
    language: 'ar',
    separator: 'ثم'
}));
// سبع ملايين ثم خمس مئة و ثلاث وستون ألف ثم تسع مئة و اثنان وثمانون

console.log(convert(456295, {
    language: 'en',
    separator: '&'
}));
// four hundred & fifty six thousand and two hundred & ninety five
```
You can combine all the options:
```js
console.log(convert(7563982, {
    language: 'ar',
    unitsSeparator: '#',
    separator: '&'
}));
// سبع ملايين # خمس مئة & ثلاث &ستون ألف # تسع مئة & اثنان &ثمانون

console.log(convert(7563982, {
    language: 'en',
    unitsSeparator: '#',
    separator: '&'
}));
// seven millions # five hundred & sixty three thousand # nine hundred & eighty two
```


## Todo:
- Support gender (in Arabic language)
- Add proper commenting to the code
- Support floating point numbers

## Authors

* **Wael Hasan** - [waelhasan](https://github.com/waelhasan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details