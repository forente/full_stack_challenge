var express = require('express');
var bodyParser  = require('body-parser');
var mongoose = require('mongoose');
var index =  require('./routes/index');
var groceries = require('./routes/grocery');


var app = express();
mongoose.connect('mongodb://localhost/grocrey_list');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/',index);
app.use('list',groceries);



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ',port);
});
