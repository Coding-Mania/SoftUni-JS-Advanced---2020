describe('FilmStudio functionality', () => {
    let filmStudio;
    beforeEach(() => {
        filmStudio = new FilmStudio('Test');
    })

    describe('Ctor behaviour', () => {
        it('Should set correct values', () => {
            let actual = {
                name: 'Test',
                films: []
            }
            let expected = filmStudio;
            assert.deepEqual(actual, expected);
        });
    });

    describe('casting behaviour', () => {
        it('should return There are no films yet with no films', () => {
            let expected = filmStudio.casting('test', 'test');
            let actual = 'There are no films yet in Test.';

            assert.equal(actual, expected);
        });
        it('no role', () => {
            filmStudio.makeMovie('Test', ['test']);

            let actual = filmStudio.casting('test', '1');
            let expected = 'test, we cannot find a 1 role...';

            assert.equal(actual, expected);
        });
        it('should work correct', () => {
            filmStudio.makeMovie('Test', ['test']);

            let actual = filmStudio.casting('test', 'test');
            let expected = 'You got the job! Mr. test you are next test in the Test. Congratz!';

            assert.equal(actual, expected);
        });
    });

    describe('makeMovie behaviour', () => {
        it('should throw with invalid arguments', () => {
            let actual = () => filmStudio.makeMovie('test');
            let expected = 'Invalid arguments count';

            assert.throws(actual, expected);
        });
        it('should throw with invalid type of first argument', () => {
            let actual = () => filmStudio.makeMovie(12, '1234');
            let expected = 'Invalid arguments';

            assert.throws(actual, expected);
        });
        it('should throw with invalid type of second argument', () => {
            let actual = () => filmStudio.makeMovie('1', '1234');
            let expected = 'Invalid arguments';

            assert.throws(actual, expected);
        });
        it('Should work correct', () => {
            var actual = filmStudio.makeMovie('Test', ['test']);
            var expected = {
                "filmName": "Test",
                "filmRoles": [
                    {
                        "actor": false,
                        "role": "test"
                    }
                ]
            }

            assert.deepEqual(actual, expected);
        });
    });
    describe('lookForProducer behaviour', () => {
        it('should throw Error with no existing film', () => {
            let actual = () => filmStudio.lookForProducer('12');
            let expected = '12 do not exist yet, but we need the money...';

            assert.throws(actual, expected);
        });
        it('should return correct value', () => {
            filmStudio.makeMovie('Test', ['test']);

            let actual = filmStudio.lookForProducer('Test');
            let expected = 'Film name: Test\nCast:\nfalse as test\n';

            assert.equal(actual, expected);
        });
    });
});
