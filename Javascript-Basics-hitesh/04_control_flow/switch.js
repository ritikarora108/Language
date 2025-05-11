// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default: 
        console.log('Enter a valid month');
        break;
}

// If the break statement is not present in the matched case, it will execute below cases without matching
// Example:

const me=2
switch(me){
    case 1:
        console.log("I am one")
    case 2:
        console.log("I am two")
    default:
        console.log("I am >=3")
}