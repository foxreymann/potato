'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the potatoFlickrApp
 */

angular.module('potatoFlickrApp')
  .controller('PostCtrl', function ($scope, $rootScope, $location) {
    console.log($rootScope.post);
    if(!$rootScope.post) {
      $location.path('#/');
    }
    $scope.post = $rootScope.post;
  });
