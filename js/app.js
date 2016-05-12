var App = angular.module('myApp',['ngRoute', 'ngResource', 'base64']);
App.filter('sanitize', function($sce) { return $sce.trustAsHtml; });