var app = angular.module('FormAndDisplay');
app.factory('FormService', function(){
   // service logic\
   function valueGetter (){

     var FormData = {
       Name:$scope.forminput(fname),
       FavColor: $scope.forminput(lname),
       FavCity: $scope.forminput(favcity),
       PNumber: $scope.forminput(pnumber),
       Gender: $scope.forminput(gender),
       Age: $scope.forminput(age)

     };
     console.log(FormData);
  }
  return valueGetter
});
