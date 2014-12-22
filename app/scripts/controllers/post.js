'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the potatoFlickrApp
 */

angular.module('potatoFlickrApp')
  .controller('PostCtrl', function ($scope, $rootScope) {
    console.log($rootScope.post);
    $scope.post = $rootScope.post;
  });
