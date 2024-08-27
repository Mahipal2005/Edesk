//FIXME:TODO: in this example i use nodemon 
const http= require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end("Hello bro kya hal h")
    }
    else if(req.url==='/about'){
        res.end("About us page")
    }
    else{
        res.end("Page not found")
    }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});