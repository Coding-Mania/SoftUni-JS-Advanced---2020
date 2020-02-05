class CheckingAccount {
    emailPattern = /\w+@\w+.?\w+/gm;
    namePattern = /[\W\d]/gm;

    _id;
    _email;
    _firstName;
    _lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._id;
    }

    set clientId(val) {
        if (val.length !== 6 || !+val) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._id = val
    }
    get email() {
        return this._email;
    }

    set email(val) {
        if (!this.emailPattern.exec(val)) {
            throw new TypeError('Invalid e-mail')
        }
        this._email = val;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(val) {
        this.checkName(val, 'firstName');
        this._firstName = val;
    }
    get lastName() {
        return this._lastName;
    }

    set lastName(val) {
        this.checkName(val, 'lastName');
        this._lastName = val;
    }

    checkName(value, propName) {
        propName = propName.startsWith('first') ? 'First' : 'Last';
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${propName} name must be between 3 and 20 characters long`);
        } else if (this.namePattern.exec(value)) {
            throw new TypeError(`${propName} name must contain only Latin characters`);
        }
    }
}
