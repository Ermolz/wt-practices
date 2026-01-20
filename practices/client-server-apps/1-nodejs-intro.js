console.log('Hello from Node.js!');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Current directory:', __dirname);

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Привіт від Node.js сервера!');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

