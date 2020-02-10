describe('StringBuilder functionality', () => {
    describe('ctor behavior', () => {
        it('ctor should  throw new TypeError with non string value', () => {
            let actual = () => new StringBuilder(12);
            let expected = 'Argument must be string';

            assert.throws(actual, expected);
        })
        it('ctor should  set correct value', () => {
            let actual = new StringBuilder('1234')._stringArray;
            let expected = ['1', '2', '3', '4'];

            assert.deepEqual(actual, expected);
        })
        it('ctor should  set correct value with empty input', () => {
            let actual = new StringBuilder()._stringArray;
            let expected = [];

            assert.deepEqual(actual, expected);
        })
    })
    describe('append behavior', () => {
        it('append should  throw new TypeError with non string value', () => {
            let sb = new StringBuilder('123');
            let actual = () => { sb.append(124) }
            let expected = 'Argument must be string';

            assert.throws(actual, expected);
        })
        it('append should set correct values', () => {
            let actual = new StringBuilder('1');
            actual.append('2');
            let expected = ['1', '2'];

            assert.deepEqual(actual._stringArray, expected);
        })
    })
    describe('prepend behavior', () => {
        it('prepend should  throw new TypeError with non string value', () => {
            let sb = new StringBuilder('123');
            let actual = () => { sb.prepend(124) }
            let expected = 'Argument must be string';

            assert.throws(actual, expected);
        })
        it('prepend should set correct values', () => {
            let actual = new StringBuilder('1');
            actual.prepend('2');
            let expected = ['2', '1'];

            assert.deepEqual(actual._stringArray, expected);
        })
    })
    describe('insertAt behavior', () => {
        it('insertAt should  throw new TypeError with non string value', () => {
            let sb = new StringBuilder('123');
            let actual = () => { sb.insertAt(23, 124) }
            let expected = 'Argument must be string';

            assert.throws(actual, expected);
        })
        it('insertAt should set correct values', () => {
            let actual = new StringBuilder('14');
            actual.insertAt('23', 1);

            let expected = ['1', '2', '3', '4'];

            assert.deepEqual(actual._stringArray, expected);
        })
    })
    describe('remove behavior', () => {
        it('remove should work correct', () => {
            let actual = new StringBuilder('123');
            actual.remove(0, 1);
            let expected = ['2', '3'];

            assert.deepEqual(actual._stringArray, expected);
        })
    })
    describe('toString behavior', () => {
        it('toString should return correct value', () => {
            let sb = new StringBuilder('123');
            let actual = sb.toString();
            var expected = '123';

            assert.equal(actual, expected)
        })
    })
})
