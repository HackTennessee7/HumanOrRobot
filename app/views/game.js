angular
.module('hor')
.controller('GameController',function($scope, arrayFactory){
  $scope.images = arrayFactory;

  $scope.show = 0;
  $scope.choice = 'none';
  $scope.result = 'none';
  $scope.score = 0

  $scope.nextImage = function (){
    $scope.show += 1;
  }

  $scope.human = function ($index){
    $scope.choice = 'Human'
    comparisonResult($index);
  }

  $scope.robot = function ($index){
    $scope.choice = 'Robot'
    comparisonResult($index);
  }

  function comparisonResult ($index) {
    if ($scope.choice === $scope.images[$index].hof) {
      $scope.result = 'Correct! You earned 10 points!'
      $scope.score += 10
    } else {
      $scope.result = 'Better luck next time...'
    }
  }

})
