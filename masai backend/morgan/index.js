const express= require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
app.use(express.json())

// Middleware
app.use(morgan('dev'))



//Router
app.get('/',(req, res) => {
    res.send('Hello World')
    //res.status(404).send('Page Not Found')
    //res.status(500).send('Server Error')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})