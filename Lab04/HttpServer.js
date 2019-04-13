//Import the http module from the core libraries
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello '+data+' World</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});