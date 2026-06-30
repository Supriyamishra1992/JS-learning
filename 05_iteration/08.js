// Reduce
const nums = [1, 3, 5]

// const myTotal = nums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc + curval
// }, 0)

const myTotal = nums.reduce((acc, curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`)
    return acc + curval
}, 0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, curval) => acc + curval.price, 0)
console.log(totalPrice)