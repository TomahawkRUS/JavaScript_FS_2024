const http = require('node:http');

const hostname = 'localhost';
const port = 8765;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nMy First Node Server\nI modified it\n...and change port by 8765');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});