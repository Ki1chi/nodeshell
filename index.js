const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {
    let q = url.parse(req.url, true).pathname;
    let fileName = `.${q}`;
    fs.readFile(fileName, 'utf8', (err,data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 not found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        res.end();
    })
}).listen(8080);