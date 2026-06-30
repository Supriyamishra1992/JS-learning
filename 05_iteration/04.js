// Object
const myObj = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}
for (const key in myObj) {
    console.log(`${key} is shorcut for ${myObj[key]}`)
}

// Array
const myArray = [12, 23, 34, 54, 65]
for (const key in myArray) {
    console.log(`${key} is shorcut for ${myArray[key]}`)
}
// Map : map can't iterable
const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United state of america')
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(`${key} is shorcut for ${map[key]}`)
}