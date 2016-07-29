(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('UsuarioListController', UsuarioListController);

    UsuarioListController.$inject = ['$rootScope', '$location', 'UsuarioService'];

    function UsuarioListController($rootScope, $location, UsuarioService){
        var vm = this;
        vm.sort = sort;
        vm.edit = edit;
        
        vm.orderBy = 'Name';
        vm.reverse = true;
        
        UsuarioService.GetAll(function (res){
            vm.usuarios = res.data;
        });

        function edit(usuario){
            $location.path('/adm/usuarios/edit/' + usuario.UserName);
        }

        function sort(orderBy){
            vm.orderBy = orderBy;
            vm.reverse = !vm.reverse;
        }
    }
})();