// You will need a FlowerFactory whose responsibility will be to obtain the data from Firebase. Whether it is a listing of all flower arrangements, or the data of an individual arrangement. Your controller will use this factory to access the data it needs to display in the DOM.

"use strict";

app.factory("FlowerFactory", ($q, $http, FirebaseURL) => {

let getFirebaseFlowers = () => {
    return $q ((resolve, reject) => {
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((itemObject) => {
        resolve(itemObject);
        console.log("this is the itemObject", itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };
    return {getFirebaseFlowers}
  });


