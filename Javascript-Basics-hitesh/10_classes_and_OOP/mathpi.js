// console.log(Math.PI)
// Math.PI = 3
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("code fatt gya")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, 'name', {
    
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

console.log(chai)

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`Key is : ${key} and Value is : ${value}`)
    }
    
}


// for (const key in chai) {
//     console.log(`Key is :${key} and Value is: ${chai[key]}`)
// }



