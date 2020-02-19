describe('SkiResort functionality', () => {

    let skiResort;

    beforeEach(() => {
        skiResort = new SkiResort('Test');
    });

    describe('Ctor behaviour', () => {
        it('Should set correct value', () => {

            let actual = skiResort;
            let expected = {
                name: 'Test',
                voters: 0,
                hotels: []
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe('bestHotel getter behaviour', () => {
        it('Should return "No votes yet"', () => {
            let actual = skiResort.bestHotel;
            let expected = "No votes yet";

            assert.equal(actual, expected);
        });

        it('Should return correct value', () => {

            skiResort.build('test', 2);
            skiResort.build('test2', 4);

            skiResort.leave('test', 2, 12);
            skiResort.leave('test2', 4, 24);

            let actual = skiResort.bestHotel;
            let expected = "Best hotel is test2 with grade 96. Available beds: 8";

            assert.equal(actual, expected);
        });
    });

    describe('build behaviour', () => {
        it('Should throw Error with invalid name', () => {

            let actual = () => skiResort.build('', 2);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });
        it('Should throw Error with invalid beds', () => {

            let actual = () => skiResort.build('test', 0);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });

        it('Should work correct', () => {

            let actual = skiResort.build('test', 3);
            let expected = "Successfully built new hotel - test";

            assert.equal(actual, expected);
            assert.equal(skiResort.hotels.length, 1);
        });
    });

    describe('book behaviour', () => {
        it('Should throw Error with invalid name', () => {
            let actual = () => skiResort.book('', 2);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });

        it('Should throw Error with invalid beds', () => {
            let actual = () => skiResort.book('test', 0);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });

        it('Should throw Error with no existing hotel', () => {
            let actual = () => skiResort.book('test', 1);
            let expected = "There is no such hotel";

            assert.throws(actual, expected);
        });

        it('Should throw Error with no free space', () => {
            skiResort.build('test', 1);
            skiResort.book('test', 1);
            let actual = () => skiResort.book('test', 1);
            let expected = "There is no free space";

            assert.throws(actual, expected);
        });

        it('Should work correct', () => {
            skiResort.build('test', 1);

            let actual = skiResort.book('test', 1);
            let expected = "Successfully booked";

            assert.equal(actual, expected);
        });
    });

    describe('leave behaviour', () => {
        it('Should throw Error with invalid name', () => {
            let actual = () => skiResort.leave('', 2);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });
        it('Should throw Error with invalid beds', () => {
            let actual = () => skiResort.leave('test', 0);
            let expected = "Invalid input";

            assert.throws(actual, expected);
        });
        it('Should throw Error with no existing hotel', () => {
            let actual = () => skiResort.leave('test', 1);
            let expected = "There is no such hotel";

            assert.throws(actual, expected);
        });

        it('Should work correct', () => {
            skiResort.build('test', 1);
            skiResort.book('test', 1);

            let actual = skiResort.leave('test', 1, 200);
            let expected = '1 people left test hotel';

            assert.equal(actual, expected);
        });
    });

    describe('averageGrade behaviour', () => {
        it('Should return No votes yet', () => {
            let actual = skiResort.averageGrade();
            let expected = 'No votes yet';

            assert.equal(actual, expected);
        });
        it('Should work correct', () => {
            skiResort.build('test', 1);
            skiResort.book('test', 1);
            skiResort.leave('test', 1, 200);

            let actual = skiResort.averageGrade();
            let expected = 'Average grade: 200.00';

            assert.equal(actual, expected);
        });
    });
});