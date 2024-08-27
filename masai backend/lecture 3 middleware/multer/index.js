const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

// app.get("/", ()=>[
    
// ])
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send("Hi")
  })

app.listen(8080, ()=>{
    console.log("server running on port 8080")
})