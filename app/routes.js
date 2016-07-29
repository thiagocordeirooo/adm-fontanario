(function(){
    'use strict';

    /*global angular*/
    angular.module('app').factory('sessionRecoverer', ['$location', '$q', '$injector', function($location, $q, $injector) {
        var sessionRecoverer = {
            responseError: function(response) {
                if (response.status == 401){
                    $location.path('/login');
                    /*global toastr*/
                    toastr.info('Sua sessão expirou, faça o login novamente.');
                }
                return $q.reject(response);
            }
        };
        return sessionRecoverer;
    }]);
    
    /*global angular*/
    angular.module('app').config(config);
    
    config.$inject = ['$routeProvider', '$httpProvider'];
    function config($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push('sessionRecoverer');
        
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html',
                authorize: true
            })
            .when('/login', {
                controller: 'AuthenticationController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/authentication.html'
            })
            .when('/index', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html',
                authorize: true
            })         
            .when('/consumidores', {
                controller: 'ConsumidorListController',
                controllerAs: 'vm',
                templateUrl: 'app/views/consumidor/consumidor-list.html',
                authorize: true
            })
            .when('/consumidores/edit/:id', {
                controller: 'ConsumidorEditController',
                controllerAs: 'vm',
                templateUrl: 'app/views/consumidor/consumidor-edit.html',
                authorize: true
            })
            .when('/adm/usuarios', {
                controller: 'UsuarioListController',
                controllerAs: 'vm',
                templateUrl: 'app/views/usuario/usuario-list.html',
                authorize: true
            })
            .when('/adm/usuarios/edit/:id', {
                controller: 'UsuarioEditController',
                controllerAs: 'vm',
                templateUrl: 'app/views/usuario/usuario-edit.html',
                authorize: true
            })            
            .when('/meu-usuario', {
                controller: 'UsuarioEditController',
                controllerAs: 'vm',
                templateUrl: 'app/views/usuario/usuario-edit.html',
                authorize: true,
                param: 'myUser'
            })              
            .when('/adm/log-integracao', {
                controller: 'LogIntegracaoListController',
                controllerAs: 'vm',
                templateUrl: 'app/views/log-integracao/log-integracao-list.html',
                authorize: true
            })            
            .otherwise({
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/404.html'
            });
    }
    
})();