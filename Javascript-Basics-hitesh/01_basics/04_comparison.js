// console.log(2>1)
// console.log(5<=5)
// console.log(true==1) // true
// console.log(null=="")// false

// console.log("2">1)
// console.log("02">1)          //  Converts string to number
// console.log(1>"2")
// console.log(1>"02")


// console.log(null>0)              
// console.log(null == 0)
// console.log(null>=0) 

/* 
The reason is that an eqaulity check == and comparisons < > <= >= work differently
Comparison convert null to a number, treating it as 0.
that's why null>=0 is true and null>0 is false;
*/



// Every comparison of undefined and 0 will result out to FALSE
// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<0)
// console.log(undefined<=0)


/// Strict check === (datype as val as values)
console.log("2"==2)
console.log("2"===2)

