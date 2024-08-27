const express=require('express')
const GlassModel=require('../models/glass.model')
const server=express.Router()
server.use(express.json())
server.post("/create-glass", async (req, res) => {
  const { color, material, size, brand } = req.body;
  try {
    const glass = new GlassModel({
      color,
      material,
      size,
      brand,
    });
    await glass.save();
    res.send("Glass created successfully");
  } catch (error) {
    res.send("Glass not created", error);
  }
});

server.get("/get-glass", async (req, res) => {
  try {
    const glass = await GlassModel.find();
    res
      .status(200)
      .json({ message: "glass fetched sucessfully", glass: glass });
  } catch (error) {
    res.status(404).send("Glass not found", error);
  }
});
server.patch("/update-glass/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGlass = await GlassModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.send("Glass updated successfully");
  } catch (error) {
    res.send("Glass not updated", error);
  }
});

server.delete("/delete-glass/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGlass = await GlassModel.findByIdAndDelete(id);
    if (deletedGlass) {
      res.send("Glass deleted successfully");
    } else {
      res.status(404).send("Glass not found");
    }
  } catch (error) {
    res.status(500).send(`Glass not deleted: ${error.message}`);
  }
});

module.exports=server;