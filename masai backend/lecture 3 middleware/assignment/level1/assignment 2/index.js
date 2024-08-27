const express = require("express");
const app = express();
const morgan = require("morgan");
var fs = require("fs");
var path = require("path");
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "src", "access.log"),
  { flags: "a" }
);

app.use(
  morgan(
    function (tokens, req, res) {
      return [
        `method:${tokens.method(req, res)}`,
        `status:${tokens.status(req, res)}`,
        `res:${tokens.res(req, res, "content-length")}`,
        `response-time:${tokens["response-time"](req, res)}ms`,
        `date:${tokens.date(req, res)}`,
        `http-version:${tokens["http-version"](req, res)}`,
        `url:${tokens.url(req, res)}`,
        "\n",
      ].join(" ");
    },
    { stream: accessLogStream }
  )
);
app.use(express.json());

//GET Requests
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the homepage!");
});

app.get("/get-users", (req, res) => {
  res.status(200).send("users retrieved successfully");
});

// POST Requests
app.post("/add-user", (req, res) => {
  res.status(201).send("success message");
});

// PUT Requests
app.put("/user/:id", (req, res) => {
  res.status(201).send("message indicating successful update");
});

// DELETE Requests
app.delete("/user/:id", (req, res) => {
  res.send("message indicating successful deletion");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
