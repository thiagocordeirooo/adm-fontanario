(function () {
    'use strict';
    
    /*global angular*/
    angular.module('app').factory('ConsumidorService', ConsumidorService);

    ConsumidorService.$inject = ['$http', 'CONSTANTS'];
    function ConsumidorService($http, CONSTANTS) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;

        return service;

        function GetAll(callbackSuccess) {
            return $http.get(CONSTANTS.baseURL + 'consumidor').then(callbackSuccess);
        }

        function GetById(id, callbackSuccess) {
            return $http.get(CONSTANTS.baseURL + 'consumidor/' + id).then(callbackSuccess);
        }

        function Create(consumidor, callbackSuccess) {
            return $http.post(CONSTANTS.baseURL + 'consumidor', consumidor).then(callbackSuccess);
        }

        function Update(consumidor, callbackSuccess) {
            return $http.put(CONSTANTS.baseURL + 'consumidor', consumidor).then(callbackSuccess);
        }

        // private functions

        function handleSuccess(res) {
            console.log(res.data);
            return res.data;
        }
    }

})();
