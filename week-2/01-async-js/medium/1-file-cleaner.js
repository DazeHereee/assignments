// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');

function removeSpace(data) {
    const file_data = data.replace(/\s+/g, " ");
    return file_data;
}
let newData;
fs.readFile('./b.txt','utf-8',(err,data) => {
    if (err) {
        console.log(err);
    } else {
        newData =  removeSpace(data);
        console.log("newdata is ");
        console.log(newData);
        fs.writeFile('./b.txt',newData,(err,success) => {
            if (err) {
                console.log(err);
            } else {
                console.log("file Formatted");
            }
        });
    }
});