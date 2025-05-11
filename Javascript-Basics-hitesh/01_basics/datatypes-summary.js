// Primitive vs Non-Primitive (Reference)

const score=100  // ( JS is a Dynamically Typed Language)
const scoreValue=100.3
const isLoggedIn= false
const outsideTemp = null
let user=undefined

const id=Symbol('123')
const secId=Symbol('123')

// console.log(id)
// console.log(secId)
// console.log(id === secId)  // false
// console.log(typeof id)

const bigNumber = 450759455059385873447494869n;  // this n converts this to BigInt
// console.log(bigNumber);
// console.log(typeof bigNumber);

/*
    Primitive:->       ## Call by value
    7 types: String, Boolean, Number, null , undefined, Symbol , BigInt

    Reference(Non-Primitive) :      ## Call by reference
    Array, Objects, Functions
*/

const heros= ["shaktiman","naagraj","doga"]
//console.log(heros)
//console.table(heros);

let myObj={
    name:"Ritik",
    age:19,
    gender:"male"
}
//console.log(myObj)


const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof(heros))
// console.log(typeof myObj)
// console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack Memory (Primitive) , Heap Memory (Reference/ Non-primitive)


let myYoutubeChannelName="MrBeast"
let anotherName=myYoutubeChannelName                 // Stack Memory
anotherName="Crazy" 
console.log(anotherName)
console.log(myYoutubeChannelName);

let agent1={
    email:"ritik@google.com",                    // agent1 naam ka variable: stack memory me
    age:19,                                      // or ye sab {} => heap memory me
    marks:100,
    upi:"user@ybl"
}
console.log(agent1)
let agent2=agent1                   
agent2.age=20
agent2.marks=95
console.log(agent1)
console.log(agent2)