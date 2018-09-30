const { convert } = require('.');

const vals = [
    1,
    12,
    24,
    164,
    1245,
    84958,
    456295,
    1983758,
    86752985,
    938506748,

    '123456789123',
    '123456789123123',
    '123456789123123876',
    '123456789123123876983',
    '123456789123123876983273',
    '123456789123123876983273829',
    '123456789123123876983273829492',
    '123456789123123876983273829492284',
    '123456789123123876983273829492283504',
    '123456789123123876983273829492283504036',
    '123456789123123876983273829492283504036547',
    '123456789123123876983273829492283504036547284',
    '123456789123123876983273829492283504036547284436',
    '123456789123123876983273829492283504036547284436453',
    '123456789123123876983273829492283504036547284436453435',
    '123456789123123876983273829492283504036547284436453435786',
    '123456789123123876983273829492283504036547284436453435786172',
    '123456789123123876983273829492283504036547284436453435786172182',
    '123456789123123876983273829492283504036547284436453435786172182194'
];


console.log(`describe('Success cases with setting the language: "ar"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'ar',
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'ar',
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the language: "ar", unitsSeparator: "،"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'ar',
        unitsSeparator: '،',
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'ar',
        unitsSeparator: '،',
                }).trim()).to.equal(text.trim());
            })
        )
})
`)


// ===============================================================
console.log(`describe('Success cases with setting the language: "ar", separator: "و"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'ar',
        separator: 'و'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'ar',
        separator: 'و'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the language: "ar", unitsSeparator: "،", separator: "و"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'ar',
        unitsSeparator: '،',
        separator: 'و'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'ar',
                    unitsSeparator: '،',
                    separator: 'و'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the unitsSeparator: "،", separator: "و"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        unitsSeparator: '،',
        separator: 'و'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    unitsSeparator: '،',
                    separator: 'و'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the language: "en"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'en'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'en'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the language: "en", unitsSeparator: ", ", separator: "&"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'en',
        unitsSeparator: ', ',
        separator: '&'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'en',
        unitsSeparator: ', ',
        separator: '&'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)

// ===============================================================
console.log(`describe('Success cases with setting the language: "en",  unitsSeparator: ", "', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'en',
        unitsSeparator: ', ',
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'en',
        unitsSeparator: ', ',
                }).trim()).to.equal(text.trim());
            })
        )
})
`)
// ===============================================================
console.log(`describe('Success cases with setting the language: "en", separator: "&"', function () {`);
console.log('[');
vals.forEach(number => {
    console.log(`['${number}', '${convert(number, {
        language: 'en',
        separator: '&'
    })}'],`);

})
console.log(']');
console.log(".forEach(([number, text]) =>");
console.log("it(`Should return the right text equivalent for ${number}`, function () {");
console.log(`
                expect(convert(number, {
                    language: 'en',
                     separator: '&'
                }).trim()).to.equal(text.trim());
            })
        )
})
`)
