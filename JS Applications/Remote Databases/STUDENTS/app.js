import FirebaseProvider from './FirebaseProvider.js';

const rootURL = 'https://students-99cba.firebaseio.com';

(function main() {
    const firebaseProvider = new FirebaseProvider(rootURL);

    const sendBtn = document.querySelector('#send');
    const loadBtn = document.querySelector('#load');

    function showErrorBox() {
        document.querySelector('#error').style.display = "block";
        setTimeout(() => {
            document.querySelector('#error').style.display = "none"
        }, 2000)
    }

    function renderHTML(students) {
        const tBody = document.querySelector('tbody');
        tBody.innerHTML = '';

        Object.keys(students).forEach(key => {
            const tr = document.createElement('tr');

            const data = `
        <td>${key}</td>
        <td>${students[key].firstName}</td>
        <td>${students[key].lastName}</td>
        <td>${students[key].facultyNumber}</td>
        <td>${students[key].grade}</td>`

            tr.innerHTML = data;
            tBody.appendChild(tr);
        });
    }

    async function loadStudents() {
        const students = await firebaseProvider.getStudents();
        renderHTML(students);
    }

    async function getId() {
        const students = await firebaseProvider.getStudents();

        if (students === null || students === undefined) {
            return 0
        }

        const id = Object.keys(students).length;
        return id;
    }

    async function addStudent() {
        const inputs = document.querySelectorAll('#input input');
        const facultyNumberRegex = /^\d+$/;
        const nameRegex = /^[A-Z][a-z]+|[А-Я][а-я]+$/;

        const name = inputs[0].value.trim(' ');
        const lastName = inputs[1].value.trim(' ');
        const facultyNumber = inputs[2].value.trim(' ');
        const grade = inputs[3].valueAsNumber.toFixed(2);


        if (!name || !lastName || !facultyNumber || !grade || !nameRegex.exec(name) || !nameRegex.exec(lastName)) {
            return showErrorBox();
        }

        if (grade > 6 || grade < 2 || !facultyNumberRegex.exec(facultyNumber)) {
            return showErrorBox();
        }

        const student = {
            'firstName': name,
            'lastName': lastName,
            'facultyNumber': facultyNumber,
            'grade': grade
        }

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';
        inputs[3].value = '';

        const id = await getId();
        await firebaseProvider.addStudent(student, id);

        loadStudents();
    }

    sendBtn.addEventListener('click', addStudent);
    loadBtn.addEventListener('click', loadStudents);
}())