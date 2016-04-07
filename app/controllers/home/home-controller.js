(function(){
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location'];

    function HomeController($rootScope, $location){
        var vm = this;
        vm.logar = logar; 
        vm.logout = logout;
        activate();
        ////////////////////////////////////


        function logar(user){
            toastr.success('certo', 'Sucesso');
            $rootScope.isAuthenticated = true;
            console.log(user);

            $rootScope.user = user;

            $location.path('/index');
        }

        function logout(){
            alert(1);
           $rootScope.isAuthenticated = false; 
           $location.path('/');
        }

        function activate(){
            // Inicializador
            vm.user = { username : '', password : '', remember : false };
        }
    }
})();