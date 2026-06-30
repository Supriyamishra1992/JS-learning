const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using map add 10 in all array items.
const newNums = nums.map((n) => n + 10)

//console.log(newNums)

// using foreach add 10 in all array items.
const newArr = [];
nums.forEach((item) => {
    newArr.push(item + 10)
})

//console.log(newArr)


// chaining
const newChain = nums
                    .map((num) => (num* 10))
                    .map((num) => (num+ 1))
                    .filter((num) => num >=40)
console.log(newChain)