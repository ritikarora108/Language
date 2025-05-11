// if (condition) {
    // code
// }

const isUserLoggedIn = true

// if( 2=="2" )
// {
//     console.log("executed")
// }

// comparison operators: <,>,<=,>=,==,!=,===(compares value and type) , !==

// const temperature = 41
// if(temperature < 50)
// {
//     console.log("less than 50");
// }
// else console.log(`temperature is greater than or equal to 50`);

// console.log("Ye to execute hoga hi !!!")

// const score =200
// if(score>100)
// {
//     const power  = "fly";
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`)   -> power is not defined (scope error)



const balance  =1000

// if(balance > 500) console.log("test"); // Implicit scope


// Is tarah se nahi likhna hai : Immature code
// if(balance > 500) console.log("Ya it executed"),
// console.log("but it is unreadable code"); // use ; in the end

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("greater than or equal to 900")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allowed to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Ya, user has been logged in")
}
