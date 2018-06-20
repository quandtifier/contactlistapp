var app = angular.module('myApp',[]);
app.controller('AppCtrl',['$scope','$http',
function($scope,$http) {
    console.log("Hello from the controller");
}]);

$http.get('/contactlist').then(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response;
    console.log(response);
},function(error) {
    console.log("shit went wrong");
});