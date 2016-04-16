var app=angular.module('FormAndDisplay');

app.controller('displaycontroller', function($scope,FormService){

  var pleasework = FormService.valueSetter();
  $scope.outputFormData = pleasework.FormData;

});
