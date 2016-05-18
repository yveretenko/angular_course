(function() {
    'use strict';

    angular
        .module('angular')
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({enabled: true, requireBase : false});

            $routeProvider
            .when('/login', {
                templateUrl: '/app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .when('/logout', {
                templateUrl: '/app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                resolve: {
                    logout: function($location, AuthService){
                        AuthService.logout();
                        $location.path("/login");
                    }
                }
            })
            .when('/', {
                templateUrl: '/app/posts/posts.html',
                controller: 'PostsController',
                controllerAs: 'vm'
            })
            .when('/posts/:id', {
              templateUrl: '/app/posts/show.html',
                controller: 'ShowController',
                controllerAs: 'vm'
            })
            .when('/new-post', {
                templateUrl: '/app/posts/create_post.html',
                controller: 'CreatePostController',
                controllerAs: 'vm'
            })
            .when('/edit-post/:id', {
                templateUrl: '/app/posts/create_post.html',
                controller: 'EditPostController',
                controllerAs: 'vm'
            })
            .otherwise('/');
          })
        .run(function($rootScope, $location, AuthService) {
            var rootScope=$rootScope;

            rootScope.$on( "$routeChangeStart", function() {
                AuthService.fetchUser();
                if (!AuthService.isLoggedIn())
                    $location.path("/login");
            });
        });
})();