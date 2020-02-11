describe('PaymentPackage functionality', () => {
    let pP;

    beforeEach(() => {
        pP = new PaymentPackage('Test', 200);
    });


    describe('ctor behavior', () => {
        it('ctor should set correct values', () => {

            assert.equal(pP.name, 'Test');
            assert.equal(pP.value, 200);
            assert.equal(pP.VAT, 20);
            assert.equal(pP.active, true);
        })
    })
    describe('Name getter and setter behavior', () => {
        it('Name getter should return correct value', () => {
            let actual = pP.name;
            let expected = 'Test'
            assert.equal(actual, expected);
        });
        it('Name setter should throw Error with non string parameter', () => {
            let actual = () => pP.name = 23;
            let expected = 'Name must be a non-empty string';
            assert.throws(actual, expected);
        });
        it('Name setter should throw Error with empty string parameter', () => {
            let actual = () => pP.name = '';
            let expected = 'Name must be a non-empty string';
            assert.throws(actual, expected);
        });
        it('Name setter should set correct value', () => {
            pP.name = 'Testing';
            let actual = pP.name;
            let expected = 'Testing';
            assert.equal(actual, expected);
        });
    })
    describe('Value getter and setter behavior', () => {
        it('Value getter should return correct value', () => {
            let actual = pP.value;
            let expected = 200;
            assert.equal(actual, expected);
        });
        it('Value setter should throw Error with non number parameter', () => {
            let actual = () => pP.value = 'Test';
            let expected = 'Value must be a non-negative number';
            assert.throws(actual, expected);
        });
        it('Value setter should throw Error with negative parameter', () => {
            let actual = () => pP.value = -1;
            let expected = 'Value must be a non-negative number';
            assert.throws(actual, expected);
        });
        it('Value setter should set correct value', () => {
            pP.value = 400;
            let actual = pP.value;
            let expected = 400;
            assert.equal(actual, expected);
        });
    })
    describe('VAT getter and setter behavior', () => {
        it('VAT getter should return correct value', () => {
            let actual = pP.VAT;
            let expected = 20;
            assert.equal(actual, expected);
        });
        it('VAT setter should throw Error with non number parameter', () => {
            let actual = () => pP.VAT = 'Test';
            let expected = 'VAT must be a non-negative number';
            assert.throws(actual, expected);
        });
        it('VAT setter should throw Error with negative parameter', () => {
            let actual = () => pP.VAT = -1;
            let expected = 'VAT must be a non-negative number';
            assert.throws(actual, expected);
        });
        it('VAT setter should set correct value', () => {
            pP.VAT = 40;
            let actual = pP.VAT;
            let expected = 40;
            assert.equal(actual, expected);
        });
    })
    describe('Active getter and setter behavior', () => {
        it('Active getter should return correct value', () => {
            let actual = pP.active;
            let expected = true;
            assert.equal(actual, expected);
        });
        it('Active setter should throw Error with non boolean parameter', () => {
            let actual = () => pP.active = 'Test';
            let expected = 'Active status must be a boolean';
            assert.throws(actual, expected);
        });
        it('Active setter should set correct value', () => {
            pP.active = false;
            let actual = pP.active;
            let expected = false;
            assert.equal(actual, expected);
        });
    })
    describe('toString behavior', () => {
        it('toString should return correct output', () => {
            let actual = pP.toString();
            let expected = [
                `Package: ${pP.name}` + (pP.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${pP.value}`,
                `- Value (VAT ${pP.VAT}%): ${pP.value * (1 + pP.VAT / 100)}`
            ].join('\n');

            assert.deepEqual(actual, expected);
        })
        it('toString should return correct output with inactive', () => {
            pP.active = false;
            let actual = pP.toString();
            let expected = [
                `Package: ${pP.name}` + (pP.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${pP.value}`,
                `- Value (VAT ${pP.VAT}%): ${pP.value * (1 + pP.VAT / 100)}`
            ].join('\n');

            assert.deepEqual(actual, expected);
        })
        it('toString should return correct output with zero value', () => {
            pP.value = 0;
            pP.VAT = 0;
            let actual = pP.toString();
            let expected = [
                `Package: ${pP.name}` + (pP.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${pP.value}`,
                `- Value (VAT ${pP.VAT}%): ${pP.value * (1 + pP.VAT / 100)}`
            ].join('\n');

            assert.deepEqual(actual, expected);
        })
    })
})