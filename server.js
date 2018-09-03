const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "/");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/blog", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "/blog.html"));
});

app.get("/contact", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "/contact.html"));
});

app.get("/services", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "/services.html"));
});

app.get("/about", (req,res,next) =>{
    res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, ()=>{
    console.log("Portal open on port 3000");
});