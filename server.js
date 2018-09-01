const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "/");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get("/", (req,res,next) =>{
//     res.sendFile(path.join(__dirname, "/"));
// });

app.get("/about", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, ()=>{
    console.log("Portal open on port 3000");
});