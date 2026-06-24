// Execution context : JS is single threaded
/* 
1. global execution context : this(browser: window)
2.function execution context
3. eval execution context

Run into two phase
1.Memory creation phase (creation phase)
2. execution phase 

execution -> strat -> 
1. first global execution 
(this for window in browser, node and other it is different).
2. memory execution: memory get allocated; not value so 
value for each variable will be undefined and function definition will be executed.
3. function execution: actual execution will be done and return the execution 
to its main thread.
same process will be repeat for each line of code.
*/


// call stack
/*
1. global execution
2. function will go into stack and get executed and come out.
Next function will go and so on.
3. if there is nested of function, ex: a() calling b() and b() calling c()
then first a() will go into stack then b() and c(), now first c() will execute
and come out, then b() and last a(). Follow LIFO concept
*/

/*
code can run on browser => inspect => sources(after console) => new snippet (left)
=> add breakpoints => run (right click on your snnipet js file)
stack and everything can be shown there.
*/