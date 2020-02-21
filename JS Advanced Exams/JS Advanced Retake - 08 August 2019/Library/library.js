class Library {

    constructor(libraryName) {

        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {

        if (!Object.keys(this.subscriptionTypes).includes(type)) {
            throw new Error(`The type ${type} is invalid`)
        }

        let subscriber = this.subscribers.find(s => s.name === name);

        if (!subscriber) {
            subscriber = {
                name,
                type,
                books: []
            }
        }

        subscriber.type = type;

        this.subscribers.push(subscriber);

        return subscriber;
    }

    unsubscribe(name) {

        let subscriber = this.subscribers.find(s => s.name === name);

        if (!subscriber) {

            throw new Error(`There is no such subscriber as ${name}`);
        }

        let subscriberIndex = this.subscribers.indexOf(subscriber);

        this.subscribers.splice(subscriberIndex, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {

        let subscriber = this.subscribers.find(s => s.name === subscriberName);

        if (!subscriber) {

            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let subTypeLimit = this.subscriptionTypes[subscriber.type];

        if (subscriber.books.length === subTypeLimit) {

            throw new Error(`You have reached your subscription limit ${subTypeLimit}!`);
        }

        subscriber.books.push({
            title: bookTitle,
            author: bookAuthor
        });

        return subscriber;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `"${this.libraryName} has no information about any subscribers`;
        }

        return this.subscribers.reduce((acc, ob) => {
            acc += `Subscriber: ${ob.name}, Type: ${ob.type}\n`;
            acc += 'Received books: ' + ob.books.reduce((acc2, b) => {
                acc2.push(`${b.title} by ${b.author}`);
                return acc2;
            }, []).join(', ');

            return acc + '\n';
        }, '');
    }
}
