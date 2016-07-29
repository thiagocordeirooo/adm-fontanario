(function () {
    'use strict';

    /*global angular*/
    angular.module('app').factory('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['$http', 'CONSTANTS'];
    function UsuarioService($http, CONSTANTS) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;

        return service;

        function GetAll(callbackSuccess) {
            return $http.get(CONSTANTS.baseURL + 'user').then(callbackSuccess);
        }

        function GetById(id, callbackSuccess) {
            return $http.get(CONSTANTS.baseURL + 'user/' + id).then(callbackSuccess);
        }

        function Create(user, callbackSuccess) {
            return $http.post(CONSTANTS.baseURL + 'user', user).then(callbackSuccess);
        }

        function Update(user, callbackSuccess) {
            return $http.put(CONSTANTS.baseURL + 'user' , user).then(callbackSuccess);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }
    }

})();
