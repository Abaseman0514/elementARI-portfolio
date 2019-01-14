"use strict"; {
 angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
   $routeProvider
    .when('/', {
     template: '<element-ari></element-ari>'
    })
    .when('/about', {
     template: '<about></about>'
    })
    .when('/examples', {
     template: '<examples></examples>'
    })
    .when('/contact', {
     template: '<contact></contact>'
    })
    .when('/history', {
     template: '<history></history>'
    })
    .otherwise({
     template: '<h1>404 Page Does Not Exist</h1>'
    })
  });


}