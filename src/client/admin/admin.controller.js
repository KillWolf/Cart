(function(){
  "use strict";

    angular
    .module("Main.admin", [])
    .controller("adminController", adminController);



    function adminController ($scope, adminService, productsService, $routeParams){

      $scope.delete = function(id){
        adminService.deleteProduct(id);
        console.log(id)
      }


      var makeProducts = function(data){
        $scope.products = data;
      }

      var makeService = function(data){
        $scope.categories = data;
      }

      productsService.getProducts().then(makeProducts);
      productsService.getCategories().then(makeService);

        adminService.getProductById($routeParams.id)
        .then(function(data){
          $scope.productx = data;
          console.log(data);
        });

    }

      })();



