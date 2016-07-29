var express = require('express');
var app = express();
var fs = require('fs');

app.use("/dist", express.static(__dirname + '/dist'));
app.use("/dist/app", express.static(__dirname + '/dist/app'));
app.use("/js", express.static(__dirname + '/dist/js'));
app.use("/styles", express.static(__dirname + '/dist/styles'));

app.get('/', function (req, res) {    
  res.end(fs.readFileSync('dist/index.html'));
});

app.listen(5000, function () {
  console.log('Running in port 5000!'); 
});