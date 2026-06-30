// 
const coding = ["js", "java", "c++", "ruby"]

//function
// coding.forEach(function(item){
//     console.log(item)
// })
// Arrow
// coding.forEach(element => {
//     console.log(element)
// });

// pass function as refrence in foreach.

// function printing(item) {
//     console.log(item)
// }
// coding.forEach(printing);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageFilename)
})