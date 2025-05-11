// this refers the current context

const user = {
    userName: "hitesh",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Ritik"
// console.log(user["userName"])
// user.welcomeMessage()

// console.log(this)               // this refers to {} in the node environment for global scope


// function chai()
// {
//     let userName = "hitesh"
//     console.log(this)
//     // console.log(this.userName)     -> undefined,    this works in objects
// }
// chai()

const chai = () => {
    let userName = "hitesh"
    console.log(this)        // prints {}
    console.log(this.userName)     //-> undefined,    this works in objects
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2              // Explicit return i.e. with "return" keyword
// }


// const addTwo = (num1,num2) => num1 + num2         // Implicit return
// const addTwo = (num1 , num2) => (num1+num2)        

const addTwo = (num1,num2) => ({userName: "hitesh"})       // Paranthesis are used for implicit return of objects


console.log(addTwo(4,5))


// const myArray = [1,3,5,2,8] 
// myArray.forEach(function () {})         // classic "function" keyword
// myArray.forEach(() => {})
// myArray.forEach(() => ())
