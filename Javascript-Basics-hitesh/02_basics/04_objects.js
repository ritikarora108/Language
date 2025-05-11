//const tinderUser = new Object()            -> Singleton
const tinderUser ={}                      // -> Non-singleton

tinderUser.id = "abs@123.com"
tinderUser.name = "Baggy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "sam@email.com",
    fullName : {
        userFullName: {
            firstName: "Ritik",
            lastName: "Arora"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName)

const obj1 ={ 1:"a" , 2:"b", 3:"c"}
const obj2 = {2:"d", 4:"e", 5:"a"}
const obj4 = {5:"f", 6:"k"}

// const obj3={obj1,obj2}

// const obj3= { ...obj1,...obj2 }
// console.log(obj3)
// console.log(typeof obj3)


const obj3 = Object.assign({},obj1,obj4,obj2)
// console.log(obj3)


const users = [
    {
        email: "h@gmail.com",
        id:1
    },
    {
        email : "c@gmail.com",
        id:2
    }
]
// console.log(users)
// console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))  // Each key value pair in array (Array of arrays)

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


// +++++++++++ Object Destructuring and JSON API ++++++++++++++++++

const course = {
    courseName: "JS in Hindi",
    coursePrice: 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor :ins,coursePrice :price} = course
console.log(ins,price)


// const navbar = ({company}) => {                  // Destructuring in React

// }

// navbar(companyName = "PW")



// {                                                // Corect Syntax : JSON
//     "name": "Hitesh",
//     "courseName" : "Js in hindi",
//     "price": "free"
// }


// Example: https://api.github.com/users/ritik692
// https://randomuser.me/api/

// [
//     {},
//     {},
//     {}
// ]