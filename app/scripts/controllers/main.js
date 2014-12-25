'use strict';

/**
 * @ngdoc function
 * @name potatoFlickrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoFlickrApp
 */

angular.module('potatoFlickrApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http, $location) {
    // var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D\'http%3A%2F%2Fdailyjs.com%2Fatom.xml\'%20and%20itemPath%3D\'feed.entry\'&format=json&diagnostics=true&callback=JSON_CALLBACK';
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
