const http = require("http");

const server = http.createServer((req, res) => {
  //   if (req.url === "/home" && req.method === "GET") {
  //     res.write("Welcome to Home Page");
  //     res.end();
  //   } else if (req.url === "/cart") {
  //     res.write("Welcome to Cart Page");
  //     res.end();
  //   }
  //   else{
  //     res.write('404 page not found');
  //     res.end()
  //   }

  //FIXME:

  if (req.url === "/") {
    res.write("Hello");
    res.end();
  }
  else if(req.url==="/reports"){
    res.write("Here are the reports")
    res.end();
  }
  else if (req.url==="/data"){
    res.end("Data..................")
  }
  else{
    res.write("INvalid End Point")
    res.end()
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
