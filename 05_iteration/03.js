// for of
// ["", "", ""]
// [{}, {}, {}]

const myArray = [1, 2, 3, 4, 5]
for (const num of myArray) {
    //console.log(`value of num is ${num}`)
}

const greeting = "Hello World";
for (const value of greeting) {
    //console.log(`value of value is ${value}`)
}

// Maps
const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United state of america')
map.set('Fr', 'France')
map.set('IN', 'India') // duplicate value will not print. it ignore that one

//console.log(map);

for (const [key, value] of map) {
    console.log(`${key} := ${value}`);
}

// Objects : object is not iterable so we can't access with for of.
const obj = {
    name: "supriya",
    age: 35
}
for (const [key, value] of obj) {
    console.log(`${key} := ${value}`);
}