const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Contenty-type", "text/html");
    res.end(`<h1> Hello, This is my first server with HTML!</h1> <p>We need to reload the server for change to happen`);
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})