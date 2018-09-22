const translate = require('./translate');
const _literals = require('./literals');

const defaultOptions = {
    language: 'ar'
};

const convert = (number, options) => {
    if (typeof number !== 'number' && typeof number !== 'string')
        throw new Error('Expected a number or a stringified number, but found something else.')

    let strNum = number.toString();
    if (isNaN(strNum))
        throw new Error('Given value is not a valid numeric value');

    options = { ...defaultOptions, ...options };

    const literals = {
        ..._literals[options.language],
        separator: options.separator || _literals[options.language].separator,
        unitsSeparator: options.unitsSeparator || _literals[options.language].unitsSeparator
    };

    return translate(strNum, literals);
}

module.exports = { convert };
