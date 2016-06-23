angular.module('MyApp', [])
    .controller('mainCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

        // Use the following to show and hide the black overlay
        // while fetching data.
        $scope.loading = true;

        $scope.date = new Date().getFullYear();;

        $http({
            method: 'GET',
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/peribiblicum.wordpress.com/posts/?number=100&fields=title,content'
        }).then(function successCallback(response) {
            $scope.posts = response.data.posts;
            $scope.loading = false;

        }, function errorCallback() {
            $scope.error = 'An error occurred with the http request.';
            $scope.loading = false;
        });

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };

        $scope.toggleCustom = function (title) {
            for (var i = 0; i < $scope.posts.length; i++) {
                if ($scope.posts[i].title === title) {
                    $scope.posts[i].show = $scope.posts[i].show != true;
                }
            }
        };


    }]);