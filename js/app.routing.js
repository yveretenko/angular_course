App.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/posts', {
            templateUrl: '/js/posts/partials/posts.html',
            controller:  'PostsController'
        })
        .when('/posts/:id', {
            templateUrl: '/js/posts/partials/post.html',
            controller:  'PostsController'
        })
    .otherwise('/');
});