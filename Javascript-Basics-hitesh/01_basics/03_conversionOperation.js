/*
Summary:
"33" =>  33
"33abc" => NaN
null => 0
undefined => NaN
true => 1
false => 0
"ritik" => NaN
*/




// let score = "33"

// // const {score} = req.body  ( doesn't know the type of score )
// console.log(typeof score);
// //console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof(valueInNumber))      // 33 (number)


// let score="33abc"
// console.log(typeof(score))
// let valueInNumber=Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)                 // NaN ( Not a Number )


// let score=null
// console.log(typeof(score))
// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)                    //  Giving 0: can be problematic sometimes


let score=undefined
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)  // NaN


// Similarly for booleans ->  true (1)  and false (0)


let loggedIn = 1
let booleanIsLoggedIn = Boolean(loggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn)

// Empty string: Boolean("") => false
// Boolean("Ritik") => true


let someNumber=568
let stringNumber= String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber)



