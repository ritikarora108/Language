const score= 400
const balance = new Number(100)
// console.log(typeof score)
// console.log(typeof balance) // object: number type

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3))
//console.log(otherNumber.toPrecision(2))

const num=23.45
console.log(num.toPrecision(3))  // 23.5
console.log(num.toPrecision(2)) // 24


const chk=1123.4545
//console.log(chk.toPrecision(3))       // 1.12e+3

const hundreds=100000000
//console.log(hundreds.toLocaleString('en-IN'))

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)


const m=56757
// console.log(Number.isNaN(m))           // only Number.isNaN(NaN) => true  ,,    null & undefined => false


// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

//console.log(Math)
//const num=Math.PI
// console.log(num)
// console.log(Math.abs(-45))
// console.log(Math.round(5.5))
// console.log(Math.floor(7.99))
// console.log(Math.ceil(8.01))
// console.log(Math.min(845634,5,456,45,23))

//

while(Math.floor(Math.random()*10)+1!=5) // it will generate numbers in the range [1,10]
{
    console.log("Code in JS")

}

const min=10
const max=20
// Math.random gives a number between 0 and 1
// Math.floor(Math.random()*(max-min+1)) + min  =>  to generate a random number in the range [min,max]
