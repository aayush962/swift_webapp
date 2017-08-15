//server index.html
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./dist'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080, function(){
  console.log('serving swift webapp on port 8080');
});
