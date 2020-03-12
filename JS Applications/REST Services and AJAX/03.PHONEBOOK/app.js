function attachEvents() {

    let id = 0;
    let loadBtn = document.querySelector('#btnLoad');
    let createBtn = document.querySelector('#btnCreate');

    async function getId() {
        await fetch('https://phonebook-871d1.firebaseio.com/phonebook.json')
            .then(x => x.json())
            .then(x => id = Object.keys(x).length || 0);
    }

    function loadContacts() {

        let ul = document.querySelector('#phonebook');
        ul.innerHTML = '';

        fetch('https://phonebook-871d1.firebaseio.com/phonebook.json')
            .then(x => x.json())
            .then(x => {


                if (!Array.isArray(x)) {
                    let temp = x;
                    let key = Object.keys(x)[0];
                    let values = Object.values(x);
                    x = new Array()
                    x [key] = values[0];
                }

                x.forEach((element, id) => {

                    if (element === null) {
                        return;
                    }

                    let li = document.createElement('li');
                    li.innerHTML = `${element.person}: ${element.phone}`;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.innerHTML = 'Delete';
                    deleteBtn.addEventListener('click', () => {
                        fetch(`https://phonebook-871d1.firebaseio.com/phonebook/${id}.json`, {
                            method: "DELETE"
                        })
                            .then(x => loadContacts());
                    });

                    li.appendChild(deleteBtn);

                    ul.appendChild(li);
                });
            })
    }

    async function createContact() {
        getId();

        let nameInput = document.querySelector('#person');
        let phoneInput = document.querySelector('#phone');

        let name = nameInput.value;
        let phone = phoneInput.value;

        let person = {
            person: name,
            phone: phone
        }

        await fetch(`https://phonebook-871d1.firebaseio.com/phonebook/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(person)
        })

        id++
        loadContacts();
    }

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContact);
}

attachEvents();