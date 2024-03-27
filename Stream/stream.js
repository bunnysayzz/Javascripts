const http = require('http');
const fs = require('fs');

// Create a WriteStream to write data to stream.txt
const ws = fs.createWriteStream("stream.txt");

// Write data to the WriteStream
ws.write("Hello Azhar");

// End the WriteStream
ws.end();

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Create a ReadStream to read data from stream.txt
    const rs = fs.createReadStream("stream.txt", { encoding: "utf-8", highWaterMark: 64 });

    // Pipe the ReadStream to the response
    rs.pipe(res);

    // Handle 'error' event of the ReadStream
    rs.on('error', (err) => {
        console.error('Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading file: ' + err.message);
    });
});

// Listen for incoming requests on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
