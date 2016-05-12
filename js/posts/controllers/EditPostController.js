App.controller('EditPostController', function($scope, $resource, AuthService, $http, $base64, $window, $routeParams, $location){
    $scope.statuses = ['draft', 'publish', 'future', 'pending', 'private'];

    var Post = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts/:id');
    $scope.post = Post.get({id: $routeParams.id}, function(res){
        $scope.post = res;
        $scope.post.status = $scope.statuses[1];
        $scope.post.title = $scope.post.title.rendered;
        $scope.post.content = $scope.post.content.rendered;
    });

    $scope.save = function(){
        $scope.post.status=$scope.post.status.value;

        $http({
            method: 'POST',
            url: 'http://angular.codeforges.com/api/wp-json/wp/v2/posts/'+$routeParams.id,
            data: $scope.post,
            headers: {
                Authorization: AuthService.currentUser().credentials
            }
        }).then(function successCallback(response) {
            $location.path("/");
        });
    };
});