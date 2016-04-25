App.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
    .when('/', {
        templateUrl: 'js/main/partials/main.html', controller: 'MainController'
    })
    .when('/login', {
        templateUrl: 'js/main/partials/login.html', controller: 'LoginController'
    })
    .otherwise('/');
});
