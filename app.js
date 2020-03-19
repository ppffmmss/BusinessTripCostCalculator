const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'trips',
});

connection.connect((err) => {
    if (err) {
        /*console.log('Error connecting to database');
        return;*/
        throw err;
    }
    console.log('Connected with MySql database');
});

// index.html load
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