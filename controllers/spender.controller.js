(function () {

  "use strict";
  angular
    .module("paystackClient")
    .controller("spendersController",
    function($scope, $http, spendersFactory) {
      
      spendersFactory.getspenders()
        .then(function(response){
          let sort = 'total_transaction_amount';
          $scope.spenderArray = response.data.data.sort((a, b) => b[`${sort}`] - a[`${sort}`]);
          $scope.topPaying = $scope.spenderArray.length/2;
          $scope.sum = $scope.spenderArray;
          $scope.spenderArray.reduce(function(prevVal, elem, index) {
            $scope.sum[index] = prevVal + elem[sort];
            return $scope.sum[index];
          }, 0);
          $scope.percentage = $scope.sum[$scope.topPaying - 1]/$scope.sum[$scope.sum.length - 1] * 100;
        });

      $scope.round = function() {
        if ($scope.topPaying || $scope.topPaying === 0) {
          $scope.topPaying = $scope.topPaying > 12 
                              ? 12 : $scope.topPaying < 1
                                ? 1 : Math.round($scope.topPaying);
          $scope.percentage = $scope.sum[$scope.topPaying - 1]/$scope.sum[$scope.sum.length - 1] * 100;
        } else {
          $scope.percentage = $scope.sum[0]/$scope.sum[$scope.sum.length - 1] * 100;
        }
      }
      
    }
  )

})();