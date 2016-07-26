angular.module('listApp',[]);

angular.module('listApp').controller('listController', function($http){
  var vm = this;

  vm.grabGroceries = function(){
    // grab the groceries from the database using the $http get
  }
});
