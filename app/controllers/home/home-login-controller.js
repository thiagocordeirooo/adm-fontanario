(function(){
    'use strict';

    /*galobal angular*/
    angular.module('app').controller('HomeLoginController', HomeLoginController);

    HomeLoginController.$inject = ['AuthenticationService', '$rootScope', '$location', '$http'];

    function HomeLoginController(AuthenticationService, $rootScope, $location, $http){
        var vm = this;
        vm.login = login; 
        vm.logout = logout;
        activate();
        ////////////////////////////////////

        function login(user){
            AuthenticationService.Login(user, loginCallback)
        }

        function loginCallback(data){
            $rootScope.isAuthenticated = true;
            $location.path('/index');
        }

        /*function login(user) {
            var data = "grant_type=password&username=" + user.username + "&password=" + user.password;
            $http.post('http://localhost:11466/api/security/token',
                data,
                {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .success(function (data) {
                    console.log(data);
                    $rootScope.isAuthenticated = true;

                    localStorage.setItem('token', data.access_token);
                    sessionStorage.setItem('token', data.access_token);
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
                    //$cookie.set('token', data.access_token);

                    $location.path('/index');
                })
                .error(function (data) {
                    toastr.error(data.error_description, 'Falha ao autenticar');
                });
        }*/


        function logout(){
           alert(1);
           $rootScope.isAuthenticated = false; 
           $location.path('/login');
        }

        function activate(){
            AuthenticationService.ClearCredentials();
            $rootScope.isAuthenticated = false; 
            vm.user = { username : '', password : '', remember : false };
        }
    }
})();