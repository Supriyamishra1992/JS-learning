// truthy & falsy value is assumed to be true or false.
// Example we fetch an email from DB and print it by chekcing the condition.

const email = "supriya@g.c"
if (email) {
    console.log("Got the email")
} else{
    console.log("Did n't got the email")
}

//falsy values: false, null, undefined, "", NaN, 0, -0, bigint 0n
// except that all true value ex: [], "0", "false", 'false', " ", {}, function(){}

// Check array
if(arrayval.length === 0) {

}

// check object
if(Object.keys(objval).length === 0) {

}

// Nulish coalescing operator (??) : null undefined
let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
var1 = undefined ?? 10 
var1 = null?? 10 ?? 20

// Terniary operator
// condition : true ? false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")