(function(){
    'use strict';

    /*galobal angular*/
    angular.module('app').controller('HomeLoginController', HomeLoginController);

    HomeLoginController.$inject = ['AuthenticationService', '$rootScope', '$location', '$http', '$timeout', '$cookies', 'UserService'];

    function HomeLoginController(AuthenticationService, $rootScope, $location, $http, $timeout, $cookies, UserService){
        var vm = this;
        vm.login = login; 
        

        (function initController() {
            vm.user = { username : '', password : '', remember : false };
            AuthenticationService.ClearCredentials();
        })();

        function login(user){
            AuthenticationService.Login(user, function (response) {                
                SetCredentials(vm.user, response);                
                $location.path('/');
            });           
        }


        function SetCredentials(user, data) {   
            $rootScope.isAuthenticated = true;

            localStorage.setItem('token', data.access_token);
            //sessionStorage.setItem('token', data.access_token);

            $http.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;

            UserService.GetById(user.username, function(res) {
                 $rootScope.currentUser = res.data;
                 $rootScope.theme = res.data.Theme;
                 
                var objCookie = { token : data.access_token, currentuser : res.data };
                $cookies._c = JSON.stringify(objCookie);
            });
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
    }
})();