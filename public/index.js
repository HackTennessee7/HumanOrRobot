'use strict'

angular
.module('hor', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {url:'/', templateUrl: 'views/home.html'})
})
