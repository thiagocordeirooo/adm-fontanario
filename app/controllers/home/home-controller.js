(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location', 'UserService'];

    function HomeController($rootScope, $location, UserService){
        var vm = this;
        
        activate();
        ////////////////////////////////////


        function activate(){
            // Inicializador

        }
    }
})();