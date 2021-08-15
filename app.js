const express  = require("express");
const app = express();
const mng = require("mongoose");

require("dotenv/config");
const postRouter = require("./routes/posts")
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/posts", postRouter);

//Get, Post, Delete
app.get("/",(req,res) => {
    res.send("We are at post")
});

//Connect to DB
mng.connect(process.env.DB_CONNECTION, 
            { useNewUrlParser: true, useUnifiedTopology: true }, 
            () => 
            console.log("Mongo Conntected successfully"));


//Listen 
app.listen(3000);