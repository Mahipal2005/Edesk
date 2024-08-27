const express =require("express");
const fs=require("fs")

const server = express();
const PORT = 3000;

server.use(express.json())//FIXME:this will be explor in next secction

server.get("/home", (req, res) => {
    res.send("Welcome to Home Page");
})
server.get("/user-data", (req, res) => {
    const data=fs.readFileSync('./db.json',"utf-8")
    res.send(data);
})
server.post("/add-data", (req, res) => {
    let incomingdata=req.body
    console.log("icome",incomingdata)
    const userData=fs.readFileSync('./db.json',"utf-8")
    console.log("userdata",userData);
    parsedData=JSON.parse(userData)
    console.log("parseddata",parsedData);
    parsedData.data.push(incomingdata)
    console.log("old or new",parsedData);
    fs.writeFileSync('./db.json',JSON.stringify(parsedData))
    res.send(`Data recieved successfully  ${parsedData}`);
})
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
}) 