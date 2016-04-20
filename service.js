var app = angular.module('FormAndDisplay');
app.service('FormService', function(){

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
