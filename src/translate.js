const translateUnit = require('./translateUnit');

let translate = (strNum, literals) => {
    let result = '';

    // add 0's if we need to make the number have units of 3 digits each
    let reminder = 3 - strNum.length % 3;
    if (reminder === 1)
        strNum = `0${strNum}`;
    else if (reminder === 2)
        strNum = `00${strNum}`;

    // handle each unit, starting with the last one from the right
    for (let start = strNum.length - 1; start > 0; start -= 3) {
        let currentUnit = '';
        for (let incr = 2; incr >= 0; incr--) {
            currentUnit += strNum[start - incr];
        }

        // get the name of the unit
        let unit = Math.pow(10, strNum.length - start - 1);

        if (unit < 1000) {
            currentUnit = `${translateUnit(currentUnit, literals)}`;
        }
        else {
            unit = unit.toString();
            // translate the current unit
            let currentUnitInt = parseInt(currentUnit);

            if (currentUnitInt === 1)
                currentUnit = (literals.pronounceOne ? literals[1] + ' ' : '') + literals[unit];
            else if (currentUnitInt === 2)
                currentUnit = literals[unit * 2];
            else if (currentUnitInt < 11)
                currentUnit = `${translateUnit(currentUnit, literals)} ${literals[unit * 3]}`;
            else
                currentUnit = `${translateUnit(currentUnit, literals)} ${literals[unit]}`;
        }

        // compose the final result
        result = result === '' ? '' : ` ${literals.unitsSeparator} ${result}`;
        result = `${currentUnit}${result}`;
    }

    return result;
};

module.exports = translate;
