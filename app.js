const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }

    const server = http.createServer(function(req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    })
});