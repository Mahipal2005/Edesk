const express = require("express");
const mongoose = require("mongoose");

const port = 3000;
let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
}, { versionKey: false })
let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String
}, { versionKey: false })

let User = mongoose.model("User", userSchema);
let Product = mongoose.model("Product", productSchema);
const url="mongodb://localhost:27017/UserProduct"
const app = express();
app.use(express.json());

app.post("/Adduser", async(req, res) => {
    //  if the user already exist or not, if yes then duplicate user should not be added.
    let user = new User(req.body.user);
    let userExists = await User.findOne({email: user.email});
    if (!userExists) {
        user.save();
        res.json({message:" user added successfully",date:user});
    } else {
        res.json({message:" user already exists",date:userExists});
    }
    });

    app.get("/GetAllUsers", async (req, res) => {
        let users = await User.find({});
        res.json({message:" users fetched successfully",date:users});
    });
    
    app.put("/UpdateUser/:id", async (req, res) => {
        let user = await User.findByIdAndUpdate(req.params.id, req.body.user);
        res.json({message:" user updated successfully",date:user});
    });
    
    app.delete("/DeleteUser/:id", async (req, res) => {
        let user = await User.findByIdAndDelete(req.params.id);
        res.json({message:" user deleted successfully",date:user});
    });
app.post("/Addproduct", (req, res) => {
    let product = new Product(req.body.product);
    product.save();
    res.json({message:"  product added successfully",date:product});
});

    app.get("/GetAllProducts", async (req, res) => {
        let products = await Product.find({});
        res.json({message:" products fetched successfully",date:products});
    });
    
    app.put("/UpdateProduct/:id", async (req, res) => {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body.product);
        res.json({message:" product updated successfully",date:product});
    });
    
    app.delete("/DeleteProduct/:id", async (req, res) => {
        let product = await Product.findByIdAndDelete(req.params.id);
        res.json({message:" product deleted successfully",date:product});
    });


app.listen(port, async() => {
    try {
        await mongoose.connect(url);

        console.log("Connected to MongoDB");
        console.log(`Server is running on port ${port}`);
        
    } catch (error) {
        
    }
});