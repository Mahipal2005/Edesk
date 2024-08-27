const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html"); //Header to s 
    res.end("<h1>Hello Guys!!</h1>")
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
