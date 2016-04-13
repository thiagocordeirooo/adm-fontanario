(function(){
    'use strict';

    angular.module('app').controller('MeuUsuarioEditController', MeuUsuarioEditController);

    MeuUsuarioEditController.$inject = ['$rootScope', '$location', 'UserService'];

    function MeuUsuarioEditController($rootScope, $location, UserService){
        var vm = this;
        vm.save = save;
        vm.cancel = cancel;

        UserService.GetById($rootScope.currentUser.UserName, function (res){
            vm.user = res.data;
            
        });

        function save(user){
            console.log(user);
            UserService.Update(user, function (res){
                $rootScope.currentUser = res.data;
                $rootScope.theme = res.data.Theme;
                toastr.success('Operação efetuada com sucesso.');
            });
        }

        function cancel(){
            $location.path('/');
        }
    }
})();