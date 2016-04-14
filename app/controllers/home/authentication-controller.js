(function(){
    'use strict';

    /*galobal angular*/
    angular.module('app').controller('AuthenticationController', AuthenticationController);

    AuthenticationController.$inject = ['$rootScope', '$location', '$http', '$cookies', 'AuthenticationService', 'UsuarioService'];

    function AuthenticationController($rootScope, $location, $http, $cookies, AuthenticationService, UsuarioService){
        var vm = this;
        vm.login = login;        
        

        (function initController() {
            vm.user = { username : '', password : '', remember : false };
            ClearCredentials();
        })();

        function login(user){
            AuthenticationService.Login(user, function (response) {                
                SetCredentials(vm.user, response, redirectToIndex);                
            });           
        }

        function redirectToIndex(){
            $location.path('/');
        }

        function SetCredentials(user, data, redirectToIndex) {   
            $rootScope.isAuthenticated = true;
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;

            UsuarioService.GetById(user.username, function(res) {
                 $rootScope.currentUser = res.data;
                 $rootScope.theme = res.data.Theme;
                 
                var objCookie = { 'token' : data.access_token, 'currentuser' : res.data };
                $cookies.put('_c', JSON.stringify(objCookie));
                redirectToIndex();
            });            
        }    

        function ClearCredentials() {
            $rootScope.isAuthenticated = false;
            $cookies.remove('_c');
            $rootScope.currentUser = {};
            $rootScope.theme = 'paper';
            $http.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
        }        
    }
})();