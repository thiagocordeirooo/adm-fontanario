(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(function($rootScope, $location, $cookies, $http){
		$rootScope.baseURL = 'https://api-admfontanario.azurewebsites.net/api/';
		//$rootScope.baseURL = 'http://localhost:11466/api/';		
		
		$rootScope.theme = 'paper';
        $rootScope.changeTheme = changeTheme;

////////////////////////////////////////////////        
////////////////////////////////////////////////

        function changeTheme(theme){
        	sessionStorage.theme = theme;
        	$rootScope.theme = sessionStorage.theme;
        }

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
        	if (current != '/login') {
	        	var objCookie = null;

	        	if ($cookies._c != null) {
	        		objCookie = JSON.parse($cookies._c);
	        	}
	        	
	        	if (objCookie == null || objCookie.token == null) {
	        		$rootScope.isAuthenticated = false;
	        		$rootScope.theme = 'paper';
            		$http.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
	        	}else{
	        		$http.defaults.headers.common['Authorization'] = 'Bearer ' + objCookie.token;
	        		$rootScope.isAuthenticated = true;
					$rootScope.currentUser = objCookie.currentuser;
	                $rootScope.theme = objCookie.currentuser.Theme;
	        	}
	            if (current != '/login' && next.authorize && !$rootScope.isAuthenticated) {
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