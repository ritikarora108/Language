const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){    // Don't use arrow function ()=>{}, this. will create problem
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    },
}

// console.log(user.username)
// user.getUserDetails()

// console.log(this) // {}

// const promiseOne = new Promise()       // new is a constructor function
// const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.username}`)
    }
   // return this
}

// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("chaiAurCode",9,false)


// Steps:
// 1) New object is created
// 2) Constructor function is called using 'new' keyword(packs the argument);
// 3) all the arguments are injected into 'this'
// 4) we can access them using 'this'

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiAurCode",9,false)
// console.log(userOne)
// console.log(userTwo)

// userOne.greetings()

console.log(userOne.constructor)