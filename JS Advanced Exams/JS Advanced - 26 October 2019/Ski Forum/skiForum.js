class Forum {
    
    _users = [];
    _questions = [];
    _id = 1;
    _loggedUsers = [];

    register(username, password, repeatPassword, email) {

        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {

            throw new Error('Passwords do not match');
        }

        let user = null;

        this._users.forEach(e => {
            if (e.username === username || e.email === email) {
                user = e;
            }
        });

        if (user) {
            throw new Error('This user already exists!');
        }

        this._users.push({
            username,
            password,
            email
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {

        let user = null;

        this._users.forEach(e => {
            if (e.username === username && e.password === password) {
                user = e;
            }
        });

        if (!user) {
            throw new Error('There is no such user');
        }

        this._loggedUsers.push(username);

        return 'Hello! You have logged in successfully';
    }

    logout(username, password) {

        let user = null;

        this._users.forEach(e => {
            if (e.username === username && e.password === password) {
                user = e;
            }
        });

        if (!user) {
            throw new Error('There is no such user');
        }

        let index = this._loggedUsers.indexOf(username);

        this._loggedUsers.splice(index, 1);

        return 'You have logged out successfully'
    }

    postQuestion(username, question) {
        let user = null;

        this._users.forEach(e => {
            if (e.username === username) {
                user = e;
            }
        });

        if (!user || !this._loggedUsers.includes(username)) {
            throw new Error('You should be logged in to post questions');
        }

        if (question === '') {
            throw new Error('Invalid question');
        }

        this._questions.push({
            id: this._id,
            question,
            by: username,
            answers: []
        });

        this._id++;

        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {

        let user = null;

        this._users.forEach(e => {
            if (e.username === username) {
                user = e;
            }
        });

        if (!user || !this._loggedUsers.includes(username)) {
            throw new Error('You should be logged in to post answers');
        }

        if (answer === '') {
            throw new Error('Invalid answer');
        }

        let question = null;

        for (const id in this._questions) {
            if (this._questions[id].id === questionId) {
                question = this._questions[id];
                break;
            }
        }

        if (!question) {
            throw new Error('There is no such question');
        }

        question.answers.push(`${username}: ${answer}`)
        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        return this._questions.reduce((acc, q) => {
            acc += `\nQuestion ${q.id} by ${q.by}: ${q.question}\n`;
            acc += q.answers.reduce((acc2, a) => {
                acc2 += `---${a}\n`
                return acc2;
            }, '').trim();
            return acc;
        }, '').trim();
    }
}
