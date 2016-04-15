(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(run);

	run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
	function run($rootScope, $location, $cookies, $http){
			$rootScope.baseURL = 'https://api-admfontanario.azurewebsites.net/api/';	
			$rootScope.theme = 'paper';
	
	        $rootScope.$on("$routeChangeStart", function(event, next, current) {
	        	if ($location.path() != '/login') {
		        	var objCookie = $cookies.get('_c');
	
		        	if (objCookie == null) {
		        		$rootScope.isAuthenticated = false;
		        		$rootScope.theme = 'paper';
		        		$rootScope.themeColor = '#93C54B';
	            		$http.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
		        	}else{
		        		objCookie = angular.fromJson(objCookie);
		        		$http.defaults.headers.common['Authorization'] = 'Bearer ' + objCookie.token;
		                $rootScope.theme = objCookie.currentuser.Theme;
		                setThemeColor($rootScope.theme);
		                $rootScope.currentUser = objCookie.currentuser;
		                $rootScope.isAuthenticated = true;
		        	}
		            if (next.authorize && !$rootScope.isAuthenticated) {
		                $location.path("/login");
		            }
	        	}
	        });
	        
	        
		    function setThemeColor(theme){
	            switch (theme) {
	                case 'paper':
	                    $rootScope.themeColor = '#2196F3';
	                    break;
	                case 'sandstone':
	                    $rootScope.themeColor = '#93C54B';
	                    break;
	                case 'superhero':
	                    $rootScope.themeColor = '#DF691A';
	                    break;
	                case 'yeti':
	                    $rootScope.themeColor = '#008CBA';
	                    break;                    
	            }
	        }
	        
	    }

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