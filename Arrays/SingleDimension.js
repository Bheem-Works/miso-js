
let number = [];

for(let i = 0; i< 10 ; i++ ) {
    let input = prompt(`Enter the number between 0 and 10 ${i+1}`);
    number[i] = Number(input); 
}
console.log("You Entered This Numbers")

for(let i = 0; i< number.length ; i++ ) {
    console.log(`numbers [${i}] = ${number[i]}`);
}


// Let's try it again tommorow; 