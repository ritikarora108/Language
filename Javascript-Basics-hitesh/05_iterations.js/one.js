// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
 console.log("Printing 1 to 10:")
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }
let result=''
for(let index=1;index<=10;index++)
{
    result+= index+' ';
}
console.log(result)


// for(let i=0;i<=10;i++)
// {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element)
// }


// for(let i=1;i<=5;i++)
// {
//     console.log(`Outer loop value : ${i}`);
//     for(let j=1;j<=10;j++){
//         //console.log(`Inner loop value : ${j}`);

//         console.log(i,"*",j," = ",i*j);
//     }
//     console.log("*************************************");
// }


// const arr = ["flash", "batman" , "superman"]
// console.log("Length of array : " + arr.length)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// break and continue

// for(let i=1;i<=20;i++){
//     if(i==5) {
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`Value of i is : ${i}`)
// }

for(let i=1;i<=20;i++){
    if(i==5) {
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is : ${i}`)
}