App.controller('PostsController', function($scope, $http, $resource, $routeParams){
    var Posts = $resource('http://angular.codeforges.com/api/wp-json/wp/v2/posts'+($routeParams.id ? '/'+$routeParams.id : ''));

    if (!$routeParams.id)
    {
        Posts.query(function(result){
            $scope.posts=result;
        });
    }
    else
    {
        Posts.get({id: $routeParams.id}, function(result){
            $scope.post=result;
        });
    }
});
