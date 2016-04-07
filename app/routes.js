(function(){
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeLoginController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/login.html'
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
            .otherwise({
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/home/404.html'
            });
    });
})();