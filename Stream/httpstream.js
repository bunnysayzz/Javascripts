const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.access('example.txt', fs.constants.F_OK, (err) => {
            if (err) {
                res.end('Error: example.txt does not exist');
                return;
            }
            const rs = fs.createReadStream('example.txt', { encoding: 'utf-8' });
            const ws = fs.createWriteStream('example2.txt');
            rs.pipe(ws);
            res.end('File streamed successfully from example.txt to example2.txt');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


