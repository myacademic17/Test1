var express = require("express"); // Include express.js module
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2> <br>";
    resText += "I declare that this test is in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source. <br>";
    resText += "Name: <mark>Humaira Shaikh</mark> <br>";
    resText += "Student Number: <mark>139877203</mark> <br>";
    resText +=  "<a href = './test1'> Go to Test1. </a> "; 
    res.send(resText);
});

app.get("/about", function (req, res){
    resText += "<a href = './home.html'> Go Home</a>";
    res.send(resText);
}); 

app.listen(HTTP_PORT, onHttpStart);