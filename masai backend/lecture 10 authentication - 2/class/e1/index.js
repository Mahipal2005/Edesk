const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");
const dotenv = require('dotenv').config(); 
const connection=require("./config/db");
const auth = require("./middleware/auth.middleware");
const checkAdmin = require("./middleware/checkadmin.middleware");
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use("/user", userRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get('/dashbord', (req, res) => {
    res.send("dashbord  data.......");
})
app.get('/product', (req, res) => {
    res.send("product  data.......");
})

app.get('/cart', auth,(req, res) => {
        res.send("cart-data .......");
})
app.get('/checkout',auth, (req, res) => {
        res.send("checkout-data .......");
})
app.get('/update',[auth,checkAdmin], (req, res) => {
        res.send("update-data .......");
})
app.delete('/delete',[auth,checkAdmin], (req, res) => {
        res.send("delete-data .......");
})

app.listen(PORT, async() => {
    await connection;
    console.log(`Server started on port ${PORT} and database connected`);
});