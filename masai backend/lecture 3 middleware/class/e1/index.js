const express = require("express");
const fs = require("fs");
const server = express();
const port = 3000;

server.use(express.json());

//TODO: Activity 1 log method and url
// const logger=(req,res,next)=>{
//     console.log(req.method,req.url)
//     const content=` THe methos is ${req.method} and the api endpoint is  ${req.url}
//                     and the time is ${new Date()} \n`
//     fs.appendFileSync("./request_log.txt",content)
//     next()
// }
// server.use(logger)


//TODO: Activity 2 
const timelogger=(req,res,next)=>{
    //time of request comming
    const reqtime=new Date().getTime();
    next()
    const restime=new Date().getTime();
    console.log(`The request took ${restime-reqtime} ms`)
    // console.log(time)
}


server.use(timelogger)
server.post("/school", (req, res) => {
  res.send("Welcome to school");
});
server.get("/home", (req, res) => {
  res.send("Welcome to home");
})
server.get("/about", (req, res) => {
  res.send("Welcome to about");
})
server.get("/cart", (req, res) => {
  res.send("Welcome to cart");
})
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
