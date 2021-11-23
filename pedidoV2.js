(function () {
    //'use strict';

    angular
        .module('app')
        .controller('HelloWorldCtrl', HelloWorldCtrl)
		
    function HelloWorldCtrl($scope) {
        $scope.message = "Oi mundo"
			
	};    

})();