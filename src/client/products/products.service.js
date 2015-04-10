	(function(){
	

	var productsService = function($http){

		var categoriesSelected = []
			//products           = [];

		var getProducts = function(){

				return $http.get("/api/products")
							.then(function(response){
									setProducts(response.data)
									return response.data;
					})
			}

			var getCategories = function(){

				return $http.get("api/categories")
							.then(function(response){
								return response.data;
							})
			}

			var setProducts = function(data){
				products = data;
			}
		var getProduct = function(title){
			return findProductInArray(products, title);
		}
		
		var findProductInArray = function(data, title){
			return data.filter(function(element){
				if(element.name === title){
					return element;
				}
			});
		}

		var getCategories = function(){

				return $http.get("api/categories")
							.then(function(response){
								return response.data;
							})
			}


		var getCategoriesSelected = function(){
			return getCategoriesSelected;
		};


		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }

        };

		var productFilter = function(product){
            if (categoriesSelected.length > 0) {
                if (categoriesSelected.indexOf(product.category) < 0){
                    return;
                }
            }
            return product;
        } 

		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			getCategoriesSelected: getCategoriesSelected,
			categoryChange: categoryChange,
			productFilter: productFilter
		}
	}


	angular
		.module("Main")
		.factory('productsService', productsService)

}());/*
(function(){


		var productsService = function($http){
			//console.log("Beer");
			var getProducts = function(){

				return $http.get("/api/products")
							.then(function(response){
									setProducts(response.data)
									return response.data;
					})
			}

			var getCategories = function(){

				return $http.get("api/categories")
							.then(function(response){
								return response.data;
							})
			}

			var setProducts = function(data){
				products = data;
			}

			var getProduct = function(name){
				
				//console.log(products);	
				return findProductInArray(products, name);

			}

			// data.filter | 'filter' er en indbygget js funktion
			// 'element' kigger efter alle elementer i mit array (går ud ra den dykker ind ihver object og kigger på propertiesene)
			var findProductInArray = function(data, name){
				console.log("Searching for Element")
				return data.filter(function(element){
					if(element.name === name){
						console.log("element found");
						return element;
					}
				});
			}

			return {
					getCategories: getCategories,
					getProducts: getProducts,
					getProduct: getProduct
				}
		} 

	angular
		.module("Main")
		.factory("productsService", productsService);	

})();*/