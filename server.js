var express = require("express"); // Include express.js module
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2>";
    resText += "I declare that this test is in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.";
    resText += "Name: <mark>Humaira Shaikh</mark>";
    resText += "Student Number: <mark>139877203</mark>";
    resText +=  "<a href = './test1.html'> <u>Go to Test1</u></a> "; 
    res.send(resText);
});

app.get("/test1", function(req, res){
    res.sendFile(path.join(__dirname, "/pages/test1.html"));
});

app.listen(HTTP_PORT, onHttpStart);