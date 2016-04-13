(function(){
    'use strict';

    angular.module('app').controller('UsuarioListController', UsuarioListController);

    UsuarioListController.$inject = ['$rootScope', '$location', 'UserService'];

    function UsuarioListController($rootScope, $location, UserService){
        var vm = this;
        vm.sort = sort;
        
        UserService.GetAll(function (res){
            vm.usuarios = res.data;
        });

        function sort(orderBy){
            vm.orderBy = orderBy;
            vm.reverse = !vm.reverse;
        }
        vm.orderBy = 'Name';
        vm.reverse = true;
    }
})();