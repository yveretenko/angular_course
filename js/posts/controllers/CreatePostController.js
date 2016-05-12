App.controller('CreatePostController', function($scope, $resource, AuthService, $http, $base64, $location){
    $scope.statuses = ['draft', 'publish', 'future', 'pending', 'private'];

    $scope.post={};
    $scope.post.status = $scope.statuses[1];

    $scope.save = function(){
        $http({
            method: 'POST',
            url: 'http://angular.codeforges.com/api/wp-json/wp/v2/posts',
            data: $scope.post,
            headers: {
                Authorization: AuthService.currentUser().credentials
            }
        }).then(function successCallback(response) {
            $location.path("/");
        });
    };
});
