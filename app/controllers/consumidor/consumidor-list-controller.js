(function(){
    'use strict';

    angular.module('app').controller('ConsumidorListController', ConsumidorListController);

    ConsumidorListController.$inject = ['$rootScope', '$location'];

    function ConsumidorListController($rootScope, $location){
        var vm = this;

        vm.edit = edit;

        activate();
        ////////////////////////////////////

        function edit(){
            $location.path('/consumidores/edit/12345');
        }

        function activate(){
            // Inicializador
            
        }
    }
})();