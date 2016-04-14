(function(){
    'use strict';

    angular.module('app').controller('UsuarioEditController', UsuarioEditController);

    UsuarioEditController.$inject = ['$rootScope', '$location','$routeParams', '$route', '$cookies', 'UsuarioService'];

    function UsuarioEditController($rootScope, $location, $routeParams, $route, $cookies, UsuarioService){
        var vm = this;
        vm.save = save;
        vm.cancel = cancel;
        vm.myUser = false;
        var userName = '';

        (function initController() {
            if ($route.current.$$route.param == 'myUser') {
                vm.myUser = true;
                userName = $rootScope.currentUser.UserName;
            }else{
                userName = $routeParams.id
            }
        })();

        UsuarioService.GetById(userName , function (res){            
            vm.user = res.data;
        });

        function save(user){
            UsuarioService.Update(user, function (res){

                
                if (vm.myUser) {
                    updateCookie(res);
                }

                toastr.success('Operação efetuada com sucesso.');
            });
        }

        function updateCookie(res){
            $rootScope.currentUser = res.data;
            $rootScope.theme = res.data.Theme;

            var objCookie = angular.fromJson($cookies.get('_c'));
            objCookie.currentuser = res.data;

            $cookies.remove('_c');
            $cookies.put('_c', JSON.stringify(objCookie));
        }

        function cancel(){
            if (vm.myUser) {
                $location.path('/');
            }else{
                $location.path('/adm/usuarios');
            }
            
        }
    }
})();