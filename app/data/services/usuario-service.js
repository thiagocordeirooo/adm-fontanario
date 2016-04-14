(function () {
    'use strict';

    angular.module('app').factory('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['$http', '$rootScope'];
    function UsuarioService($http, $rootScope) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;

        return service;

        function GetAll(callbackSuccess) {
            return $http.get($rootScope.baseURL + 'user').then(callbackSuccess, handleError('Error getting all users'));
        }

        function GetById(id, callbackSuccess) {
            return $http.get($rootScope.baseURL + 'user/' + id).then(callbackSuccess, handleError('Error getting user by id'));
        }

        function Create(user, callbackSuccess) {
            return $http.post($rootScope.baseURL + 'user', user).then(callbackSuccess, handleError('Error creating user'));
        }

        function Update(user, callbackSuccess) {
            return $http.put($rootScope.baseURL + 'user' , user).then(callbackSuccess, handleError('Erro ao atualizar usuário.'));
        }

        // private functions

        function handleSuccess(res) {
            console.log(res.data);
            return res.data;
        }
    }

})();
