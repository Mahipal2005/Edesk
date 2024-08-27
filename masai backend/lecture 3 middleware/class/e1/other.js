const express = require("express");
const server = express();
const port = 3001;
const middleware1 = (req, res, next) => {
    console.log(1)
    next();
    console.log(2)
};
const middleware2 = (req, res, next) => {
    console.log(3)
    next();
    console.log(4)
};
server.use([middleware1, middleware2]);
server.get("/school", (req, res) => {
    console.log(5);
    res.send("Welcome to school");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})