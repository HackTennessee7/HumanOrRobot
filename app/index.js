'use strict'

angular
.module('hor', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {url:'/', templateUrl: 'views/home.html', controller:'HomeCtrl'})
    .state('game', {url:'/game', templateUrl: 'views/game.html', controller:'GameController'})
    .state('results', {url:'/results', templateUrl: 'views/results.html', controller: 'ResultsCtrl'})
})
