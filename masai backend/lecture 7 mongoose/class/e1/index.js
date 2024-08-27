const express = require("express");
const connection = require('./conig/db');
const glassRouter = require("./routes/glass.route");
const server = express();
const PORT = 8000;

server.use(express.json());
server.use('/glass', glassRouter);
server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running on port ${PORT} and connected to database`);
  } catch (error) {
    console.log("Failed to connect to the database", error.message);
  }
});



