(function () {
    'use strict';

    angular.module('app').factory('ConsumidorService', ConsumidorService);

    ConsumidorService.$inject = ['$http', '$rootScope'];
    function ConsumidorService($http, $rootScope) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;

        return service;

        function GetAll(callbackSuccess) {
            return $http.get($rootScope.baseURL + 'consumidor').then(callbackSuccess, handleError('Erro ao buscar os consumidores.'));
        }

        function GetById(id, callbackSuccess) {
            return $http.get($rootScope.baseURL + 'consumidor/' + id).then(callbackSuccess,handleError('Erro ao buscar o consumidore.'));
        }

        function Create(consumidor, callbackSuccess) {
            return $http.post($rootScope.baseURL + 'consumidor', consumidor).then(callbackSuccess, handleError('Error creating user'));
        }

        function Update(consumidor, callbackSuccess) {
            return $http.put($rootScope.baseURL + 'consumidor', consumidor).then(callbackSuccess, handleError('Error updating user'));
        }

        // private functions

        function handleSuccess(res) {
            console.log(res.data);
            return res.data;
        }
    }

})();
