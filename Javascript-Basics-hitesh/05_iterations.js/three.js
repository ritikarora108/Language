//forof loop
// for (const iterator of object) {
    
// }

const arr =[100,200,300,400]

for (const element of arr) {
    console.log(element)
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps

const map =new Map()
map.set('IN','INDIA')
map.set('USA','United States of America')
map.set('FR','France')
// map.set('IN','India')
// console.log(map)

for (const [key,value] of map) {     // destructuring using []
    console.log(`Key is ${key} and its value is ${value}`)
}


const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

// for (const iterator of myObject) {        // object is not iterable by forof loop
//     console.log(iterator)
// }