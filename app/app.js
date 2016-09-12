"use strict";

var app = angular.module("FlowerApp", ["ngRoute"])
  .constant('FirebaseURL', "https://flower-power-angular.firebaseio.com");


app.config(function($routeProvider) {
    $routeProvider.
        when("/flowers", {
            templateUrl: "partials/flowerpower.html",
            controller: "MainCtrl"
        }).
      otherwise("/flowers");

});

