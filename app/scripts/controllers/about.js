'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potatoFlickrApp
 */
angular.module('potatoFlickrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
