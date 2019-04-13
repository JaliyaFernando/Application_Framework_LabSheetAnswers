const fs = require('fs');

//Path to the source
const fileName =__dirname +'/test.txt';
//Path to destination
const outFileName = __dirname +'/test-copy.txt';

//Create read stream from the source file
const readStream = fs.createReadStream(fileName);
//Create write stream from the destination file
const writeStream = fs.createWriteStream(outFileName);

//Pipe the read stream to write stream
readStream.pipe(writeStream);

//Read the stream
readStream.on('data', data => {
    console.log(data.toString());
});