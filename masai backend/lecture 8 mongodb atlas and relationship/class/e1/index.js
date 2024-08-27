const express = require("express");
const connection = require("./conig/db");
const glassRouter = require("./routes/glass.route");
const { PersonModel, PassportModel } = require("./models/personPassport.model");
const server = express();
const PORT = 8000;

server.use(express.json());
server.use("/glass", glassRouter);
server.get("/personPassport", async (req, res) => {
  const person = new PersonModel({
    name: "John Doe",
    age: 30,
    city: "New York",
    email: "john.doe@example.com",
  });
  await person.save();

  const personPassport = new PassportModel({
    number: "ABC123",
    expiry: "2025-12-31",
    passportNumber: 123456789,
    PersonId: person._id,
  });
  await personPassport.save();
  res.send("Person and Passport created successfully");
});
server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running on port ${PORT} and connected to database`);
  } catch (error) {
    console.log("Failed to connect to the database", error.message);
  }
});
