const coding = ["js", "java", "c++", "ruby"]

const values = coding.forEach((item) => {
    //console.log(item)
    return item;
})

console.log(values) // it will print undefined, because foreach never return value.

// Array filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// user filter without {} no need to explicit return 
// const newNums = nums.filter((num) => num > 4)
// console.log(newNums)

// user filter with {} need to explicit return 
// const newNums = nums.filter((num) => {
//    return num > 4
// })
//console.log(newNums)

// same thing achieve by foreach
// const newNums = [];
// nums.forEach((item) => {
//     if (item > 4) {
//         newNums.push(item)
//     }
// })
// console.log(newNums)

// work with filter on array on objects.
const books = [
    {titile: "Book one", genre: "Fiction", publish: 1981, edition: 2004},
    {titile: "Book two", genre: "Non-Fiction", publish: 2006, edition: 2004},
    {titile: "Book three", genre: "science", publish: 1981, edition: 2004},
    {titile: "Book four", genre: "Fiction", publish: 2000, edition: 2004},
    {titile: "Book five", genre: "Non-Fiction", publish: 1981, edition: 2004},
    {titile: "Book six", genre: "history", publish: 2022, edition: 2004},
    {titile: "Book seven", genre: "science", publish: 1981, edition: 2004},
    {titile: "Book eight", genre: "Fiction", publish: 1999, edition: 2004},
    {titile: "Book nine", genre: "science", publish: 2002, edition: 2004},
    {titile: "Book ten", genre: "history", publish: 2001, edition: 2004}
]

const userBooks = books.filter((bk) => bk.genre == 'history')
console.log(userBooks)

const userBooks1 = books.filter((bk) => bk.publish > 2000 && bk.genre == 'science')
console.log(userBooks1)