const myAppUser = {}

myAppUser.name = "supriya"
myAppUser.email = "supriya@g.c"
myAppUser.isLoggedIn = false

//console.log(myAppUser)

const regularUser = {
    email: "supriya@gg.cc",
    fullname: {
        userfullname: {
            firstname: "priya",
            lastname: "kumari"
        }
    }
}

// console.log(regularUser.email)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

const obj4 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3}
//console.log(obj5)


// console.log(Object.keys(myAppUser))
// console.log(Object.values(myAppUser))
// console.log(Object.entries(myAppUser))

//console.log(myAppUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "javascript",
    price: 999,
    courseinstructor: "supriya"
}

const {courseinstructor: instructor} = course
console.log(instructor)