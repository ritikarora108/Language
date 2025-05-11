const myObject = {
    js : "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// forin
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key])
}

// const map =new Map()
// map.set('IN','INDIA')
// map.set('USA','United States of America')
// map.set('FR','France')



// for (const key in map) {       // -> Map can't be iterated using forin loop
//     console.log(key)           // doesn't print anything
// }