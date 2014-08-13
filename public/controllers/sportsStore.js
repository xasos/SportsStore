angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl) {

  $scope.data = {};

  $http.get(dataUrl).success(function(data) {
    $scope.data.products = data;
  })
  .error(function(error) {
    console.log("Not connected to Deployd.")
    $scope.data.error = error;
  });

  $scope.sendOder = function (shippingDetails) {
      var order = angular.copy(shippingDetails);
      order.products = cart.getProducts();
      $http.post(orderUrl, order)
      .success(function(data) {
          $scope.data.orderId = data.id;
          cart.getProducts().length = 0;
      })
      .error(function (error) {
        $scope.data.orderError = error;
        cart.getProducts().length = 0;
      }).finally(function () {
          $location.path("/complete");
      })
  }
});
