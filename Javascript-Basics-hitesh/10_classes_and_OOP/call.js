function setUserName(username) {
    // Complex db calls
    console.log("I am here to set username")
    console.log(this)
    this.username = username
}

function createUser(username, email, password)
{
    setUserName.call(this,username)
    this.email = email
    this.password = password
    
}


const chai = new createUser("chai", "chai@faang.com", 123)
console.log(chai)