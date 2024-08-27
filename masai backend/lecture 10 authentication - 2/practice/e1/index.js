const express = require("express");
const app = express();
const connection = require("./config/db");
const UserRoute = require("./Routes/user.route");
const auth = require("./middleware/auth.middleware");
const checkadmin = require("./middleware/checkadmin.middleware");
const BlackListToken = require("./blacklist");
const dotenv = require("dotenv").config();
const PORT= process.env.PORT || 3000;
app.use(express.json());
app.use("/user",UserRoute)
app.get("/", (req, res) => {
    res.send("Welcome to Home");
});

app.get('/dashbord', (req, res) => {
    res.send("Welcome to Dashbord");
});
app.get('/product', (req, res) => {
    res.send("Welcome to Product");
});

app.get('/cart',auth, (req, res) => {
    res.send("Welcome to Cart");
}); 

app.get('/checkout',auth, (req, res) => {
    res.send("Welcome to Checkout");
});

app.get('/update',[auth,checkadmin] ,(req, res) => {
    res.send("Welcome to Update");
});

app.get('/delete',[auth,checkadmin], (req, res) => {
    res.send("Welcome to Delete");
});

app.get('/logout', (req, res) => {
    let token=req.headers.authorization.split(" ")[1];
    BlackListToken.push(token);
    res.send("Welcome to Logout");
});

app.listen(PORT, async() => {
    try {
        await connection;
        console.log("Server started on port " + PORT+ " Connected to MongoDB");    
    } catch (error) {
        console.log(error); 
    }
});