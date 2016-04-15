(function () {
    'use strict';

    /*global angular*/
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
            return $http.get($rootScope.baseURL + 'user').then(callbackSuccess);
        }

        function GetById(id, callbackSuccess) {
            return $http.get($rootScope.baseURL + 'user/' + id).then(callbackSuccess);
        }

        function Create(user, callbackSuccess) {
            return $http.post($rootScope.baseURL + 'user', user).then(callbackSuccess);
        }

        function Update(user, callbackSuccess) {
            return $http.put($rootScope.baseURL + 'user' , user).then(callbackSuccess);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }
    }

})();
