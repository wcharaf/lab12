var app= angular.module('FormAndDisplay');

app.controller('formcontroller', ['$scope',function(){
  $scope.callNotify = function(){
    FormService.valueGetter()=$scope.forminput;
    console.log($scope.forminput);
    console.log(FormService.valueGetter());
  }

}]);
