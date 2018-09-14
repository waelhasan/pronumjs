const expect = require('chai').expect;
const { convert } = require('../');

describe('Convert', function () {
    describe('Success cases', function () {
        [
            [1, 'واحد'],
            [12, 'اثنا عشر'],
            [24, 'أربع و عشرون'],
            [164, 'مئة و أربع وستون'],
            [1245, 'ألف و مئتان و خمس وأربعون'],
            [84958, 'أربع و ثمانون ألف و تسع مئة و ثمان وخمسون'],
            [456295, 'أربع مئة و ست وخمسون ألف و مئتان و خمس وتسعون'],
            [1983758, 'مليون و تسع مئة و ثلاث وثمانون ألف و سبع مئة و ثمان وخمسون'],
            [86752985, 'ست و ثمانون مليون و سبع مئة و اثنان وخمسون ألف و تسع مئة و خمس وثمانون'],
            [938506748, 'تسع مئة و ثمان وثلاثون مليون و خمس مئة و ست ألف و سبع مئة و ثمان وأربعون']
        ]
            .forEach(([number, text]) =>
                it(`Should return the right text equivalent for ${number}`, function () {
                    expect(convert(number)).to.equal(text);
                })
            )
    });

    describe('Failure cases', function () {
        it('Should fail due to not passing any value', function () {
            expect(convert.bind()).to.throw();
        });
        it('Should fail due to passing string value', function () {
            expect(convert.bind('test')).to.throw();
        });
        it('Should fail due to passing boolean value', function () {
            expect(convert.bind(true)).to.throw();
        });
        it('Should fail due to passing object value', function () {
            expect(convert.bind({ test: true })).to.throw();
        });
    });
});
