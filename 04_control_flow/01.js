// if
// condition: >, <, >=, <=, ==, !=, ===, !==
const isUserLoggedIn = true
if (isUserLoggedIn) {
 console.log("user logged in")
}
else{
   console.log("user not logged in") 
}

const score = 40
if (score > 50) {
    let power = "fly";
    console.log(`score is ${power}`)
}
console.log(`score is ${power}`) // power will not accessible, it is out of scope
// if we declare it var than it can be accessibkle which is wrong

// implicit condition

//if (score > 50) console.log("helllo"),
//console.log("hiii"); --- not readable not recommended

const balance = 400
if (balance < 500) {
    console.log(`1 balance is ${balance}`)
}
else if (balance < 750) {
    console.log(`2 balance is ${balance}`)
}
else {
    console.log(`3 balance is ${balance}`)
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}

const userLoggedGoggle = true
const userLoggedEmail = false

if (userLoggedGoggle || userLoggedEmail) {
    console.log("user logged in")
}