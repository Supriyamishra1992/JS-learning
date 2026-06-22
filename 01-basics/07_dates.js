let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())

//let newdate = new Date(2026, 0, 15, 5, 3, 30)
//let newdate = new Date("2026-01-23")
let newdate = new Date("01-11-2026")
//let newdate = new Date("01-2026-03") // Invalid date. only dd-mm-yy & yy-mm-dd valid
//console.log(newdate.toLocaleString())

let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(newdate.getTime());
console.log(newdate.getTime())

console.log(Math.floor(newdate.getTime()/1000))

// Date is object and there are many prefecturs avaialble for it. 
let newdate1 = new Date()
console.log(newdate1.getDate())
console.log(newdate1.getDay())

// locatedate is very important function. we can pass multiple arguments in it.
console.log(newdate1.toLocaleString('default'))

