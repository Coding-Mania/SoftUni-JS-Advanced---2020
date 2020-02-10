describe('mathEnforcer functionality', () => {
    describe('addFive behavior', () => {
        it('addFive should return undefined non number input', () => {
            let actual = mathEnforcer.addFive(true);
            let expected = undefined;

            assert.equal(expected, actual);
        });
        it('addFive should return correct value', () => {
            let actual = mathEnforcer.addFive(5);
            let expected = 10;

            assert.equal(expected, actual);
        });
        it('addFive should return correct value with negative number', () => {
            let actual = mathEnforcer.addFive(-5);
            let expected = 0;

            assert.equal(expected, actual);
        });
        it('addFive should return correct value with floating point number', () => {
            let actual = mathEnforcer.addFive(1.5);
            let expected = 6.5;

            assert.equal(expected, actual);
        });
    })

    describe('subtractTen behavior', () => {
        it('subtractTen should return correct value', () => {
            let actual = mathEnforcer.subtractTen(10);
            let expected = 0;

            assert.equal(expected, actual);
        });
        it('subtractTen should return correct value with negative number', () => {
            let actual = mathEnforcer.subtractTen(-10);
            let expected = -20;

            assert.equal(expected, actual);
        });
        it('subtractTen should return correct value with floating point number', () => {
            let actual = mathEnforcer.subtractTen(10.5);
            let expected = 0.5;

            assert.equal(expected, actual);
        });
        it('subtractTen should return undefined non number input', () => {
            let actual = mathEnforcer.subtractTen('12');
            let expected = undefined;

            assert.equal(expected, actual);
        });
    })

    describe('sum behavior', () => {
        it('sum should return undefined non number input first argument', () => {
            let actual = mathEnforcer.sum('12', 1);
            let expected = undefined;

            assert.equal(expected, actual);
        });
        it('sum should return undefined non number input second argument', () => {
            let actual = mathEnforcer.sum(12, '1');
            let expected = undefined;

            assert.equal(expected, actual);
        });
        it('sum should return correct value', () => {
            let actual = mathEnforcer.sum(12, 1);
            let expected = 13;

            assert.equal(expected, actual);
        });
        it('sum should return correct value with negative numbers', () => {
            let actual = mathEnforcer.sum(-12, -1);
            let expected = -13;

            assert.equal(expected, actual);
        });
        it('sum should return correct value with floating point numbers', () => {
            let actual = mathEnforcer.sum(1.2, 2.2);
            let expected = 3.4000000000000004;

            assert.equal(expected, actual);
        });
    })
})
