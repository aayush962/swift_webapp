//server index.html
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
  res.sendFile('./index.html');
});

app.listen(8080, function(){
  console.log('serving swift webapp on port 8000');
});
