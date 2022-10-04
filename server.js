var express = require("express"); // Include express.js module
var app = express();

var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/pages/home.html"));
  });

  app.get('/test1', function (req, res) {
    res.sendFile(path.join(__dirname, "/pages/test1.html"));
})

app.listen(HTTP_PORT, onHttpStart);