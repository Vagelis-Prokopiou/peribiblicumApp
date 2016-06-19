angular.module('MyApp', [])
    .controller('mainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {

        $http({
            method: 'GET',
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/peribiblicum.wordpress.com/posts/?number=100&fields=title,content'
        }).then(function successCallback(response) {
            $scope.posts = response.data.posts;

        }, function errorCallback() {
            $scope.error = 'An error occurred with the http request.';
        });

        // setTimeout(function () {
        //     for (var i = 0; i < $scope.posts.length; i++) {
        //         $log.info($scope.posts[i].title);
        //     }
        // }, 3000);


        $scope.toggleCustom = function (title) {
            for (var i = 0; i < $scope.posts.length; i++) {
                // lconsole.log($scope.posts[i].title);
                if ($scope.posts[i].title === title) {
                    $scope.posts[i].show = $scope.posts[i].show != true;
                }
            }
        };


    }]);