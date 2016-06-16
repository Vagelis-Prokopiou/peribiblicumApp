angular.module('MyApp',[])
    .controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.name = 'Me!';
        $scope.request = 'null';

        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://stats.nba.com/leaders/#!/?StatCategory=PTS'
        }).then(function successCallback(response) {
            // $scope.request = 'The request to NBA stats was succesfull.';
            $scope.request = response;
        }, function errorCallback(response) {
            $scope.request = 'The request to NBA stats failed.';
        });




    }]);