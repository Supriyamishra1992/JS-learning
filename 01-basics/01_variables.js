const accountId = 345667777
let accountEmail = "supriya@gmail.com"
var accountName = "supriya"
accountCity ="kolkata"
let accountState

// accountId = 2344 // not allowed
accountEmail = "supriya@h.c"
accountName = "mishra"
accountCity = "bangalore"

/*
prefer not to use var
because of functional and blockquote scope
*/

console.log(accountId)
console.log(accountEmail)
console.log(accountName);
console.log(accountCity);
console.table([accountId, accountEmail, accountName, accountCity, accountState])

