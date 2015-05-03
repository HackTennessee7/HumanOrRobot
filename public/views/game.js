angular
.module('hor')
.controller('GameController',function($scope, arrayFactory){
  $scope.images = arrayFactory;

  $scope.show = 0;
  $scope.choice = 'none';

  $scope.nextImage = function (){
    $scope.show += 1;
  }

  $scope.human = function (){
    $scope.choice = 'Human'
  }

  $scope.robot = function (){
    $scope.choice = 'Robot'
  }

})
