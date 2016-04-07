(function(){
    'use strict';
	
	/*global angular*/
    angular.module('app').run(function($rootScope, $location){
		$rootScope.theme = 'paper'; 	
        sessionStorage.theme = 'paper';
        
        $rootScope.isAuthenticated = false;
        $rootScope.trocaTema = trocaTema;
        
        function trocaTema(theme){
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