'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:PostCtrl
 * @description
 *
 * Controller reads one Flickr post data from rootScope and displays them
 */

angular.module('potatoFlickrApp')
  .controller('PostCtrl', function ($scope, $rootScope, $location) {
    if(!$rootScope.post) {
      $location.path('/');
      return;
    }
    $scope.post = $rootScope.post;
    $scope.post.tags = $scope.post.tags.split(' ');
  });
