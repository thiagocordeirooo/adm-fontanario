(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(function($rootScope, $location, $cookies, $http){
		$rootScope.baseURL = 'https://api-admfontanario.azurewebsites.net/api/';	
		$rootScope.theme = 'paper';

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
        	if ($location.path() != '/login') {
	        	var objCookie = $cookies.get('_c');

	        	if (objCookie == null) {
	        		$rootScope.isAuthenticated = false;
	        		$rootScope.theme = 'paper';
            		$http.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
	        	}else{
	        		objCookie = angular.fromJson(objCookie);
	        		$http.defaults.headers.common['Authorization'] = 'Bearer ' + objCookie.token;
	                $rootScope.theme = objCookie.currentuser.Theme;
	                $rootScope.currentUser = objCookie.currentuser;
	                $rootScope.isAuthenticated = true;
	        	}
	            if (next.authorize && !$rootScope.isAuthenticated) {
	                $location.path("/login");
	            }
        	}
        });
    });



	/*global toastr*/
    toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "newestOnTop": false,
	  "progressBar": true,
	  "positionClass": "toast-top-right",
	  "preventDuplicates": false,
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
})();