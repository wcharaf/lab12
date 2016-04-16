var app= angular.module('FormAndDisplay');

app.controller('formcontroller', function(FormService){
  function callNotify(forminput) {
    FormService();
  }

});
