var app = angular.module('FormAndDisplay', ['ngRoute']);
app.controller('Controller1',function(){});
app.config(function($routeProvider) {
  $routeProvider
  .when('/form',{
    controller: 'formcontroller', 
    templateUrl: 'form.html'
  })

  .when('/display',{
    controller: 'displaycontroller',
    templateUrl: 'display.html'
  })

  .otherwise({ redirectTo: '/' });

});
