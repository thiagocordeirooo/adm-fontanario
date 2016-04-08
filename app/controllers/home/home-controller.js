(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location'];

    function HomeController($rootScope, $location){
        var vm = this;
        
        activate();
        ////////////////////////////////////


        function activate(){
            // Inicializador
        }
    }
})();