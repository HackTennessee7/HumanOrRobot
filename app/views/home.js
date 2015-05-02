angular
.module('hor')
.controller('HomeCtrl', function ($scope, $location){
  $scope.startGame = function (){
    console.log("clicked")
    $location.path('/game')
  }
})
