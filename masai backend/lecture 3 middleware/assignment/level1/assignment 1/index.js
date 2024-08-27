const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

let valedation = (req, res, next) => {
  let { ID, Name, Rating, Description, Genre, Cast } = req.body;
  let isValid = true;
  let error = "";

  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    res.status(400).send(" Inavid request body Recived");
  }

  if (typeof ID !== "number") {
    isValid = false;
    error += "ID should be a number\n";
  }
  if (typeof Name !== "string") {
    isValid = false;
    error += "Name should be a string\n";
  }
  if (typeof Rating !== "number") {
    isValid = false;
    error += "Rating should be a number\n";
  }
  if (typeof Description !== "string") {
    isValid = false;
    error += "Description should be a string\n";
  }
  if (typeof Genre !== "string") {
    isValid = false;
    error += "Genre should be a string\n";
  }
  if (!Array.isArray(Cast) || Cast.every((x) => typeof x !== "string")) {
    isValid = false;
    error += "Cast should be an array of strings\n";
  }
  if (isValid) {
    next();
  } else {
    fs.writeFileSync("res.txt", `\n Error:${error}`);
    res.status(400).send("bad request. some data is incorrect.");
  }
};
app.post("/", valedation, (req, res) => {
  res.status(200).send("data received");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
