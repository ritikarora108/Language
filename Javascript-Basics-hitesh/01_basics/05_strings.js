const name="Ritik"
//console.log(name)
const repoCount=50

// console.log(name + repoCount + " Value")   // Outdated Syntax


// Modern Way :  String Interpolation
//console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`)
const gameName = new String('Contra')
// console.log(gameName)
// console.log(gameName[0]) // Key - value pair
// console.log(gameName.__proto__)   
 // => gives {} , we can access the methods with or without this

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName)
// console.log(gameName.charAt([3]))
// console.log(gameName.indexOf('r'))

const game="Hitesh-hc"
const newString = game.substring(0,4)      // (start,end) , end is exclusive  ( don't take it as length in c++)
//console.log(newString)

const anotherString  = game.slice(-8,4);   // (start,end) , end is exclusive
//console.log(anotherString)

const negInSubstr= game.substring(-6,8);
//console.log(negInSubstr)             // doesn't follow negatives, just start from idx 0


const newStringOne="      Ritik      Arora.          I am a developer    "
// console.log(newStringOne)
// console.log(newStringOne.trim()) // remove leading and trailing spaces

let url= "https://hitesh.com//hitesh%20choudhary"
newUrl=url.replace('%20','-')
console.log(newUrl)

console.log(url.includes('hitesh'))
console.log(url.includes('Coder'))

console.log("hello-I-am_travelling-to_BLR_this-summer".split('-'))
// [ 'hello', 'I', 'am_travelling', 'to_BLR_this', 'summer' ]

console.log("hello-I-am_travelling-to_BLR_this-summer".split('-',2))
// [ 'hello', 'I' ]
