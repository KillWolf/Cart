(function(){
  "use strict";

    angular
    .module("Main.admin", [])
    .controller("adminController", adminController);


    function adminController ($scope, adminService, productsService){

      $scope.delete = function(id){
        adminService.deleteProduct(id);
      }

      $scope.find = function(id){
        console.log(id);
        adminService.getProduct(id).then(makeProduct);
      }

      var makeProduct = function(data){
        console.log(data);
        $scope.productx = data;
      }

      var makeProducts = function(data){
        $scope.products = data;
      }

      var makeService = function(data){
        $scope.categories = data;
      }

      productsService.getProducts().then(makeProducts);
      productsService.getCategories().then(makeService);

    }



