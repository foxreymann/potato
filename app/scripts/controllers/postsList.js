'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:PostsListCtrl
 * @description
 *
 * Controller reads and displays JSONP Flickr feed
 */

angular.module('potatoFlickrApp')
  .controller('PostsListCtrl', function ($scope, $rootScope, $http, $location, productionConfig) {
    $scope.config = productionConfig;

    $http.jsonp($scope.config.feedUrl).
      success(function(data, status, headers, config) {
        $scope.feed = data;
      }).
      error(function(data, status, headers, config) {
        console.error('Error fetching feed:', data);
      });

    $scope.showPost = function(post) {
      $rootScope.post = post;
      $location.path('/post');
    };

  });
