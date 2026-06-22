// primitive : call by value
// 7 types: String, Number, Boolean, null, undefined, symbol (to make a value unique), BigInt

const score = 23
const scoreValue = 23.67
const IsloggedIn = false
const outsideTemprature = null
let userEmail

const id = Symbol("123")
const idAnother = Symbol("123")
console.log(id == idAnother)

//const bigNumber = 214234234213423n


// non-primitive : call by refrence
// Array, Objects, Functions

const heros = ["shaktiman", "nagraaj", "dago"]
let myObj = {
    name: "supriya",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}




// *********************** memory Type *************************
//Stack(primitive data type)           Heap(non-primitive data type)
let myyoutubechannel = "supriyamaurya"

let aonthervalue = myyoutubechannel;
aonthervalue = "mykitchen"

console.log(myyoutubechannel)
console.log(aonthervalue)


let userOne = {
    name: "Supriya",
    age: 35
}

let usertwo = userOne

usertwo.name = "sweety"

console.log(userOne.name)
console.log(usertwo.name)