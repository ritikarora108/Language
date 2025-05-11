let userEmail = "h@hitesh.ai"
userEmail=""   // Empty string is treated as false
userEmail=[] // Empty array is treated as true

if(userEmail){
    console.log(`UserEmail is: ${userEmail}`)
} else{
    console.log("Don't have a userEmail")
}


/* Falsy value:
    false, 0 , -0 , BigInt 0n, "", null , undefined, NaN
*/
/*
    Any value other than false values are Truthy values
    Some surprising truthy values:
    "0" , "false" , " ", [], {} , function(){}
*/

if(userEmail.length === 0){
    console.log("Array is empty")
}

let myObj = {}
if(Object.keys(myObj).length === 0){
    console.log("Object is Empty")
}
// console.log(1/0) -> Infinity

// Nullish Coalescing Operator (??) : undefined ?? null

let val1;
val1 = 5 ?? 10
console.log(val1)

let val2= null ?? 10       // used for typeSafety
// let val2 =undefined ?? 15



console.log(val2)


const chai=() =>{
    console.log("chai");
}

let val3 = chai() ?? null
console.log(val3)

// ?? works as :
// x ?? y -> if x and y are number, choose x
//        -> if either x or y ,but not both is number , choose number
//        -> if none of them is number, choose y


console.log(null ?? 10 ?? 20)


//  Ternary operator
// condition ? true : false;

const isRaining = true
isRaining ? console.log("Yes") : console.log("No")
