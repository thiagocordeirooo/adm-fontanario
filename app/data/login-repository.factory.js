(function(){
	'use strict';

	/*global angular*/
    angular.module('app').factory('UserRepository', UserRepository);

    UserRepository.$inject = ['$resource'];

    function UserRepository($resource){
        return $resource('',{ id: '@id' },{
            update: { method: 'put' },
            create: { method: 'post' }
        });    	
    }

})();