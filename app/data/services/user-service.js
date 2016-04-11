(function () {
    'use strict';

    angular.module('app').factory('UserService', UserService);

    UserService.$inject = ['$http', '$rootScope'];
    function UserService($http, $rootScope) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;

        return service;

        function GetAll() {
            return $http.get($rootScope.baseURL + 'user').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id, callback) {
            return $http.get($rootScope.baseURL + 'user?id=' + id).then(callback, handleError('Error getting user by id'));
        }

        function Create(user) {
            return $http.post($rootScope.baseURL + 'user', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put($rootScope.baseURL + 'user' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        // private functions

        function handleSuccess(res) {
            console.log(res.data);
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
