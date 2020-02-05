class CheckingAccount{
    _id;
    _email;
    _firstName;
    _lastName;

    constructor (clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._id;
    }

    set clientId(val){
        if (val.length !== 6 || !+val) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
     
        this._id = val
    }
    get email(){
        return this._email;
    }

    set email(val){
        this._email = val;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(val){
        this._firstName = val;
    }
    get lastName(){
        return this._lastName;
    }

    set lastName(val){
        this._lastName = val;
    }
}
let acc = new CheckingAccount('114414', 'ivan@some.com', 'Ivan', 'Petrov')