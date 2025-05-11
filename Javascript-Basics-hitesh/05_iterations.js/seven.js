const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map( (num) => num+10 )
// console.log(newNumbers)


// const nums = []
// myNumbers.forEach( (num) =>{
//     nums.push(num+10)
// })
// console.log(nums)



// Chaining   ->  step by step array is passed to next map/filter
const values = myNumbers.                             //  [1,2,3,4,5,6,7,8,9,10]
                        map( (num)=> num*10 ).        //  [10,20,30,40,50,60,70,80,90,100]
                        map( (num)=> num+1 ).         //  [11,21,31,41,51,61,71,81,91,101]
                        filter( (num) => num>=40)     //  [41,51,61,71,81,91,101]

console.log(values)