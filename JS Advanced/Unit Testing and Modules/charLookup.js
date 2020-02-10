describe('lookupChar functionality', () => {
    it('Should return undefined with non string input - number', () => {
        let actual = lookupChar(12, 2);
        let expected = undefined;

        assert.equal(expected, actual);
    });
    it('Should return undefined with non number on second parameter input - string', () => {
        let actual = lookupChar('test', 'test');
        let expected = undefined;

        assert.equal(expected, actual);
    });
    it('Should return undefined with floating point number - 1.1', () => {
        let actual = lookupChar('test', 1.1);
        let expected = undefined;

        assert.equal(expected, actual);
    });
    it('Should return "Incorrect index" with bigger index then string length', () => {
        let actual = lookupChar('test', 10);
        let expected = 'Incorrect index';

        assert.equal(expected, actual);
    });
    it('Should return "Incorrect index" with equal index with string length', () => {
        let actual = lookupChar('test', 4);
        let expected = 'Incorrect index';

        assert.equal(expected, actual);
    });
    it('Should return "Incorrect index" with negative index', () => {
        let actual = lookupChar('test', -1);
        let expected = 'Incorrect index';

        assert.equal(expected, actual);
    });
    it('Should return correct value', () => {
        let actual = lookupChar('test', 3);
        let expected = 't';

        assert.equal(expected, actual);
    })
})
