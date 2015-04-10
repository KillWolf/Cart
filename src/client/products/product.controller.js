(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams, cartService){

		var productArray = productsService.getProduct($routeParams.title);
		$scope.product = productArray[0];

		$scope.addToCart = function(product){
				console.log(product);
                  var quantity = this.quantity;
                  cartService.addProductsToCart(product, quantity);
               }

	}

}());
/*

(function(){

		angular
		.module("Main.product", [])
		.controller("productController", productController);

		function productController($scope, productsService, $routeParams){

			//console.log("hejhej");
			var productArray = productsService.getProduct($routeParams.name);


			$scope.product = productArray[0];
			//console.log(productArray[0]);

			

			
		}



})();
*/