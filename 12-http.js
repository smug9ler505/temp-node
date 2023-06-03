const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
        return;
    }

    if (req.url === '/about') {
        res.end(`<h1>Here is our short history</h1>`);
        return;
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>Couldn't find the page you are after</p>
    <a href="/">home</a>
    `);
});

server.listen(5000);