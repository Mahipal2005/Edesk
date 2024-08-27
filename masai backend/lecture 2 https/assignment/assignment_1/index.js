const express = require("express");
const fs = require("fs");
const server = express();
server.use(express.json());

server.get("/display", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

server.post("/add-data", (req, res) => {
  let data = req.body;
  let fileData = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(fileData);
  parsedData.todos.push(data);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("data added successfully");
});
server.put("/update", (req, res) => {
  let fileData = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(fileData);
  parsedData.todos.forEach((ele, i) => {
    if (ele.id % 2 == 0 && ele.status == false) {
      parsedData.todos[i].status = true;
    }
  });
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("data updated successfully");
});

server.delete("/delete", (req, res) => {
  let fileData = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(fileData);
  parsedData.todos = parsedData.todos.filter((todo) => todo.status !== true);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("data deleted successfully");
});
server.listen(5000, () => console.log("server running on port 5000"));
