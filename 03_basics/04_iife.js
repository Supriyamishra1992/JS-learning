// Immediately Invoked Function Expression.

//Normal function, need to invoke explicitly.
function chai() {
console.log(`DB Connect`)
};

chai();

// Named IIFE function
(function chaiOne(){
    console.log("DB connect one")
})();

// Normal IIFE
(() => {
    console.log("Normal IIFE")
})();

// Normal IIFE with argument
((name) => {
    console.log(`my iife function with ${name}`)
})("Supriya")

// If there are more than one IIFE function than we must have use semicolon.
// IIFE doesnot automatically understand the function termination.