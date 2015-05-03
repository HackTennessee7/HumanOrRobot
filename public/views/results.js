angular
.module('hor')
.controller('ResultsCtrl', function($scope, $rootScope, $location){

  if ($rootScope.score < 30) {
    $scope.message = 'Meh'
  } else {
    $scope.message = 'You know your robots!'
    console.log($rootScope.score)
  }


  $scope.startOver = function (){
    $location.path('/')
  }
})
