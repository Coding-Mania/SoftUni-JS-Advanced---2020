describe('ChristmasMovies functionality', () => {
    let christmasMovies;
    beforeEach(() => {
        christmasMovies = new ChristmasMovies();
    })

    describe('Ctor behaviour', () => {
        it('Should set correct values', () => {
            let actual = {
                movieCollection: [],
                watched: {},
                actors: []
            }
            let expected = christmasMovies;
            assert.deepEqual(actual, expected);
        });
    });

    describe('buyMovie behaviour', () => {
        it('Should return correct value', () => {
            let actual = christmasMovies.buyMovie('test', ['test', 'test1']);
            let expected = 'You just got test to your collection in which test, test1 are taking part!';

            assert.equal(actual, expected);
        });
        it('Should throw Error with already own movie', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            let actual = () => christmasMovies.buyMovie('test', ['test', 'test1']);
            let expected = 'You already own test in your collection!';

            assert.throws(actual, expected);
        });

        it('Should set only unique actors', () => {
            let actual = christmasMovies.buyMovie('test', ['test', 'test1','test']);
            let expected = 'You just got test to your collection in which test, test1 are taking part!';

            assert.equal(actual, expected);
        });
    });

    describe('discardMovie behaviour', () => {
        it('Should throw Error with no existing movie', () => {
            let actual = () => christmasMovies.discardMovie('test');
            let expected = 'test is not at your collection!';

            assert.throws(actual, expected);
        });
        it('Should throw Error with no watched movie', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            let actual = () => christmasMovies.discardMovie('test');
            let expected = 'test is not watched!';

            assert.throws(actual, expected);
        });
        it('Should work correct', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            christmasMovies.watchMovie('test');

            let actual = christmasMovies.discardMovie('test');
            let expected = 'You just threw away test!';

            assert.equal(actual, expected);
        });
    });

    describe('watchMovie behaviour', () => {
        it('Should throw Error with no existing movie', () => {
            let actual = () => christmasMovies.watchMovie('test');
            let expected = 'No such movie in your collection!';

            assert.throws(actual, expected);
        });
        it('Should work correct', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            christmasMovies.watchMovie('test');
            let actual = christmasMovies.watched['test'];
            let expected = 1;

            assert.equal(actual, expected);
        });
    });

    describe('favoriteMovie behaviour', () => {
        it('Should throw Error with no have favorite movie', () => {
            let actual = () => christmasMovies.favouriteMovie();
            let expected = 'You have not watched a movie yet this year!';

            assert.throws(actual, expected);
        });
        it('Should return correct value', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            christmasMovies.buyMovie('test1', ['test1', 'test1']);
            christmasMovies.watchMovie('test1');
            christmasMovies.watchMovie('test');
            christmasMovies.watchMovie('test');

            let actual = christmasMovies.favouriteMovie();
            let expected = 'Your favourite movie is test and you have watched it 2 times!';

            assert.equal(actual, expected);
        });
    });

    describe('mostStarredActor behaviour', () => {
        it('Should throw Error with no watched movie', () => {
            let actual = () => christmasMovies.mostStarredActor();
            let expected = 'You have not watched a movie yet this year!';

            assert.throws(actual, expected);
        });
        it('Should return correct value', () => {
            christmasMovies.buyMovie('test', ['test', 'test1']);
            christmasMovies.buyMovie('test1', ['test', 'test2']);
            christmasMovies.buyMovie('test2', ['test', 'test3']);

            let actual = christmasMovies.mostStarredActor();
            let expected = 'The most starred actor is test and starred in 3 movies!';

            assert.equal(actual, expected);
        });
    });
});
