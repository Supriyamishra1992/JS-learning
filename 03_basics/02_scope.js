let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a) // not accessible outside function scope
// console.log(b) // not accessible outside function scope
// console.log(c) // var value accessible outside the function, it doesn't obey scope.

let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
}


addOne(5)

function addOne(num) {
    return num + 1
}

addTwo(5) // this will trow error because if we call function as expression
// it can't call before the function declartion.
const addTwo= function(num) {
    return num + 2
}



