describe('Parser functionality', () => {

    let parser;

    beforeEach(() => {
        parser = new Parser('[ {"Nancy":"architect"}]');
    });

    describe('Ctor behaviour', () => {

        it('Should set correct value', () => {

            let actual =JSON.stringify(parser);
            let expected = '{"_data":[{"Nancy":"architect"}],"_log":[]}';

            assert.deepEqual(actual, expected);
        });
    });

    describe('data getter behaviour', () => {
        it('Should return correct value', () => {
            let actual = parser.data;
            let expected = [{ "Nancy": "architect" }];

            assert.deepEqual(actual, expected);


        });
    });

    describe('print behaviour', () => {
        it('Should return core ', () => {
            let actual = parser.print();

            let expected = 'id|name|position\n0|Nancy|architect';

            assert.equal(actual, expected);
        });
    });

    describe('addEntries behaviour', () => {
        it('Should ', () => {
            let actual = parser.addEntries("Steven:tech-support Edd:administrator");
            let expected = 'Entries added!';

            assert.equal(actual, expected);
        });
    });

    describe('removeEntry behaviour', () => {
        it('Should remove', () => {
            parser.addEntries("Steven:tech-support Edd:administrator");
            let actual = parser.removeEntry('Steven');
            let expected = 'Removed correctly!';

            assert.equal(actual, expected);
        });

        it('should throw', () => {
            let actual = () => parser.removeEntry('Steven');
            let expected = 'There is no such entry!';

            assert.throws(actual, expected);
        })
    });
    describe('_Log behaviour', () => {
        it('Should ', () => {
            parser.addEntries("Steven:tech-support Edd:administrator");

            let actual = parser._log;
            let expected = ['0: addEntries'];

            assert.deepEqual(actual, expected);
        });
    });
});
