// Create a counter in JavaScript

// have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// should go up as time goes by in intervals of 1 second

let counter = 0;

setInterval(function() {
    counter++;
    console.log(counter);
}, 1000)