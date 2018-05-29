//using the immediatly invoked function expressions (iife): for local scoping
(function () {

  "use strict";
  //call the module created in app.js
  angular
    .module("paystackClient")
    .config(function($mdThemingProvider){
      $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('orange')
    });

})();
