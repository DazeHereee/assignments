// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function reading(){
    fs.readFile("a.txt", "utf-8" , (err,data)=>{
    if(err) throw err;
    console.log(data);
})
}

reading();

let sum = 0;

for(let i =1; i <= 10000000; i++){
    sum += i;
}
console.log(sum);

