'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoFlickrApp
 */
angular.module('potatoFlickrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
