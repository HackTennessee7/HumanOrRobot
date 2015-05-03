angular
.module('hor')
.controller('GameController',function($scope, arrayFactory){
  $scope.images = arrayFactory;

  $scope.show = 0;

  $scope.nextImage = function (){
    $scope.show += 1;
  }

})
