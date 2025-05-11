// fetch("https://google.com").then().catch().finally()

// Creation
console.log("Promise 1: ")
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async code
    // DB calls, cryptograph related, network calls
    setTimeout(function () {
       
        console.log("Async task is complete") // statement1
        resolve() // order of printing will be st1 , then st2 
                 // (no matter resolve() is written above or below this console)
    },4000)
})

// Consumption
promiseOne.then(function () {
    console.log("promise consumed") // statement2
})

console.log("\nPromise2 :")

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function () {
    console.log("async2 resolved")
})

console.log("\nPromise3: ")
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promise3.then(function (user) {
    console.log(user)
})

console.log("\nPriomise4:")
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else {
            reject('Error: something went wrong :(')
        }

    },2000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(()=> console.log("Finally, the promise is either resolved or rejected"))


console.log("\nPromise 5:")

const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"javascript",password:"js"})
        } else {
            reject('Error:(  JS went wrong!!')
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promise5
    console.log(response)
    } catch(error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     //console.log("**********************************")
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(typeof response)  // Object
//         const data = await response.json();
//         console.log(response)
//     } catch (error) {
//         console.log("Error: ",error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((thenable) => {
        console.log(thenable)
    })
    .catch((error) => {
        console.log(error)
    })

// promise.all
// yes this is also available, kuch reading or kro.