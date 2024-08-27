const express = require("express");
const fs = require("fs");
let PORT = 3001;
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading file");
    } else {
      res.send(data);
    }
  });
});

server.get("/about", (req, res) => {
  res.send("about page");
});

server.get("/contact", (req, res) => {
  let fileData = fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
  });

server.post("/add-data", (req, res) => {
  let data = req.body;
  let fileData = fs.readFileSync("./db.json", "utf-8")
  let parsedData = JSON.parse(fileData);
  parsedData.data.push(data);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("data added successfully");
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
