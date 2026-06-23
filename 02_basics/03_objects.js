// signlton
// Object.create() // through constructor method

// object litral
const mySym = Symbol("mykey1")
const JsUser = {
    [mySym]: "key1",
    name: "Supriya",
    "full name": "Supriya mishra",
    age: 35,
    email: "supriya@g.c",
    location: "kolkata",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "supriya.kumari@g.c"
//Object.freeze(JsUser) // object will freeze so no new changes will refelect.
JsUser.email = "supriya.kumari123@g.c"
//console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())