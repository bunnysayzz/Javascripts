const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
    const stream = fs.createWriteStream("stream.txt");
    stream.write("Hello Azhar")