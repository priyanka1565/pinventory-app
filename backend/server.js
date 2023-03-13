const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const errorHandler = require("./middleWare/errorMiddleWare");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes middleware
app.use("/api/users",userRoute)


//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

//Error Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000
//Connected to DB server
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})