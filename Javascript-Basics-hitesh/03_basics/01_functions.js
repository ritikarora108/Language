function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName     // Reference
// sayMyName()   // Execution

// function addTwoNumbers(number1,number2)                   // Parameters
// {
//     console.log(number1+number2);
// }

// addTwoNumbers(3,6)                                  // Arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)       // null treated as 0

// const result = addTwoNumbers(2,6);
// This can be done only if the function is returning something

// console.log(`Result is ${result}`);     

function addTwoNumbers(num1,num2)
{
    return num1+num2                 
    console.log("Ritik")   // This action won't happen, beacuse of return
}


// console.log(addTwoNumbers(1,2))


const result=addTwoNumbers(2,6)
// console.log(`Result: ${result}`)   // String Interpolation

function loginUserMessage(userName="Unvalid Name")
{
    if(!userName)                    
    {
        console.log("Please enter a valid userName")
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Ritik"))

// console.log(loginUserMessage())       // if nothing is passed , parameter :undefined

// console.log(loginUserMessage(""))  // empty string is considered as false in boolean


function calculateCartPrice(val1,val2,...num1)                 //  ... is rest operator
{
    console.log(num1)
}

// calculateCartPrice(200,400,500,2000)

const user={
    userName: "hitesh",
    price : 199
}

function handleObject(anyObject)
{
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)

// handleObject({
//     userName:"Baggy",
//     price:2000
// })


function returnsSecondValue(currentArray)
{
    if(currentArray.length<2) 
    {
        console.log("Length is less than 2")
        return -1;
    }
    return currentArray[1];
}

console.log(returnsSecondValue([9]))
const myNewArray=[4,6,7,8];
console.log(returnsSecondValue(myNewArray))
