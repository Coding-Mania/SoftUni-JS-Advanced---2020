class FirebaseProvider {
    constructor(rootURL) {
        this._rootURL = rootURL;
    }

    addStudent(student, id) {
        return fetch(this._rootURL + `/students/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(student)
        })
    }

    getStudents() {
        return fetch(this._rootURL + '/students.json')
            .then(x => x.json())
    }
}

export default FirebaseProvider;