angular.module('MyApp',[])
    .controller('mainCtrl', ['$scope', function($scope) {
        $scope.name = 'Hola!';
        $scope.email = {
            text: 'me@example.com',
            provider: 'google.com'
        };
    }]);