const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/home" && req.method === "GET") {
        res.write('Welcome to Home Page');
        res.end()
    }
    else if(req.url === "/cart") {
        res.write('Welcome to Cart Page');
        res.end()
    }
    //create an endpoint called '/user' and send response as 'Welcome to user page'
    else if(req.url === "/user") {
        res.write('Welcome to user page');
        res.end()
    }
    else {
        res.write('404 page not found');
        res.end()
    }
});

server.listen(8080, () => {
    console.log("server running on port 8080");
}); 