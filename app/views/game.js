angular
.module('hor')
.controller('GameController',function($scope, arrayFactory, $location, $rootScope){
  $scope.images = arrayFactory;
  $scope.turn = 0;
  $scope.show = 0;
  $scope.choice = 'none';
  $scope.result = 'none';
  $rootScope.score = 0;

  $scope.nextImage = function (){
    $scope.show += 1;
    $scope.turn += 1;
    if ($scope.turn === 5) {
      $location.path('/results')
      $('.modal-backdrop').hide();
    }
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
      $rootScope.score += 10
    } else {
      $scope.result = 'Better luck next time...'
    }
  }

})
