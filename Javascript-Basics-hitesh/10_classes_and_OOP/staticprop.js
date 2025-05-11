class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  -> can't be used :static

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone)
iphone.logMe();

// console.log(iphone.createId()) : can't use->static keyword