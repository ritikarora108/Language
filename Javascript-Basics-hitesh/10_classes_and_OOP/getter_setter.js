class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email()
    {
        return this._email.toUpperCase()
    }

    set email(value)
    {
        this._email=value
    }
    get password() {
        return `${this._password} is my password`;
    }

    set password(value) {
        this._password=value
    }
}

const hitesh = new User("hitesh@openai.com", "abc")
console.log(hitesh.password)
console.log(hitesh.email)