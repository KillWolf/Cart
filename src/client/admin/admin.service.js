(function(){
	"use strict";

	var adminService = function($http, $rootScope){

		var deleteProduct = function(id){
			$http.delete('/api/product/' + id);
		}

		var getProduct = function(id){

			return $http.get("/api/product/" + id)
						.then(function(response){
								//setProducts(response.data)
								return response.data;
				})
		}

		return {
			getProduct: getProduct,
			deleteProduct: deleteProduct
		}

	}

	angular
		.module("Main")
		.factory("adminService", adminService);
})();