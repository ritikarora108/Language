// Global scope concept is different for node and Windows

var c=200

let a=300
if(true){
    let a = 10
    const b= 20
    var c = 30
    // c=30

    console.log(`Inner : ${a}`)
}

console.log(a)     
// console.log(b)     // Error : scope
// console.log(c)        // Ans:30   -> var doesn't care about scope



function one()
{
    const userName="hitesh"
    
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)          // Error

    //two()
}

one()


if (true) {
    const userName = "hitesh"
    if(userName === "hitesh"){
        const website = " youtube"
        console.log(userName + website)
    }
    // console.log(website)
}


// console.log(userName)


// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++


console.log(addOne(5))   // function can be used before declaration
function addOne(num)              // Function
{
    return num+1
}

// console.log(addTwo(5)) // Fucntion can't be used before declaration 

const addTwo = function(num){    // Function , expression
    return num + 2 
}


console.log(addTwo(5))
