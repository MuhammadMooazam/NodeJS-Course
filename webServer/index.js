const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        res.end('Home Section');
    } else if (req.url == "/about") {
        res.end('About Section');
    } else if (req.url == "/contact") {
        res.end('Contact Section');
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 Error. Page doesn't exist.</h1>");
    }
});

server.listen(8000, "127.0.0.1"), () => {
    console.log("Listening on port 8000");
};