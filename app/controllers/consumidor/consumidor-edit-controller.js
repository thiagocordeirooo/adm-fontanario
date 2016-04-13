(function(){
    'use strict';

    angular.module('app').controller('ConsumidorEditController', ConsumidorEditController);

    ConsumidorEditController.$inject = ['$rootScope', '$location', '$routeParams', 'ConsumidorService'];

    function ConsumidorEditController($rootScope, $location, $routeParams, ConsumidorService){
        var vm = this;
        vm.save = save;
        vm.cancel = cancel;

        ConsumidorService.GetById(parseInt($routeParams.id), function (res){
            vm.consumidor = res.data;
        });

        function save(consumidor){
            ConsumidorService.Update(consumidor, function (res){
                toastr.success('Operação efetuada com sucesso.');
            });
        }

        function cancel(){
            $location.path('/consumidores');
        }

    }
})();