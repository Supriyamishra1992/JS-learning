// Foor Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is perfect odd number")
    }
    console.log(element)
}

for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + "=" + (i*j))

    } 
}

const myArray = ['supriya', 'riya', 'priya']

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    
}

// break
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 number detected");
        break;
    }
    //console.log(`value of i is ${i}`)
}

// continue
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 number detected");
        continue;
    }
    console.log(`value of i is ${i}`)
}