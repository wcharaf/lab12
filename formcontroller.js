var app= angular.module('FormAndDisplay');

app.controller('formcontroller', ['FormService',function($scope,FormService){
  $scope.callNotify = function (){
    FormService.valueGetter();
  }

}]);
