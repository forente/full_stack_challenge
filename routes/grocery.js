var router = require('express').Router();

var Grocrey = require('../models/grocery');

router.get('/', function(request, response){
  Grocrey.find({}, function(err, groceries){
    if (err) {
      console.log(err);
      response.sendStatus(500);
    }
    else {
      response.send(groceries);
    }
  })
});

router.post('/create',function(request, response){
  console.log('New data entry');
  var data = request.body;

  var groceryItem = new Grocrey({
    name: data.name,
    qty:data.qty;
  });

  groceryItem.save(function(err){
    if (err) {
      console.log('There was an error while saving:',err);
      response.sendStatus(500);
    }
    else {
      response.sendstatus(200);
    }
  })

});

//todo: add a delete a means to delete the entries from the server 

module.exports = router;
