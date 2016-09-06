var app = angular.module("simpleApp",[]);
app.controller("simpleController",function($scope){
  $scope.collection = [{name:"praveen"},{name:"javascript"},{name:"webtunings"}]

$scope.addEntry = function() {
  $scope.collection.push({name: $scope.newData});
};

});
