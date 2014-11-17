/**
 * Created by andy on 14/11/15.
 */
var myApp = angular.module('myApp',[]);

myApp.factory('Data',function(){
    return {message:"I am data from service"}
})

myApp.filter('reverse', function(){
    return function(text){
        return text.split("").reverse().join("");
    }
})
function FirstCtrl($scope, Data){
   $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
}