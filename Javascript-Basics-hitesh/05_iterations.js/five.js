const coding = ["js","java","ruby","python","cpp"]

// coding.forEach( function (item){
//     console.log(item)
// })                                  // Callback Function : no name


// coding.forEach( (val)=>{
//     console.log(val)
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // just pass the reference

// coding.forEach( (item,index,arrayList)=>{
//     console.log(index,item,arrayList)
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
