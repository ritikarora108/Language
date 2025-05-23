// ES6

class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return this.password + "abc";
    }

    allCapsUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", 1234);
console.log(chai.encryptPassword())
console.log(chai.allCapsUsername());



// behind the scene
// function User(username, email, password)
// {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`
// }

// User.prototype.allCapsUsername = function () {
//     return `${this.username.toUpperCase()}`
// }



// const chai=new User("chai","chai@gmail.com",1234)
// console.log(chai.encryptPassword())
// console.log(chai.allCapsUsername());