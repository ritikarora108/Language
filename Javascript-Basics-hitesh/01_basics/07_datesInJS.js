// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())                // 1
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())      
// console.log(myDate.toLocaleString())          // 2
// console.log(myDate.toDateString())            // 3


// console.log(typeof myDate)



//let myCreatedDate = new Date(2023,0,23,5,3)       // months start from 0 in JS
//let myCreatedDate = new Date("2023-01-22")
let myCreatedDate = new Date("1-14-2023") // mm-dd-yyyy
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())  // index based
console.log(newDate.getDay())    // this gives Sunday-Saturday (0-6)


console.log(newDate.toLocaleString('default',{
    weekday : "long"
}))