describe('BookStore functionality', () => {

    let bookStore;

    beforeEach(() => {
        bookStore = new BookStore('Test');
    });

    describe('Ctor behaviour', () => {

        it('Should set correct value', () => {

            let actual = bookStore;

            let expected = {
                name: 'Test',
                books: [],
                _workers: []
            };
            assert.deepEqual(actual, expected);
        });
    });

    describe('hire behaviour', () => {

        let actual;

        beforeEach(() => {
            actual = bookStore.hire('Test', 'test');
        });

        it('Should return correct value', () => {

            let expected = 'Test started work at Test as test';

            assert.equal(actual, expected);
        });

        it('Should throw Error "This person is our employee" with existing employee', () => {

            let actualValue = () => bookStore.hire('Test', 'test');
            let expected = 'This person is our employee';

            assert.throws(actualValue, expected);
        });
    });

    describe('fire behaviour', () => {

        beforeEach(() => {
            bookStore.hire('Test', 'test');
        });

        it('Should throw new Error with no existing employee', () => {

            let actual = () => bookStore.fire('test');
            let expected = "test doesn't work here";

            assert.throws(actual, expected);
        });

        it('Should work correct', () => {
            let actual = bookStore.fire('Test');
            let expected = 'Test is fired';

            assert.equal(actual, expected);
        });
    });

    describe('sellBook behaviour', () => {

        it('Should throw Error with no existing book', () => {
            let actual = () => bookStore.sellBook('test', 'test');
            let expected = 'This book is out of stock';

            assert.throws(actual, expected);
        });

        it('Should throw Error with no existing employee', () => {

            let newBooks = ['Test-Test', 'Test2-Test2'];
            bookStore.stockBooks(newBooks);

            let actual = () => bookStore.sellBook('Test', 'test');
            let expected = 'test is not working here';

            assert.throws(actual, expected);
        });

        it('Should work correct', () => {
            let newBooks = ['Test-Test', 'Test2-Test2'];
            bookStore.stockBooks(newBooks);
            bookStore.hire('Test', 'test');
            bookStore.sellBook('Test', 'Test');

            let actual = bookStore.books.includes('Test');

            assert.isFalse(actual);
        });
    });

    describe('printWorkers behaviour', () => {
        it('Should work correct', () => {
            let newBooks = ['Test-Test', 'Test2-Test2'];
            bookStore.stockBooks(newBooks);
            bookStore.hire('Test', 'test');
            bookStore.sellBook('Test', 'Test');

            let actual = bookStore.printWorkers();
            let expected = 'Name:Test Position:test BooksSold:1';

            assert.equal(actual, expected);
        });
    });
});
