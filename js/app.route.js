App.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
    .when('/', {
        templateUrl: 'js/main/partials/main.html',
        controller:  'MainController',
        resolve: {
            isLoggedIn: function(AuthService) {
                return AuthService.isLoggedIn();
            }
        }
    })
    .when('/login', {
        templateUrl: 'js/login/partials/login.html',
        controller:  'LoginController'
    })
    .otherwise('/');
});
