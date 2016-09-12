//
// The data you will be fetching has already been added to Firebase. Your instructor will give you the API key and URL to use.

// Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the flower arrangment info to the user.

"use strict";

app.controller("MainCtrl", function ($scope, $routeParams, FlowerFactory) {

  $scope.displayFlowers  = () => {
    FlowerFactory.getFirebaseFlowers(flowersFromFirebase)
      .then((flowers) => {
        console.log(flowers);
      })
  }
});