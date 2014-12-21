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
    'ngTouch',
    'rt.encodeuri'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/post/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
