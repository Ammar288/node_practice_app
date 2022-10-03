const dotenv = require("dotenv")
const express = require('express')
const router = require('./router')
const mongoose = require("mongoose")
const cors = require("cors")

dotenv.config()

const port = 3000
const app = express()

app.listen(port, async function() {
    console.log(`Server up on port ${port}`)
})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(router)