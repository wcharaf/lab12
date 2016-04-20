var app= angular.module('FormAndDisplay');

app.controller('formcontroller', function($scope,FormService){
  $scope.addValues = function(){
    var addedValues = {
      Name:$scope.forminput.fname,
      FavColor: $scope.forminput.lname,
      FavCity: $scope.forminput.favcity,
      PNumber: $scope.forminput.pnumber,
      Gender: $scope.forminput.gender,
      Age: $scope.forminput.age
    }
    FormService.valueGetter(addedValues);
    // console.log(FormData);})=$scope.forminput;
    console.log($scope.forminput);
    // console.log(FormService.valueGetter());
  }

});
