import { FirebaseProvider } from './FirebaseProvider.js'

const rootURL = 'https://books-15177.firebaseio.com';
const tBody = document.querySelector('tbody');
const formElement = {
    title: document.querySelector('#title'),
    author: document.querySelector('#author'),
    ISBN: document.querySelector('#isbn'),
    tags: document.querySelector('#tags')
};

(function main() {
    const firebaseProvider = new FirebaseProvider(rootURL);

    const submitBtn = document.querySelector('form button');
    const loadBtn = document.querySelector('#loadBooks');

    function clearFormValues() {
        formElement.title.value = '';
        formElement.author.value = '';
        formElement.ISBN.value = '';
        formElement.tags.value = '';
    }

    async function addBook(e) {
        e.preventDefault();

        let book = {
            "title": formElement.title.value,
            "author": formElement.author.value,
            "isbn": formElement.ISBN.value,
            'tags': formElement.tags.value
        }

        
        if (formElement.title.value !== '' && formElement.author.value !== '' && formElement.ISBN.value !== '') {
            await firebaseProvider.createBook(book);
            loadBooks();
        }
        
        clearFormValues();
    }

    function renderHTML(books) {
        tBody.innerHTML = '';

        if (books === null || books === undefined) {
            return;
        }

        Object.keys(books).forEach(id => {
            const tr = document.createElement('tr');

            const data = `
        <td>${books[id].title}</td>
        <td>${books[id].author}</td>
        <td>${books[id].isbn}</td>
        <td>${books[id].tags}</td>
        <td>
        <button>Edit</button>
        <button>Delete</button>
        </td>`

            tr.setAttribute('book-id', id);
            tr.innerHTML = data;
            tBody.appendChild(tr);
        });
    }

    async function loadBooks() {
        let books = await firebaseProvider.getAllBooks();

        renderHTML(books);
    }

    async function tBodyEventHandler(e) {
        const bookId = e.target.parentElement.parentElement.getAttribute('book-id');

        if (e.target.tagName === 'TD') {

            const dataTds = e.target.parentElement.querySelectorAll('td');

            const data = {
                title: dataTds[0].innerHTML,
                author: dataTds[1].innerHTML,
                ISBN: dataTds[2].innerHTML,
                tags: dataTds[3].innerHTML
            };

            formElement.title.value = data.title;
            formElement.author.value = data.author;
            formElement.ISBN.value = data.ISBN;
            formElement.tags.value = data.tags;

        } else if (e.target.tagName === 'BUTTON') {
            const type = e.target.innerHTML;

            if (type === 'Delete') {
                await firebaseProvider.deleteBook(bookId);

                loadBooks();
            } else if (type === 'Edit') {
                let book = {
                    "title": formElement.title.value,
                    "author": formElement.author.value,
                    "isbn": formElement.ISBN.value,
                    'tags': formElement.tags.value
                }

                if (formElement.title.value !== '' && formElement.author.value !== '' && formElement.ISBN.value !== '') {
                    await firebaseProvider.updateBook(book, bookId);
                    clearFormValues();

                    loadBooks();
                }
            }
        }
    }

    submitBtn.addEventListener('click', addBook);
    loadBtn.addEventListener('click', loadBooks);
    tBody.addEventListener('click', tBodyEventHandler);
}())