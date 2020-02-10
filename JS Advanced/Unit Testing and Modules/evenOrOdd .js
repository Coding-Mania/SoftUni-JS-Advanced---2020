describe('isOddOrEven functionality', () => {
    it('Should return undefined with non string input - boolean', () => {
        let actual = isOddOrEven(true);
        let expected = undefined;

        assert.equal(expected, actual);
    });
    it('Should return undefined with non string input - number', () => {
        let actual = isOddOrEven(5);
        let expected = undefined;

        assert.equal(expected, actual);
    });
    it('Should return even', () => {
        let actual = isOddOrEven('test');
        let expected = 'even';

        assert.equal(expected, actual);
    });
    it('Should return odd', () => {
        let actual = isOddOrEven('tests');
        let expected = 'odd';

        assert.equal(expected, actual);
    });
})
