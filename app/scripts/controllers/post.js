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
    if(!$rootScope.post) {
      $location.path('#/');
    }
    $scope.post = $rootScope.post;
    $scope.post.tags = $scope.post.tags.split(' ');
  });
