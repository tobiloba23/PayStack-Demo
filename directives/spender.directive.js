(function () {

  "use strict";
  angular
    .module("paystackClient")
    .directive("spenderSection",
      function(){
        return {
          template: "<md-slider-container>"
                    + "<md-slider id='spenders' aria-label='red' ng-model='topPaying' min='1' max='12' step='1' ng-change='round()'></md-slider>"
                    + "<md-input-container>"
                      + "<input aria-controls='red' aria-label='red' ng-model='topPaying' type='number' ng-change='round()'>"
                    + "</md-input-container>"
                  + "</md-slider-container>"
        }
      }
  );

})();
