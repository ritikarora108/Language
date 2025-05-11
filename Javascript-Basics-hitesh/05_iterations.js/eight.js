const myNums = [1, 2, 3, 4]

const initialValue = 0
// const overallSum = myNums.reduce( (accumulator,currentValue) => accumulator + currentValue , initialValue)

const overallSum = myNums.reduce( (acc,val) =>{
    console.log(`accumulator: ${acc} and currentValue : ${val}`)
    return acc+val
},0)                              // initialvalue is written after function ends },inVal
console.log(overallSum)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data scientist course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc,val) => acc+val.price ,0 )
console.log(totalPrice)
