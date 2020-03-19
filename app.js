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

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Connected with MySql database');
});

// index.html load
fs.readFile('./index.html', function (error, html) {
    if (error) {
        throw error;
    }

    const server = http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    })

});