const score = 200
console.log(score) 

const balance = new Number(300)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2)) // fixe the value after decimal

const anotherNumber = 123.789
console.log(anotherNumber.toPrecision(3)) // presice the value before decimal.
// beware of using, you must know the number of digits before decimal.

const nextNumber = 100000000
console.log(nextNumber.toLocaleString('en-IN')) // if not define the locale 
// it will default take US standard.

//*******************Maths*******************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4, 3, 6, 7))
console.log(Math.max(4, 3, 6, 7))
console.log(Math.random()) // between 0 & 1
console.log((Math.random() * 10) + 1)

const min = 11
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
