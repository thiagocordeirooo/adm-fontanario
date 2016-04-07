(function(){
    'use strict';

    angular.module('app').controller('HomeLoginController', HomeLoginController);

    HomeLoginController.$inject = ['$rootScope', '$location'];

    function HomeLoginController($rootScope, $location){
        var vm = this;
        vm.login = login; 
        vm.logout = logout;
        activate();
        ////////////////////////////////////


        function login(user){
            //toastr.success('certo', 'Sucesso');
            $rootScope.isAuthenticated = true;
            console.log(user);

            $rootScope.user = user;

            $location.path('/index');
        }

        function logout(){
           alert(1);
           $rootScope.isAuthenticated = false; 
           $location.path('/login');
        }

        function activate(){
            // Inicializador
            vm.user = { username : '', password : '', remember : false };
        }
    }
})();