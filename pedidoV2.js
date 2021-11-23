(function () {
    //'use strict';

    angular
        .module('appOne')
        .controller('HelloWorldCtrl', HelloWorldCtrl)
		
    function HelloWorldCtrl($scope) {
        $scope.message = "Oi mundo"
			
	};    

})();