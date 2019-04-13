const fs = require('fs');

//Use the system variable __dirname to set the file location
const fileName = __dirname + '/test.txt';


//Read the file using readFile asynchronous nethod
fs.readFile(fileName, (err,data) =>{
    if (err){
        console.error(err);
    }
    console.log(data.toString());
})


//Read the file synchronously
const dataSync = fs.readFileSync(fileName);
console.log(dataSync.toString());


