(function(){
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html',
                authorize: true
            })
            .when('/index', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/index.html',
                authorize: true
            })            
            .when('/login', {
                controller: 'HomeLoginController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/login.html'
            })
            .when('/meu-usuario', {
                controller: 'MeuUsuarioEditController',
                controllerAs: 'vm',
                templateUrl: 'app/views/usuario/meu-usuario-edit.html',
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
    });
})();