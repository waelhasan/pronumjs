const translateUnit = (number, literals) => {
    number = parseInt(number);
    if (number > 999)
        throw new Error('This function work only on numbers with 3 digits');
    else if (number < 0)
        throw new Error('This function works only on positive numbers');

    let strNum = number.toString();

    let ones, tens, hundreds;

    if (number == 0) {
        return '';
    }
    else if (number < 13) {
        return literals[number];

    }
    else if (number < 100) {
        tens = literals[parseInt(strNum[0]) * 10];
        ones = literals[parseInt(strNum[1])];

        const sep = literals.separateOnesAndTens ? literals.separator + ' ' : '';
        return literals.onesBeforeHundreds ?
            `${ones} ${sep}${tens}` :
            `${tens} ${sep}${ones}`;
    }
    else {
        hundreds = parseInt(strNum[0]);
        if (hundreds === 1)
            hundreds = (literals.pronounceOne ? literals[1] + ' ' : '') + literals[hundreds * 100];
        else if (hundreds === 2)
            hundreds = literals[hundreds * 100];
        else
            hundreds = `${literals[hundreds]} ${literals[100]}`;


        tens = parseInt(strNum[1]) * 10;
        ones = parseInt(strNum[2]);
        if (ones + tens === 0) {
            return `${hundreds}`;
        }
        if (ones + tens < 13) {
            return `${hundreds} ${literals.separator} ${literals[ones + tens]}`;
        }
        else {
            tens = literals[parseInt(strNum[1]) * 10];
            ones = literals[parseInt(strNum[2])];

            const sep = literals.separateOnesAndTens ? literals.separator + '' : '';
            return `${hundreds} ${literals.separator} ` +
                (literals.onesBeforeHundreds ?
                    `${ones} ${sep}${tens}` :
                    `${tens} ${sep}${ones}`);
            // return `${hundreds} ${literals.separator} ${ones}${tens != '' ? ' ' + literals.separator + tens : ''}`;
        }
    }
};

module.exports = translateUnit;
