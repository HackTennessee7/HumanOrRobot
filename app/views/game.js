angular
.module('hor')
.controller('GameController',function($scope,arrayFactory){
  $scope.myarray = arrayFactory;
  var arrayLength = $scope.myarray.length;
  for (var i = 0; i < arrayLength; i++) {
    
})
