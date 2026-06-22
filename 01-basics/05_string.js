const name = "supriya"
const score = 50

// console.log(name + score + "value") // outdated skip to use
// console.log(`my name is ${name} and my score is ${score}`);

// define string in another way.
const strval = new String("  supriya");
//console.log(strval) // if console in browser we can see string is an object.
// value is key:value form 0=>'s' 1=>'u'....
// also we have multiple functions (prototype) available for string.
// we can apply those functions on this string.

// console.log(strval[0]);
// console.log(strval.__proto__);

// String methods.
// console.log(strval.toUpperCase());
// console.log(strval.charAt(4));
// console.log(strval.indexOf('p'));

const newString = strval.substring(0,4)
//console.log(newString)

const anotherString = strval.slice(-6,3)
// console.log(anotherString);

// console.log(strval.trim())

// console.log(strval.replace('su', '12'))

// console.log(strval.anchor())
// console.log(strval.at(2))
// console.log(strval.big())
// console.log(strval.blink())
// console.log(strval.bold())
// console.log(strval.charCodeAt(2))
// console.log(strval.concat(" ", "mishra"))

const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";
//console.log(str.match(regexp));
const stranother = [...str.matchAll(regexp)]
//console.log(stranother[1]);

//console.log(strval.padEnd(15,"*"))
const last4Digits = strval.slice(-4);
//console.log(last4Digits.padStart(strval.length,"*"))

//console.log(`i am ${strval.repeat(3)}`);

console.log(strval.substring(1,5));
