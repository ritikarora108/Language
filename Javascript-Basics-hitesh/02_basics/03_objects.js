// Objects : -> Literals (~singleton~ (nhi hota))  and Constructor  (singleton -> Object.create)

const mySym= Symbol("key1");

// Object Literals
const jsUser = {
    name:"Ritik",
    "full name":"Ritik Arora",
     //mySym: "myValue1",              //Not a correct way to use Symbol
    [mySym]:"myVal1",                 // Correct using  []
    age:19,
    location:"Jaipur",
    email:"ritik@paypal.com",
    isLoggedIn:true,
    lastLogInDays:["Mon","Sat"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
//console.log(jsUser.mySym)          // This is printing right , but actually mySym is not used as symbol
//console.log(jsUser)


// Correct way: object={ [mySym]:}  console.log(obj[mySym])
//console.log(jsUser[mySym])

jsUser.email="Ritik@google.com"
console.log(jsUser["email"])

// Object.freeze(jsUser)              // freezed,  now the changes won't propogate
jsUser.email="Ritik@microsoft.com"
console.log(jsUser.email)

console.log(jsUser)


// As the jsUser was freezed, first comment it to use this function
jsUser.greetings = function(){
    console.log("Hello JS User");
}
//console.log(jsUser.greetings)  // [Function(anonymous)]
console.log(jsUser.greetings())

jsUser.greetingsTwo = function()
{
    console.log(`Hello Js user, ${this["full name"]}`)  // Backticks, string interpolation
}
console.log(jsUser.greetingsTwo())
