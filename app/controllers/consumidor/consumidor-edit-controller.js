(function(){
    'use strict';

    angular.module('app').controller('ConsumidorEditController', ConsumidorEditController);

    ConsumidorEditController.$inject = ['$rootScope', '$location', '$routeParams'];

    function ConsumidorEditController($rootScope, $location, $routeParams){
        var vm = this;

		vm.consumidor = { Id : $routeParams.id };

        activate();
        ////////////////////////////////////

        function activate(){
            // Inicializador
            vm.user = { username : '', password : '', remember : false };
        }
    }
})();