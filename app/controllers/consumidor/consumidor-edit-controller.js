(function(){
    'use strict';

    angular.module('app').controller('ConsumidorEditController', ConsumidorEditController);

    ConsumidorEditController.$inject = ['$rootScope', '$location', '$routeParams'];

    function ConsumidorEditController($rootScope, $location, $routeParams){
        var vm = this;

		vm.consumidor = { 'UnidadeConsumidora' : parseInt($routeParams.id)  };
        activate();
        ////////////////////////////////////

        function activate(){
            // Inicializador
        }
    }
})();