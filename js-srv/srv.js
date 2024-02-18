const http = require('http');

const PORT = 80;

const srv = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<h1>Hello world!</h1>');
    res.end();
});


srv.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

