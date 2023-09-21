var http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you looking for</p>
    <a href="/">back home page</a>
  `)
});

server.listen(8080, () => {
  //   console.log("Server listening on port : 5000.....");
});
