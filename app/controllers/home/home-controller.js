(function(){
    'use strict';

    /*global angular*/
    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location', 'UsuarioService'];

    function HomeController($rootScope, $location, UsuarioService){
        var vm = this;
    }
})();