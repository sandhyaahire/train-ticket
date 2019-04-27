/**
 * Created by lwh on 2017/11/16.
 */
var controllerModule = angular.module("myApp", []);
controllerModule.controller("loginCtrl", function ($scope,$http) {
    $scope.login = function() {
        var username = $scope.username;
        var password = $scope.password;
        $http({
            method:"post",
            url: "/api/v1/users/login",
            withCredentials: true,
            data:{
                username: username,
                password: password
            }
        }).success(function(data, status, headers, config){
            if (data != null) {
                sessionStorage.setItem("admin_name", data.username);
                sessionStorage.setItem("admin_token", data.token);
                location.href = "../../admin.html";
            }else{
                alert("Wrong user name and password!");
            }
        }).error(function(data, header, config, status){
            alert(data.message)
        });
    }

    $scope.decodeInfo = function (obj) {
        var des = "";
        for(var name in obj){
            des += name + ":" + obj[name] + ";";
        }
        alert(des);
    }
});