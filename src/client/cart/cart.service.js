(function(){
	"use strict";

	var cartService = function($http, $rootScope){
		
		var addProductsToCart = function(product, quantity){
			$rootScope.cartProducts[product.title] = {
				product: product,
				quantity: quantity
			}


			$rootScope.moreProd = function(cartProduct){
			$rootScope.cartProducts[cartProduct.title]["quantity"] += 1;
			
			$rootScope.lessProd = function(cartProduct){
			if($rootScope.cartProducts[cartProduct.title]["quantity"] > 1){
				$rootScope.cartProducts[cartProduct.title]["quantity"] -= 1;				
					}
				}
			}	

		}

		
		// Trying to put customer data in array
		var sendCustData = function(custEmail, custName){
			$rootScope.custData = {};
			
			$http.post('api/order', {
				"custName": custName,
				"custEmail": custEmail,
				"Products": new Array($rootScope.cartProducts)
		 	});

			$rootScope.custData["custBasket"] = {
				"Customer": {custName: {"custName": custName,
										"custEmail": custEmail}

										},
				"products": $rootScope.cartProducts					
				

			}
			console.log($rootScope.custData);
		}		


		var deleteProd = function(cartProduct){
			delete $rootScope.cartProducts[cartProduct.title];
		}		

		return	 {
			addProductsToCart: addProductsToCart,
			deleteProd: deleteProd,
			sendCustData: sendCustData
		}
	}

	angular
		.module("Main")
		.factory('cartService', cartService)

}());