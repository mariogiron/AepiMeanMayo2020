const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hola Mundo Server!');
});

server.listen(3000);