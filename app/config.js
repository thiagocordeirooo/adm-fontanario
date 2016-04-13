(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(function($rootScope, $location){
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
            if (next.authorize && !$rootScope.isAuthenticated) {
                $location.path("/login");
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