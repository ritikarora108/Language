// let myName = "hitesh     "
// let myChannel = "learn js      "
// console.log(myName.length)

// console.log(myName.trueLength())

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function () {
    console.log("hitesh is present in all objects")
}



Array.prototype.heyHitesh = function () {
    console.log("Hitesh says Hello")
}
// Object.hitesh()
// heroPower.hitesh()
// myHero.hitesh()
// myHero.heyHitesh();



// inheritance

const user = {
    username: "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo: true,
    
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

TeachingSupport.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);



let anotherUserName="     chai pe charcha       "

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()


"  ritik  ".trueLength()