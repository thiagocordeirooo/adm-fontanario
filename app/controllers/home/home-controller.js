(function(){
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location'];

    function HomeController($rootScope, $location){
        var vm = this;
        
        console.log($rootScope.isAuthenticated);

        activate();
        ////////////////////////////////////


        function activate(){
            // Inicializador

        }
    }
})();