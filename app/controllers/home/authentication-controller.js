(function(){
    'use strict';

    /*global angular*/
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
                 setThemeColor($rootScope.theme);
                 
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
            setThemeColor($rootScope.theme);
            $http.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
        }
        
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
})();