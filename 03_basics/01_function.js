// function to add two numbers
function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(3,5)
console.log(result)


function loginuserMessage(username = "sam") {
    if (!username) {
       console.log("please provide a username") 
       return
    }
    return `${username} just logged in`
}

console.log(loginuserMessage("supriya"))

// Rest operator pass in parameter
function calculateCartPrice(val1, val2, ...num) {
    return num
}

console.log(calculateCartPrice(10,20,30,400))

// pass object in parameter in a function
user = {
    username: "supriya kumari",
    age: 34
}
function handleObject(anyobject) {
    console.log(`name is ${anyobject.username} and age is ${anyobject.age}`)
}

//handleObject(user)
handleObject({
    username: "priya",
    age: 23
})

// pass array in paramater in function
const myArray = [10,100,200,500]

function handleArray(getArray) {
    return getArray[1]
}

//console.log(handleArray(myArray))
console.log(handleArray([10,100,200,300]))