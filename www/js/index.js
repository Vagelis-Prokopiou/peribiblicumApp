var MyApp = angular.module('MyApp',[])
    .controller('headerCtrl', ['$scope', function($scope) {
        $scope.name = 'Hola!';
        $scope.email = {
            text: 'me@example.com',
            provider: 'google.com'
        };
    }]);