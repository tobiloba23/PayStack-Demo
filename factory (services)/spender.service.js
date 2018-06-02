(function () {

  "use strict";
  angular
    .module("paystackClient")
    .factory("spendersFactory",
      function($http){
        function get(){
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
          return $http.get('https://studio-api.paystack.co/insights/spenders?from=' + (new Date("2017-01-01")).toDateString() + '&to=' + (new Date()).toDateString());
        }
        return {
          getSpenders: get
        }
      }
    );

})();
