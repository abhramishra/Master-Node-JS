const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
    res.setHeader('Content-Type', 'application/text')
    res.write('<h1>Hello</h1>')
    res.end()
    // process.exit(); // it will exit from event loop
});

server.listen(3000, () => {
    console.log('listening on port')
});