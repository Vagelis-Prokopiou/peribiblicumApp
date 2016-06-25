var app = angular.module('MyApp', [])
    .controller('mainCtrl', [
        '$scope',
        '$http',
        '$sce',
        '$location',
        '$anchorScroll',
        function ($scope, $http, $sce, $location, $anchorScroll) {

            var rest_api_url = 'https://public-api.wordpress.com/rest/v1.1/sites/peribiblicum.wordpress.com/posts/?number=100&fields=title,content';

            // Use the following to show and hide the black overlay
            // while fetching data.
            $scope.loading = true;

            $scope.date = new Date().getFullYear();

            $http({
                method: 'GET',
                url: rest_api_url
            }).then(function successCallback(response) {
                $scope.posts = response.data.posts;
                $scope.loading = false;

            }, function errorCallback() {
                $scope.error = 'An error occurred with the http request.';
                $scope.loading = false;
            });

            // See: http://stackoverflow.com/questions/14888822/parse-html-inside-ng-bind-using-angularjs
            $scope.toTrustedHTML = function (html) {
                return $sce.trustAsHtml(html);
            };

            $scope.toggleCustom = function (title) {
                for (var i = 0; i < $scope.posts.length; i++) {
                    if ($scope.posts[i].title === title) {
                        $scope.posts[i].show = $scope.posts[i].show != true;
                    } else {
                        $scope.posts[i].show = false;
                    }
                }

                // Automatically scroll to the clicked title.
                $location.hash(title);
                $anchorScroll();
            };
        }]);