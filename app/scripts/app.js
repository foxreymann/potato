'use strict';

/**
 * @ngdoc overview
 * @name potatoFlickrApp
 * @description
 * # potatoFlickrApp
 *
 * Main module of the application.
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
