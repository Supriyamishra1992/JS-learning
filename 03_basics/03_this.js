const user = {
    username: "supriya",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome user`)
        //console.log(this)
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this) // empty becuae global has no context in node
// but if we execute in browser then it will show window

// function chai() {
//     let username = "supriya"
//     //console.log(this)
//     console.log(this.username) // undefined, we can't access the variable with this
// }

//chai()


// const chai = function(){
//     let username = "supriya"
//     //console.log(this)
//     console.log(this.username)
// }

// chai() // same undefined

const chai = () => {
    let username = "supriya"
    //console.log(this)
    console.log(this.username)
}

//chai()

// Arrow function : basic syntax: () => { }
// explicit return : need to write return keyword
// const addtwo = (num1, num2) => { 
//     return num1 + num2
// }


// Implicit calling arrow function
//const addtwo = (num1, num2) => num1 + num2
//const addtwo = (num1, num2) => (num1 + num2) // use parenthisis, not curly braces


// Return object: return undefined without parenthisis.
const addtwo = (num1, num2) => ({username: "hitesh"}) 

console.log(addtwo(7,8))