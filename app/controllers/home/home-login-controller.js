(function(){
    'use strict';

    /*galobal angular*/
    angular.module('app').controller('HomeLoginController', HomeLoginController);

    HomeLoginController.$inject = ['$rootScope', '$location'];

    function HomeLoginController($rootScope, $location){
        var vm = this;
        vm.login = login; 
        vm.logout = logout;
        activate();
        ////////////////////////////////////

        function login(user){
            $rootScope.isAuthenticated = true;
            $rootScope.user = user;

            $location.path('/index');
        }

        function logout(){
           alert(1);
           $rootScope.isAuthenticated = false; 
           $location.path('/login');
        }

        function activate(){
            $rootScope.isAuthenticated = false; 
            vm.user = { username : '', password : '', remember : false };
        }
    }
})();