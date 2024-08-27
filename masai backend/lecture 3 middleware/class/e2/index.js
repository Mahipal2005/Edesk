const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.get("/list", (req, res) => {
  let data = fs.readFileSync("db.json", "utf-8");
  let parseData = JSON.parse(data);
  res.json({ message: "your data is display", data: parseData });
  res.end("data display sucessfully");
});
let validation = (req, res, next) => {
  if (req.body.email.endsWith("@example.com")) {
    next();
  } else {
    res.send("Invalid email, please write a correct email.");
  }
};

app.post("/signup", validation, (req, res) => {
  console.log(req.body);
  let data = fs.readFileSync("db.json", "utf-8");
  let parseData = JSON.parse(data);
  parseData.users.push(req.body);
  fs.writeFileSync("db.json", JSON.stringify(parseData));
  res.json({ message: "your data is saved", data: req.body });
  res.end("data saved successfully");
});
app.listen(3000, () => {
  console.log("server is running");
});
