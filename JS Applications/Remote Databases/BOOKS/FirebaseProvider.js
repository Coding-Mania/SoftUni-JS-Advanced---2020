class FirebaseProvider {
    constructor(rootURL) {
        this._rootURL = rootURL;
    }

    createBook(book) {
        return fetch(this._rootURL + '/books.json', {
            method: 'POST',
            body: JSON.stringify(book)
        })
            .then(x => x.json())
    }

    updateBook(book, id) {
        return fetch(this._rootURL + `/books/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(book)
        })
            .then(x => x.json())
    }

    deleteBook(id) {
        return fetch(this._rootURL + `/books/${id}.json`, {
            method: 'DELETE',
        })
            .then(x => x.json())
    }

    getAllBooks() {
        return fetch(this._rootURL + '/books.json')
            .then(x => x.json());
    }
}

export { FirebaseProvider }