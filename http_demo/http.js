// 简单的http server
// via url: http://localhost:3000/
const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("req: ", req);
    console.log("request method: ", req.method);
    console.log("request url: ", req.url);
    console.log("request headers: ", req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("hello nodejs");
});

server.listen(port, hostname, () => {
    console.log(`server running at:${hostname}:${port}`);
});