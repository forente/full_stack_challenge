var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grocreySchema = new Schema({
  name:String,
  qty:Number
});

var Grocrey = mongoose.model('Grocrey', grocreySchema);

module.exports = Grocrey;
