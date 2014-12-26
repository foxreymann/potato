'use strict';

/**
 * @ngdoc overview
 * @name potatoFlickrApp
 * @description
 *
 * App reads and displays Flickr feed for a tag 'potato'
 */
angular
  .module('potatoFlickrApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/postsList.html',
        controller: 'PostsListCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
