const marvelHeros = ["spiderman","thor" , "ironman"];
const dcHeros= ["batman", "superman", "flash"]

// //marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// //console.log(marvelHeros[3][1])

// console.log(marvelHeros.concat(dcHeros))
// console.log(marvelHeros)

const all_new_heros = [...marvelHeros,...dcHeros]  // spread
//console.log(all_new_heros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_array = anotherArray.flat(Infinity)
//console.log(real_array)


console.log(Array.isArray("Ritik"))
console.log(Array.from("Ritik Arora"))
console.log(Array.from({name:"Ritik"}))      // interesting []


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))