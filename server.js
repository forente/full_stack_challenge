var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ',port);
});
