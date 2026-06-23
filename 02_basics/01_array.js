// array - resizable
// contain mixed type
// zero based indexing
// array create a shallow copy

const myArray = [1, 2, 3, 4, 5]
const myArray1 = ["supriya", "rishav", "titiksha"]
const myArray2 = new Array(1, 2, 3, 4)

//console.log(myArray[1])

// Array methods.
myArray.push(6)
myArray.push(7)
myArray.pop()
//console.log(myArray)

myArray.unshift(12) // add on 0th index. not efficient 
// becuase intally all indexes will shift.
//console.log(myArray)

myArray.shift()
//console.log(myArray)

// console.log(myArray.includes(1))
// console.log(myArray.indexOf(13)) // -ve value if index doesn't exist 
// else give value on that index.

let myNewArray = myArray.join() // convert array to string.
//console.log(myNewArray)

// slice & splice
let myArr = new Array(11, 12, 13, 14, 15, 16)
console.log('A: ', myArr)

let myArr1 = myArr.slice(1,4) // print the 
console.log("B: ", myArr)
console.log(myArr1)

let myArr2= myArr.splice(1,4)
console.log("c: ", myArr)
console.log(myArr2)
