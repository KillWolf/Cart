(function(){
	"use strict";

	angular
		.module("Main", ["ngRoute","Main.products", "Main.cart", "Main.product", "Main.admin"])
                // .controller("appCtrl", appCtrl)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
                        // $rootScope.cartProduct = {};
		})
		.config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
                        .when('/admin/create', {
                                 templateUrl:"./admin/create.html",
                                 controller:"adminController"
                        })
                        .when('/admin/edit/:id', {
                                templateUrl:"./admin/edit.html",
                                controller:"adminController"
                        })
        		        .when('/', {
        			         templateUrl: './products/products.html',
        		              	controller: 'productsController'
        		        })
                        .when('/checkout', {
                                templateUrl: './cart/checkout.html',
                                controller: 'cartController'
                        })
                        .when('/confirm', {
                            templateUrl:"./cart/confirmed.html",
                            controller:""
                        })
                        .when('/admin', {
                                templateUrl: './admin/admin.html',
                                controller: 'adminController'
                        })
        		.otherwise({ redirectTo: '/' });
                })
                .directive('backButton', function(){
                        return {
                                restrict: 'A',

                                link: function(scope, element, attrs) {
                                        element.bind('click', goBack);

                                function goBack() {
                                        history.back();
                                        scope.$apply();
                                        }
                                }
                        }
                });   



}());