var app = angular.module('FormAndDisplay');
app.factory('FormService', function(){
   // service logic\
   var valueGetter= function(){

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
  return {
    valueGetter: function(vals) {
      storedValues= vals;
      console.log(FormData);
    },
    valueSetter: function() {
      return FormData;
    }
  };
});
