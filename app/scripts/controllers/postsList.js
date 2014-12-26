'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:PostsListCtrl
 * @description
 * # PostsListCtrl
 * Controller of the potatoFlickrApp
 */

angular.module('potatoFlickrApp')
  .controller('PostsListCtrl', function ($scope, $rootScope, $http, $location) {
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

    $http.jsonp(url).
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
