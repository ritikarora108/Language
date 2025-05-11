const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345" 
accountCity = "Jaipur"
let accountState;


/*
Prefer not to use var because of issue in
block scope and functional scope
*/


// accountId=2  // not allowed
// console.log(accountId);

accountEmail= "hc@hc.com"
accountPassword="21335"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
