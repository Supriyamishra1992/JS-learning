const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flas"]

//marvel_heros.push(dc_heros) // push add the dc at 4 index as array.
//push on existing array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) 

const all_heros = marvel_heros.concat(dc_heros)
// create a new array with concat one.
//console.log(all_heros)

// spread can be used instead of concat
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

const another_arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 3]]]
const another_real_arr = another_arr.flat(Infinity) // define depth, infinity not recommended.
//console.log(another_real_arr)

// console.log(Array.isArray("supriya Mishra"))
// console.log(Array.from("supriya Mishra"))
// console.log(Array.from({name: "supriya"})) // intresting

let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2))
