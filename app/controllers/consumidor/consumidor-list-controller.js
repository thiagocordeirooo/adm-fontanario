(function(){
    'use strict';

    angular.module('app').controller('ConsumidorListController', ConsumidorListController);

    ConsumidorListController.$inject = ['$rootScope', '$location', '$http'];

    function ConsumidorListController($rootScope, $location, $http){
        var vm = this;
        
        vm.teste = 'asdsadasdsa';
        
        vm.edit = edit;
        

        activate();
        ////////////////////////////////////

        function edit(){
            $location.path('/consumidores/edit/12345');
        }

        function activate(){
            // Inicializador
            
            $http.get('https://api-admfontanario.azurewebsites.net/api/consumidor')
            .success(function (data) {
                vm.consumidores = data;
                console.log(data);
            });
        }
    }
})();