const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

const PORT = process.env.PORT || 5000

//Connected to DB server

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})