(function () {

  "use strict";
  angular
    .module("paystackClient")
    .directive("slider",
      function(){
        return {
          templateUrl: "../views/slider.html"
        }
      }
  );

})();
